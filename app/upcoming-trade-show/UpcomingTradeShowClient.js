'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function UpcomingTradeShowClient() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const search = searchParams?.get('search') || '';

	const [shows, setShows] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const [rateLimited, setRateLimited] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const limit = 20;
	const fetchInProgress = useRef(false);

	const fetchShows = useCallback(async (page, searchValue = '', retryCount = 0) => {
		if (fetchInProgress.current) {
			return { data: [], pagination: null, hasMore: false };
		}

		fetchInProgress.current = true;
		setLoading(true);
		setRateLimited(false);

		try {
			const url = new URL(`${apiBase}/upcoming-trade-shows`);
			url.searchParams.set('page', String(page));
			url.searchParams.set('limit', String(limit));
			url.searchParams.set('sortby', 'start_date');
			url.searchParams.set('sortorder', 'asc');
			if (searchValue) url.searchParams.set('search', searchValue);

			const res = await fetch(url.toString());

			if (res.status === 429) {
				setRateLimited(true);
				setTimeout(() => setRateLimited(false), 10000);
				if (retryCount < 3) {
					const delay = Math.pow(2, retryCount) * 1000;
					await new Promise(resolve => setTimeout(resolve, delay));
					fetchInProgress.current = false;
					return fetchShows(page, searchValue, retryCount + 1);
				}
				console.warn('Rate limited: Too many requests. Please wait a moment.');
				return { data: [], pagination: null, hasMore: false };
			}

			if (!res.ok) {
				return { data: [], pagination: null, hasMore: false };
			}

			const json = await res.json();
			const data = Array.isArray(json?.data) ? json.data : [];
			const pagination = json?.pagination || null;
			const hasMorePages = pagination ? page < pagination.last_page : false;

			return { data, pagination, hasMore: hasMorePages };
		} catch (error) {
			console.error('Error fetching trade shows:', error);
			return { data: [], pagination: null, hasMore: false };
		} finally {
			setLoading(false);
			fetchInProgress.current = false;
		}
	}, []);

	const loadInitialData = useCallback(async () => {
		const result = await fetchShows(1, search);
		setShows(result.data);
		setCurrentPage(1);
		setHasMore(result.hasMore);
	}, [fetchShows, search]);

	const loadMore = useCallback(async () => {
		if (loading || !hasMore || fetchInProgress.current) return;

		const nextPage = currentPage + 1;
		const result = await fetchShows(nextPage, search);

		if (result.data.length > 0) {
			setShows(prev => [...prev, ...result.data]);
			setCurrentPage(nextPage);
			setHasMore(result.hasMore);
		} else {
			setHasMore(false);
		}
	}, [currentPage, hasMore, loading, search, fetchShows]);

	useEffect(() => {
		loadInitialData();
	}, [loadInitialData]);

	// useEffect(() => {
	// 	let timeoutId;
	// 	let lastScrollTime = 0;
	// 	const SCROLL_THROTTLE = 500;

	// 	const handleScroll = () => {
	// 		const now = Date.now();
	// 		if (now - lastScrollTime < SCROLL_THROTTLE) {
	// 			return;
	// 		}

	// 		if (timeoutId) clearTimeout(timeoutId);
	// 		timeoutId = setTimeout(() => {
	// 			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
	// 				lastScrollTime = Date.now();
	// 				loadMore();
	// 			}
	// 		}, 300);
	// 	};

	// 	window.addEventListener('scroll', handleScroll, { passive: true });
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 		if (timeoutId) clearTimeout(timeoutId);
	// 	};
	// }, [loadMore]);

	useEffect(() => {
		setInputValue(search);
	}, [search]);

	const handleSearch = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const searchValue = formData.get('search') || '';
		router.push(`/upcoming-trade-show${searchValue ? `?search=${encodeURIComponent(searchValue)}` : ''}`);
	};

	const normalized = shows.map((s, index) => {
		const title = s.event_name || s.title || s.name || 'Upcoming Show';
		const slug = s.slug || '';
		const start = s.start_date || s.date || '';
		const end = s.end_date || '';
		const city = s.city || '';
		const country = s.country || '';
		const location = [city, country].filter(Boolean).join(', ');
		const rawLogo = s.event_logo || s.logo || s.image || '';
		let logo = '/images/iacp-logo.png';
		if (rawLogo) {
			logo = /^https?:/i.test(rawLogo)
				? rawLogo
				: `${apiBase}/images/uploads/tradeshow/${rawLogo}`;
		}
		return { id: s.id, title, slug, start, end, location, logo };
	});

	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Upcoming Trade Shows</h1>
								<p className="text-white text-xl">Stay updated with the latest trade shows where we’ll be showcasing our innovative booth designs and solutions.</p>
								<form className="flex flex-col sm:inline-flex sm:flex-row items-center justify-center mt-12 border border-[rgba(255,255,255,0.3)] p-1 rounded-lg w-auto max-w-md sm:max-w-lg mx-auto relative" onSubmit={handleSearch}>
									<div className="relative w-full sm:w-96 mb-2 sm:mb-0">
										<input style={{ color: 'white' }} name="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search Trade Fairs..." className="w-full py-3 px-4 pr-10 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-0 focus:ring-gray-500 focus:border-gray-500" />
										{search && (
											<button type="button" onClick={() => router.push('/upcoming-trade-show')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white">
												<i className="fa fa-times"></i>
											</button>
										)}
									</div>
									<button type="submit" className="w-full sm:w-auto py-3 px-6 bg-custom text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-teal-600 focus:outline-none">Search</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{rateLimited && (
				<div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-center">
					<p>Loading is temporarily limited. Please wait a moment...</p>
				</div>
			)}
			<section>
				<div className="tradesholistbg pb-20 pt-8">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
							{normalized.length === 0 && !loading ? (
								<p className="col-span-2 text-center text-gray-500">No upcoming trade shows found.</p>
							) : (
								normalized.map((s, idx) => {
									const href = s.slug ? `/upcoming-trade-show/${s.slug}` : '#';
									const dateText = s.start ? new Date(s.start).toLocaleDateString() + (s.end ? ` - ${new Date(s.end).toLocaleDateString()}` : '') : '';
									const uniqueKey = s.id ? `${s.id}-${idx}` : `${s.slug}-${idx}`;
									return (
										<div key={uniqueKey} className="bg-[#E8EEF7] p-4 rounded-md border border-gray-300">
											<div className="flex flex-col lg:flex-row gap-4 items-center">
												<div className="clientlogo rounded-md bg-[rgba(255,255,255,0.95)] p-1 max-w-[140px]"><Link href={href}><img src={s.logo} alt={s.title} className="w-full h-auto" /></Link></div>
												<div className="flex flex-col gap-2 text-center lg:text-left">
													<Link href={href}><h3 className="text-2xl font-semibold text-gray-700">{s.title}</h3></Link>
													<div className="flex items-center gap-x-2 justify-center lg:justify-start">
														<i className="fa fa-map-marker text-[#DE6A51] text-xl"></i>
														<span className="text-gray-600 text-md font-semibold">{s.location}</span>
													</div>
													<div className="flex items-center gap-x-2 justify-center lg:justify-start">
														<i className="fa fa-calendar text-[#DE6A51] text-xl"></i>
														<span className="text-gray-600 text-md font-semibold">{dateText}</span>
													</div>
												</div>
											</div>
										</div>
									);
								})
							)}
						</div>
						{shows.length >= 20 && hasMore && !loading && (
						  <div className="text-center mt-8">
						    <button
						      onClick={loadMore}
						      className="px-6 py-3 bg-[#943724] text-white text-lg rounded-md hover:bg-gray-700 hover:text-red border-2 border-[#943724] hover:border-gray-700 transition duration-300 cursor-pointer"
						    >
						      Load More Posts
						    </button>
						  </div>
						)}
						{loading && (
							<div className="flex justify-center items-center py-8">
								<div className="text-gray-500 text-lg">Loading more trade shows...</div>
							</div>
						)}

						{!hasMore && normalized.length > 0 && (
							<div className="flex justify-center items-center py-8">
								<div className="text-gray-500 text-lg">No more trade shows to load.</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
