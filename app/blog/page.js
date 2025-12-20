'use client';
import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

function stripHtml(html) {
	if (!html || typeof html !== 'string') return '';
	return html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function formatDate(dateLike) {
	if (!dateLike) return '';
	try {
		const d = new Date(dateLike);
		const day = d.getDate();
		const month = d.toLocaleString('en-GB', { month: 'short' });
		const year = d.getFullYear();
		return `${day} ${month}. ${year}`;
	} catch {
		return '';
	}
}

const RATE_LIMIT_STORAGE_KEY = 'blog_api_rate_limit';
const RATE_LIMIT_COOLDOWN = 10000; // 10 seconds cooldown after rate limit

function getLastRateLimitTime() {
	if (typeof window === 'undefined') return null;
	try {
		const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
		return stored ? parseInt(stored, 10) : null;
	} catch {
		return null;
	}
}

function setLastRateLimitTime() {
	if (typeof window === 'undefined') return;
	try {
		localStorage.setItem(RATE_LIMIT_STORAGE_KEY, Date.now().toString());
	} catch {}
}

function shouldWaitForRateLimit() {
	const lastRateLimit = getLastRateLimitTime();
	if (!lastRateLimit) return 0;
	const timeSince = Date.now() - lastRateLimit;
	const waitTime = RATE_LIMIT_COOLDOWN - timeSince;
	return waitTime > 0 ? waitTime : 0;
}

export default function Blog() {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const [rateLimited, setRateLimited] = useState(false);
	const [waitingForRateLimit, setWaitingForRateLimit] = useState(false);
	const perPage = 30;
	const fetchInProgress = useRef(false);

	const fetchPosts = useCallback(async (page, retryCount = 0) => {
		// Prevent multiple simultaneous requests
		if (fetchInProgress.current) {
			return { data: [], pagination: null, hasMore: false };
		}

		fetchInProgress.current = true;
		setLoading(true);
		
		// Only clear rate limit warning if we're not retrying
		if (retryCount === 0) {
			setRateLimited(false);
			setWaitingForRateLimit(false);
		}

		try {
			// Check if we should wait due to previous rate limiting
			const waitTime = shouldWaitForRateLimit();
			if (waitTime > 0 && retryCount === 0) {
				setWaitingForRateLimit(true);
				await new Promise(resolve => setTimeout(resolve, waitTime));
				setWaitingForRateLimit(false);
			}

			const url = new URL(`${apiBase}/blog`);
			url.searchParams.set('page', String(page));
			url.searchParams.set('per_page', String(perPage));

			const res = await fetch(url.toString());
			
			// Handle rate limiting (429) - wait longer and don't retry too aggressively
			if (res.status === 429) {
				setRateLimited(true);
				setLastRateLimitTime(); // Store rate limit time
				
				// For 429 errors, wait 10 seconds before retrying (only retry once)
				if (retryCount === 0) {
					setWaitingForRateLimit(true);
					await new Promise(resolve => setTimeout(resolve, 10000));
					setWaitingForRateLimit(false);
					fetchInProgress.current = false;
					// Only retry once for 429 errors
					return fetchPosts(page, retryCount + 1);
				}
				
				// After first retry fails, don't retry again - respect the rate limit
				console.warn('Rate limited: Too many requests. Please wait a moment before refreshing.');
				return { data: [], pagination: null, hasMore: false };
			}

			if (!res.ok) {
				// For other errors, don't retry
				return { data: [], pagination: null, hasMore: false };
			}

			// Success - clear rate limit warning and storage
			setRateLimited(false);
			setWaitingForRateLimit(false);
			if (typeof window !== 'undefined') {
				try {
					localStorage.removeItem(RATE_LIMIT_STORAGE_KEY);
				} catch {}
			}
			
			const json = await res.json();
			const data = Array.isArray(json?.data) ? json.data : [];
			const pagination = json?.meta || null;
			const hasMorePages = pagination ? page < pagination.last_page : false;

			return { data, pagination, hasMore: hasMorePages };
		} catch (error) {
			console.error('Error fetching blog posts:', error);
			return { data: [], pagination: null, hasMore: false };
		} finally {
			setLoading(false);
			fetchInProgress.current = false;
		}
	}, []);

	const initialLoadDone = useRef(false);
	const loadInitialData = useCallback(async () => {
		// Prevent multiple initial loads
		if (initialLoadDone.current) {
			return;
		}
		initialLoadDone.current = true;
		
		const result = await fetchPosts(1);
		if (result.data.length > 0) {
			setPosts(result.data.map((p, idx) => {
				const title = p.blogtitle || `Post ${idx + 1}`;
				const slug = p.url || '';
				const date = p.created_at ? p.created_at : p.updated_at || '';
				const excerpt = stripHtml(p.blogdesc || '').slice(0, 180);
				const thumbRaw = p.blogimg || '';
				let thumb = '/images/pt1.webp';
				if (thumbRaw) thumb = /^https?:/i.test(thumbRaw) ? thumbRaw : `${apiBase}/images/uploads/blog/${thumbRaw}`;
				return { title, slug, date, excerpt, thumb };
			}));
		}
		setCurrentPage(1);
		setHasMore(result.hasMore);
	}, [fetchPosts]);

	const handleRetry = useCallback(() => {
		initialLoadDone.current = false;
		setRateLimited(false);
		setWaitingForRateLimit(false);
		if (typeof window !== 'undefined') {
			try {
				localStorage.removeItem(RATE_LIMIT_STORAGE_KEY);
			} catch {}
		}
		loadInitialData();
	}, [loadInitialData]);

	const loadMoreInProgress = useRef(false);
	const lastLoadTime = useRef(0);
	const MIN_LOAD_INTERVAL = 2000; // Minimum 2 seconds between load attempts
	
	// Use refs to track current state values to avoid re-creating scroll handler
	const stateRefs = useRef({ currentPage: 1, hasMore: true, loading: false });
	const fetchPostsRef = useRef(null);
	
	// Update refs when state changes
	useEffect(() => {
		stateRefs.current = { currentPage, hasMore, loading };
	}, [currentPage, hasMore, loading]);

	// Update fetchPosts ref when it changes
	useEffect(() => {
		fetchPostsRef.current = fetchPosts;
	}, [fetchPosts]);

	const loadMore = useCallback(async () => {
		// Use refs for checking to avoid stale closures
		const { currentPage: page, hasMore: more, loading: isLoading } = stateRefs.current;
		
		// Prevent if already loading, no more pages, or request in progress
		if (isLoading || !more || fetchInProgress.current || loadMoreInProgress.current) {
			return;
		}

		// Rate limit: Don't load if less than MIN_LOAD_INTERVAL has passed
		const now = Date.now();
		if (now - lastLoadTime.current < MIN_LOAD_INTERVAL) {
			return;
		}

		loadMoreInProgress.current = true;
		lastLoadTime.current = now;

		const nextPage = page + 1;
		const fetchFn = fetchPostsRef.current;
		if (!fetchFn) {
			loadMoreInProgress.current = false;
			return;
		}
		
		const result = await fetchFn(nextPage);

		if (result.data.length > 0) {
			const newPosts = result.data.map((p, idx) => {
				const title = p.blogtitle || `Post ${idx + 1}`;
				const slug = p.url || '';
				const date = p.created_at ? p.created_at : p.updated_at || '';
				const excerpt = stripHtml(p.blogdesc || '').slice(0, 180);
				const thumbRaw = p.blogimg || '';
				let thumb = '/images/pt1.webp';
				if (thumbRaw) thumb = /^https?:/i.test(thumbRaw) ? thumbRaw : `${apiBase}/images/uploads/blog/${thumbRaw}`;
				return { title, slug, date, excerpt, thumb };
			});
			setPosts(prev => [...prev, ...newPosts]);
			setCurrentPage(nextPage);
			setHasMore(result.hasMore);
		} else {
			setHasMore(false);
		}

		loadMoreInProgress.current = false;
	}, []);

	// Only load initial data once on mount
	useEffect(() => {
	if (initialLoadDone.current) return;

	// Try reading cached posts from sessionStorage
	const cached = sessionStorage.getItem('blog_posts');
	if (cached) {
		try {
			const parsed = JSON.parse(cached);
			if (Array.isArray(parsed) && parsed.length > 0) {
				setPosts(parsed);
				initialLoadDone.current = true;
				return; // Stop here — no API call needed
			}
		} catch {}
	}

	// Otherwise, fetch fresh data and cache it
	loadInitialData().then(() => {
		setTimeout(() => {
			sessionStorage.setItem('blog_posts', JSON.stringify(posts));
		}, 1000);
	});
}, []); // run once // Empty dependency array - only run once on mount

	

	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">The Ultimate Exhibitor’s Guide to Trade Shows</h1>
								<p className="text-white text-lg">Your essential guide to planning, designing, and running a successful trade show booth.</p>
								<div className="mt-8"><Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{(rateLimited || waitingForRateLimit) && (
				<div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-center">
					<div className="flex flex-col items-center gap-3">
						<p>
							{waitingForRateLimit 
								? 'Waiting before retrying... Please wait a moment.'
								: 'Loading is temporarily limited due to rate limiting. Please wait a moment before trying again.'}
						</p>
						{rateLimited && !waitingForRateLimit && !loading && (
							<button
								onClick={handleRetry}
								className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition duration-300"
							>
								Retry Loading
							</button>
						)}
					</div>
				</div>
			)}
			<section>
				<div className="faqbg py-12">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
							{posts.length === 0 && !loading && !rateLimited && !waitingForRateLimit ? (
								<p className="col-span-3 text-center text-gray-500">No posts found.</p>
							) : posts.length === 0 && rateLimited && !waitingForRateLimit ? (
								<p className="col-span-3 text-center text-gray-500">Unable to load posts due to rate limiting. Please use the retry button above.</p>
							) : (
								posts.map((p, idx) => (
									<div key={`${p.slug}-${idx}`} className="card rounded-xl flex flex-col h-full relative">
										<div className="thumb shadow-lg bg-black rounded-xl relative">
											<div className="thumb-wrapper rounded-xl">
												<Link href={p.slug ? `/blog/${p.slug}` : '#'}><img src={p.thumb} width="768" height="531" alt={p.title} className="w-full h-auto rounded-xl"/></Link>
											</div>
										</div>
										<div className="card-info pt-4 pb-4 text-center border-b border-gray-300 rounded-xl flex flex-col flex-grow justify-between">
											<Link href={p.slug ? `/blog/${p.slug}` : '#'}><h4 className="text-gray-700 font-semibold text-3xl block">{p.title}</h4></Link>
											<div className="flex items-center pt-2 justify-center">
												<span className="text-sm text-gray-500">{formatDate(p.date)} • Triumfo Inc.</span>
											</div>
										</div>
									</div>
								))
							)}
						</div>
						{posts.length >= 30 && hasMore && !loading && (
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
							<div className="text-center mt-8 text-gray-500">
								Loading  Blogs...
							</div>
						)}

						{!hasMore && posts.length > 0 && (
							<div className="text-center mt-8 text-gray-500">
								No more posts to load.
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
