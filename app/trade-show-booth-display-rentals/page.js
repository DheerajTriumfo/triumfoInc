'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import $ from 'jquery';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function TradeShowBoothDisplayRentals() {
	const router = useRouter();
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedBoothSize, setSelectedBoothSize] = useState('');
	const [cities, setCities] = useState([]);
	const [citySearchQuery, setCitySearchQuery] = useState('');
	const [loadingCities, setLoadingCities] = useState(true);
	const [loadingBoothData, setLoadingBoothData] = useState(false);

	// Fetch cities from API
	useEffect(() => {
		const fetchCities = async () => {
			try {
				setLoadingCities(true);
				const res = await fetch(`${apiBase}/cities/all`, { cache: 'no-store' });
				if (res.ok) {
					const json = await res.json();
					console.log('Cities API Response:', json); // Debug log
					if (json.success && json.data && Array.isArray(json.data)) {
						const cityList = json.data.map(city => ({
							id: city.id,
							name: city.name || city.cityname || city.display_name || '',
							display_name: city.display_name || city.citydisplay || city.name || city.cityname || '',
							url: city.url || ''
						})).filter(city => city.name && city.display_name); // Filter out any invalid entries
						
						console.log('Processed Cities:', cityList); // Debug log
						setCities(cityList);
					} else {
						console.warn('Unexpected API response structure:', json);
					}
				} else {
					console.error('API response not OK:', res.status, res.statusText);
				}
			} catch (error) {
				console.error('Error fetching cities:', error);
				// Fallback to static cities if API fails
				const fallbackCities = ['Las Vegas', 'Chicago', 'Orlando', 'Anaheim', 'San Diego', 'Los Angeles', 'Atlanta', 'New York', 'Noida'];
				setCities(fallbackCities.map((name, idx) => ({ id: idx, name, display_name: name, url: name.toLowerCase().replace(/\s+/g, '-') })));
			} finally {
				setLoadingCities(false);
			}
		};

		fetchCities();
	}, []);

	// Filter cities based on search query
	const filteredCities = useMemo(() => {
		if (!citySearchQuery.trim()) {
			return cities;
		}
		const query = citySearchQuery.toLowerCase();
		return cities.filter(city => 
			city.name?.toLowerCase().includes(query) || 
			city.display_name?.toLowerCase().includes(query)
		);
	}, [cities, citySearchQuery]);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (selectedBoothSize) {
			setLoadingBoothData(true);
			try {
				// Fetch booth size data from API
				const boothSizeSlug = selectedBoothSize.toLowerCase().replace(/\s+/g, '-');
				const res = await fetch(`${apiBase}/rental/booth-size/${boothSizeSlug}`, {
					cache: 'no-store',
				});
				
				if (res.ok) {
					const json = await res.json();
					// Navigate to the booth size page
					router.push(`/${boothSizeSlug}-trade-show-booth/`);
				} else {
					// If API fails, still navigate to the booth size page
					router.push(`/${boothSizeSlug}-trade-show-booth/`);
				}
			} catch (error) {
				console.error('Error fetching booth size data:', error);
				// Navigate anyway
				const boothSizeSlug = selectedBoothSize.toLowerCase().replace(/\s+/g, '-');
				router.push(`/${boothSizeSlug}-trade-show-booth/`);
			} finally {
				setLoadingBoothData(false);
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
				clearInterval(interval);
				if ($('#rental').length) {
					$('#rental').owlCarousel({
						loop: true,
						margin: 20,
						nav: false,
						dots: true,
						autoplay: true,
						autoplayTimeout: 2500,
						smartSpeed: 1000,
						autoplayHoverPause: true,
						responsive: {
							0: { items: 1 },
							768: { items: 2 },
							1200: { items: 4 }
						}
					});
				}
			}
		}, 100);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		const initFAQ = () => {
			if (window.$ && window.$.fn) {
				$(".faqbg").each(function () {
					var $this = $(this);

					$this.find(".tab-button").click(function () {
						$this.find(".tab-button").removeClass("on");
						$this.find(".tab-caption").slideUp("normal");

						if ($(this).next().is(":hidden") == true) {
							$(this).addClass("on");
							$(this).next().slideDown("normal");
						}
					});

					$this.find(".tab-caption").hide();
					$this.find(".tab-caption:first").show();
					$this.find(".tab-button:first").addClass("on");
				});
			}
		};

		const interval = setInterval(() => {
			if (window.$ && window.$.fn) {
				clearInterval(interval);
				initFAQ();
			}
		}, 100);

		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
    // ensure jQuery is available
    if (typeof window === 'undefined' || !window.$) return;
    const $ = window.$;

    $(document).ready(function () {
      $('.moreless-button').off('click.moreless').on('click.moreless', function () {
        $('.moretext').slideDown();

        if ($(this).text().trim() === "Read more") {
          $(this).text("Load More");
        } else {
          $(this).html('<a href="/get-booth-quotation/" class="less-link" style="color:#fff;">Contact For Turnkey Services</a>');
        }
      });
    });

    // cleanup on unmount
    return () => {
      $('.moreless-button').off('click.moreless');
    };
  }, []);
	const boothSizes = ['10x10', '10x20', '10x30', '20x20', '20x30', '20x40', '30x30', '30x40', '40x40', '40x50'];

	const portfolioItems = [
		{ title: 'Tedial', subtitle: 'Rental Booth for Tedial @ Promat 2025', image: '/images/rpt1.webp' },
		{ title: 'PRECIMETER', subtitle: 'Rental Booth for PRECIMETER @ Aluminum 2025', image: '/images/rpt2.webp' },
		{ title: 'CRYO Future', subtitle: 'Rental Booth for CRYO Future @ ASRM 2025', image: '/images/rpt3.webp' },
		{ title: 'Alliance Plast', subtitle: 'Rental Booth for Alliance Plast @ Pack Expo 2025', image: '/images/rpt4.webp' },
		{ title: 'Felix Schoeller', subtitle: 'Rental Booth for Felix Schoeller @ Printing United 2025', image: '/images/rpt5.webp' },
		{ title: 'Business France', subtitle: 'Rental Booth for Business France @ Smallast Confrence 2025', image: '/images/rpt6.webp' },
	];

	const faqs = [
		{
			q: 'How much customization is possible with your rental exhibit?',
			a: 'Rental booths can be fully customized according to your branding, graphics, colors, and layout needs. We can also add interactive elements that align with your exhibit goals while keeping the costs in control.',
			bg: 'bg-gray-100'
		},
		{
			q: 'Who is responsible for handling the installation, dismantling, and logistics?',
			a: 'We are a full-service provider for rental booths. We offer complete I&D (Installation and Dismantling) and logistics support through experienced teams of professionals. This saves you from coordinating multiple vendors.',
			bg: 'bg-white'
		},
		{
			q: 'What is the minimum time required to customize a rental booth?',
			a: 'This timeline depends on the complexity of graphics and features to be added. It’s best to start at least 2 to 5 weeks before the show. This allows ample time for design approval, graphic production, and logistics coordination.',
			bg: 'bg-white'
		},
		{
			q: 'If we have multiple shows throughout the year, is renting or buying more cost-effective?',
			a: 'This decision is mainly based on show frequency. Renting is ideal for 1 to 3 shows per year. Buying a booth becomes more cost-effective when you participate in 4 or more shows per year.',
			bg: 'bg-white'
		},
		{
			q: 'What’s included in your trade show booth rental package?',
			a: 'Our booth rental packages include the booth structure, graphics, furniture, lighting, and flooring. We also handle setup, dismantling, and logistics. Also, storage and on-site booth management are included in our booth rental services.',
			bg: 'bg-gray-100'
		},
		{
			q: 'What factors affect the cost of renting a trade show booth in the U.S.?',
			a: 'The cost of renting a trade show display depends on many factors. These factors are booth size, design complexity, materials, graphic production, and show location. Support service requirements, such as installation, shipping, and on-site labor, also impact the overall cost.',
			bg: 'bg-gray-100'
		},
	];

	return (
		<>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
			<section>
				<div className="bannerbg bg-[#34343C] py-16 lg:py-36">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Find the Right Trade Show Booth Rental</h1>
								<p className="text-white text-xl">Explore our range of trade show display rentals by size and city to find the perfect exhibit for your brand.</p>
							</div>
						</div>
						<div className="searchbar mt-8 mx-auto w-full max-w-4xl px-4">
							<form onSubmit={handleSearch} className="flex-col md:flex-row flex flex-wrap items-center justify-between border border-gray-500 p-3 rounded-xl">
								<div className="relative flex-1 min-w-full md:min-w-[200px]">
									{/* City Search Input */}
									<input
										type="text"
										value={selectedCity || citySearchQuery}
										onChange={(e) => {
											const value = e.target.value;
											setCitySearchQuery(value);
											if (!value) {
												setSelectedCity('');
											}
										}}
										onFocus={() => {
											if (selectedCity) {
												setCitySearchQuery(selectedCity);
												setSelectedCity('');
											}
										}}
										placeholder="Search City..."
										className="w-full bg-transparent text-white font-medium px-4 py-3 pr-10 rounded-md focus:outline-none text-center placeholder-gray-400"
									/>
									<svg xmlns="http://www.w3.org/2000/svg"
										className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="1.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
									</svg>
									{/* City Dropdown */}
									{citySearchQuery && !selectedCity && filteredCities.length > 0 && (
										<div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
											{filteredCities.map(city => (
												<div
													key={city.id}
													onClick={() => {
														setSelectedCity(city.display_name || city.name);
														setCitySearchQuery('');
													}}
													className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
												>
													{city.display_name || city.name}
												</div>
											))}
										</div>
									)}
								</div>
								<div className="hidden md:block w-px h-8 bg-gray-500 mx-2"></div>
								<div className="relative flex-1 min-w-full md:min-w-[200px]">
									<select
										value={selectedBoothSize}
										onChange={(e) => setSelectedBoothSize(e.target.value)}
										className="w-full bg-transparent text-white font-medium px-4 py-3 pr-10 rounded-md focus:outline-none cursor-pointer appearance-none text-center"
										required
									>
										<option value="" disabled style={{ color: '#9ca3af' }}>Select Boothsize</option>
										{boothSizes.map(size => (
											<option key={size} value={size} style={{ color: '#374151' }}>{size}</option>
										))}
									</select>
									<svg xmlns="http://www.w3.org/2000/svg"
										className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="1.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
									</svg>
								</div>
								<button
									type="submit"
									disabled={loadingBoothData || !selectedBoothSize}
									className="bg-[#9A3220] hover:bg-[#a51f23] disabled:bg-[#9A3220] disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 flex-shrink-0 mt-3 md:mt-0 block w-full md:w-auto"
								>
									{loadingBoothData ? 'Loading...' : 'Search'}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="stepbg bg-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="maintitle text-gray-700 mb-6">Rent Your Booth in Just 4 Easy Steps</h1>
								<p className="text-gray-600 text-lg">Getting booth rentals for trade shows has never been so easy! You just need to follow four steps to tell your brand story at trade shows with an exceptional exhibit rental.</p>
							</div>
						</div>
						<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
							<div className="rounded-[14px] border border-gray-300 text-center bg-white flex items-center justify-center">
								<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-12 lg:py-24">Select Your Rental Booth Size</h4>
							</div>
							<div className="rounded-[14px] border border-gray-300 text-center bg-white flex items-center justify-center">
								<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-12 lg:py-24">Choose the Perfect Design</h4>
							</div>
							<div className="rounded-[14px] border border-gray-300 text-center bg-white flex items-center justify-center">
								<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-12 lg:py-24">Customize with Your Branding</h4>
							</div>
							<div className="rounded-[14px] border border-gray-300 text-center bg-white flex items-center justify-center">
								<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-12 lg:py-24">Finalize and Hit the Floor</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="servicebg bg-[#E9EEF7] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="maintitle text-gray-700 mb-6">Why Rent a Trade Show Booth?</h1>
							<p className="text-gray-600 text-lg">Renting a trade show booth offers many remarkable advantages. Let us elaborate on the major reasons why you should prefer it over purchasing a booth. </p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4 mt-12">
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">Optimize Trade Show Costs</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">You can reduce overall exhibiting expenses by renting instead of buying a booth. It eliminates huge upfront investment and maintenance liabilities.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">Quick Installation & Dismantling</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">We fabricate the components of booth rentals to ensure quick installation and dismantling. It reduces downtime and on-site labor expenses.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">Flexible <br />Designs</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">Modular layouts of booth rentals can be easily modified to match any booth size, branding goal, marketing message, and exhibit environment.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">No Storage <br />Worries</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">You get rid of storage, maintenance, and long-term warehousing needs with display rentals. You simply have to return them after the event.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contentbg py-36">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24 items-center">
							<div className="mb-8 lg:mb-0">
								<div className="figure relative before:absolute before:content-[''] before:inset-0 before:left-[-10px] before:top-[-7px] before:bg-[#34343C] before:w-[calc(100%-50px)] before:h-[calc(100%+14px)] before:rounded-[8px]">
									<Image src="/images/build-rental-booth.webp" width={582} height={474} alt="" className="w-full h-auto rounded-xl relative z-10" />
								</div>
							</div>
							<div className="contents self-center">
								<div>
									<h2 className="maintitle text-gray-700 mb-4">Let’s Build Your Rental Booth</h2>
									<p className="text-xl text-gray-500 leading-relaxed">Need a unique design tailored to your brand and goals? Contact us — we’ll create one for free within 48 hours.</p>
									<div className="flex flex-col sm:flex-row gap-4 mt-12">
										<Link href="/get-free-3d-design/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
											Claim Your Free Design
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="homeportfolio bg-[#34343C] py-20">
					<div className="container mx-auto px-4 text-center text-white pb-20">
						<h2 className="maintitle">Our Recent Work</h2>
						<div className="max-w-3xl mx-auto mt-4">
							<p className="text-xl text-white leading-relaxed">Check out trade show booth rental projects that we have delivered to eminent brands for diverse and internationally-acclaimed business events.</p>
						</div>
					</div>
					<div className="px-4 sm:px-2 py-2">
						<div className="grid grid-cols-12 gap-2">
							{portfolioItems.map((item, idx) => (
								<div key={idx} className="group grid col-span-6 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
									<Image src={item.image} alt={item.title} width={768} height={531} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
									<div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="flex items-center justify-center w-full h-full text-center">
											<div className="cursor-pointer">
												<h2 className="text-white font-semibold text-4xl mb-4">{item.title}</h2>
												<p className="text-white text-base">{item.subtitle}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
							<Link href="/get-booth-quotation/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:border-gray-500 hover:text-white transition duration-300">
								Get A Quote
							</Link>
							<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300">
								View Recent Work
							</Link>
						</div>
					</div>
				</div>
			</section>


			<section>
  <div className="bg-[#E9EEF7] py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="maintitle text-gray-700 mb-6">
         End-to-End Exhibit Rental Solutions In the USA
        </h2>
        <p className="text-xl text-gray-500">
         Triumfo Inc. is a trusted name in trade show booth rentals with 25+ years of experience. We deliver fully managed rental exhibits across major U.S. trade show cities—simple, seamless, and stress-free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
		<div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Las Vegas
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Chicago
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Orlando
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
             Anaheim
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              San Diego
            </h3>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Los Angeles
            </h3>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
             Atlanta
            </h3>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              New York
            </h3>
          </div>
        </div>
      </div>
      <div className="moretext hidden">
      		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
		
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Washington DC
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Seattle
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              San Francisco
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Miami
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Denever
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Utah
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Baltimore
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              South Carolina
            </h3>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center px-4">
		<Link href="#" className="moreless-button w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
			View More
		</Link>
	</div>
  </div>
</section>



			
			<section>
				<div className="faqbg bg-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mb-12 text-center mx-auto">
							<h2 className="text-gray-700 text-6xl font-bold mb-4">FAQs</h2>
							<p className="text-gray-600 mb-6 text-base">Learn answers from experts to your queries you may have when renting trade show booths.</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2  md:gap-12">
							<div className="self-center">
								{faqs.map((faq, idx) => (
									<div key={idx} className={`borbg ${idx === 0 ? 'mb-4' : 'mb-2'} rounded-xl overflow-hidden ${faq.bg}`}>
										<div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
												<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
											</svg>
											{faq.q}
										</div>
										<div className="tab-caption px-6 py-4 text-base text-gray-600">
											<p>{faq.a}</p>
										</div>
									</div>
								))}
							</div>
							<div className="self-center hidden lg:block">
								<Image src="/images/faq7.webp" width={602} height={650} alt="" className="w-full h-auto rounded-xl" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="ctaction bg-[#E9EEF7] py-10">
				<div className="container mx-auto px-4">
					<div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 mx-4 md:mx-auto max-w-7xl my-10">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
							<div>
								<h2 className="text-xl md:text-4xl font-semibold mb-3 barlofamilty">
									Ready to plan your next show?
								</h2>
								<p className="text-sm md:text-base text-gray-300">
									Tell us your goals — we'll recommend the ideal booth solution.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
								<Link href="/schedule-a-call/" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
									Schedule a Call
								</Link>
								<Link href="/get-booth-quotation/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
									Get a Quote
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				select option {
					background-color: #fff !important;
					color: #414141;
				}
				select option:hover {
					background-color: #000 !important;
					color: #fff !important;
				}
				.contentbg {
					display: block;
				}
				.contentbg .figure {
					display: block;
					width: 100%;
					position: relative;
				}
				.contentbg .figure::before {
					content: '';
					display: block;
					position: absolute;
					left: -10px;
					top: -7px;
					width: calc(100% - 50px);
					height: calc(100% + 14px);
					background: #34343C;
					border-radius: 8px;
				}
				.contentbg .figure img {
					position: relative;
					z-index: 1;
					width: 100%;
					height: auto;
				}
				.contentbg .contents {
					display: block;
					position: relative;
				}
				input::placeholder{
					color:#ffffff;
				}
			`}</style>
		</>
	);
}

