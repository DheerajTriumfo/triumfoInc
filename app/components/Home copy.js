'use client';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useRef } from 'react';
import { useHomeQuery } from '../../hooks/useHomeQuery';
import { get } from '../../lib/apiClient';
import Faqtab from './../home/faq.js';




export default function Home() {
  const { data, isLoading } = useHomeQuery();
  const [hpPortfolio, setHpPortfolio] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0, countries: 0 });
  const statsRef = useRef(null);


  
  const cities = [
    'Las Vegas', 'Chicago', 'Orlando', 'Anaheim', 
    'San Diego', 'Los Angeles', 'Atlanta', 'New York'
  ];
  
  const services = [
    { title: '3D Visualization', icon: '✨', description: 'Immersive design experiences' },
    { title: 'Custom Fabrication', icon: '🏗️', description: 'Precision craftsmanship' },
    { title: 'Project Management', icon: '📊', description: 'Seamless execution' },
    { title: 'Installation & Dismantling', icon: '⚙️', description: 'Expert handling' },
    { title: 'Global Logistics', icon: '🌐', description: 'Worldwide delivery' },
    { title: 'Graphic Production', icon: '🎨', description: 'Premium printing' },
    { title: 'Digital Integration', icon: '💻', description: 'Cutting-edge technology' },
    { title: 'Post-Show Support', icon: '✅', description: 'Ongoing partnership' }
  ];


  const openModal = (url) => {
    setVideoUrl(url ? `${url}?autoplay=1` : "");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'videoModal') closeModal();
  };
  const banner = data?.banner || {};
  const stats = data?.stats || [];
  const locations = data?.locations || [
    { title: '3D Visualization', href: '' },
    { title: 'Custom Fabrication', href: '' },
   
    { title: 'Project Management', href: '' },
    { title: 'Installation,  Dismantling', href: '' },
    { title: 'Global Logistics', href: '' },
    { title: 'Graphic Production', href: '' },
    { title: 'Digital Integration', href: '' },
    { title: 'Post-Show Support', href: '' }
    ];

  const rentals = data?.rentals || [];
  console.log(rentals);
  const portfolio = data?.portfolio || [];
  const testimonials = data?.testimonials || [];
  
  const brandLogos = [
    { src: "/images/client-logo/samsung.svg", alt: "Samsung client logo" },
    { src: "/images/client-logo/gle.webp", alt: "Google client logo" },
    { src: "/images/client-logo/LG.png", alt: "LG client logo" },
    { src: "/images/client-logo/etihad-beyond.png", alt: "Etihad Beyond client logo" },
    { src: "/images/client-logo/BYD.jpg", alt: "BYD client logo" },
  ];
 // Animated counters
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = 25 / steps;
          const projectsIncrement = 500 / steps;
          const clientsIncrement = 1000 / steps;
          const countriesIncrement = 30 / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            setCounters({
              years: Math.min(25, Math.floor(currentStep * increment)),
              projects: Math.min(500, Math.floor(currentStep * projectsIncrement)),
              clients: Math.min(1000, Math.floor(currentStep * clientsIncrement)),
              countries: Math.min(30, Math.floor(currentStep * countriesIncrement))
            });
            if (currentStep >= steps) clearInterval(timer);
          }, duration / steps);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => {
    if (statsRef.current) {
      observer.unobserve(statsRef.current);
    }
  };
}, []);

  return (
    <>
       <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .glass-dark {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
        }
        .text-gradient-blue {
          background: linear-gradient(135deg, #0066FF 0%, #00CCFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }
        .premium-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
        }
        .premium-card-dark {
          background: linear-gradient(145deg, #1a1a2e 0%, #0f0f1e 100%);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.2);
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      <link
        rel="preload"
        href="/_next/static/css/app.css"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link rel="stylesheet" href="/_next/static/css/app.css" />
      </noscript>
      {/* <section>
        <div className="bannerbg relative">
          <a href="/trade-show-booth-ideas/">
        <Image
        src={banner?.imageDesktop || "/images/banner-desktop.webp"} width={1920} height={813} 
        alt="Large Trade Show Booth"
        priority={false}
        className="hidden lg:block"
      />
      <Image
        src={banner?.imageTablet || "/images/banner-tablet.webp"} width={1200} height={508} 
        alt="Large Trade Show Booth"
        priority={false}
        className="hidden md:block lg:hidden"
      />
      <Image
        src={banner?.imageMobile || "/images/banner-mobileview.webp"} width={768} height={325}  alt="Large Trade Show Booth" loading="eager"  priority={true} fetchPriority="high" className="block md:hidden"
      />
        </a>
        </div>
      </section> */}
         <section>
        <div className="bannerbg relative">
          <Image src={banner?.imageUrl || "/images/booth-design-banner.webp"}  width={1920} height={813} priority={true} 
          sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         1920px" alt="Dream. Build. Belong"
        />
          <div className="bg-[#34343C] md:bg-[rgba(0,0,0,0.4)] relative md:absolute top-0 left-0 z-20 w-full h-full">
            <div className="container mx-auto relative p-6 md:p-0 top:0 md:top-1/2 transform-0 md:transform-[translateY(-50%)]">
              <div className="grid grid-cols-1 justify-items-center ">
                <p className="text-white mb-4 font-bold leading-tight max-w-6xl text-4xl lg:text-[8rem] font-heading">{banner?.title || 'Dream. Build. Belong'}</p>
                <div className="font-semibold text-2xl text-white md:text-4xl leading-tight max-w-2xl mb-2 font-heading">{banner?.subtitle || '25+ Years of Building Trust.'}</div>
                <div className="flex justify-center my-6">
                  <div><a href="/trade-show-booth-ideas/" className="px-8 py-3 bg-[#8E2614] border-2 border-[#9A3220] rounded-xl text-xl text-white hover:bg-gray-700 hover:border-2 hover:border-gray-600  hover:text-white transition duration-300">Browse from over 500 Designs</a></div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {isModalOpen && (
        <div
          id="videoModal"
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        >
          <div className="relative w-full max-w-6xl aspect-video mx-4">
            <button
              onClick={closeModal}
              className="absolute cursor-pointer -top-4 -right-4 text-white text-2xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80"
            >
              &times;
            </button>
            <iframe
              id="youtubeIframe"
              className="w-full h-full rounded-md"
              src={videoUrl || null}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {/* <section>
        <div className="topsection py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="maintitle text-gray-700 mb-6">{data?.intro?.title || 'End-to-End Trade Show Exhibit Solutions & Stand Builders'}</h1>
              <p className="text-xl text-gray-500">{data?.intro?.description || 'Triumfo Inc. is your dedicated, full-service partner for high-impact trade show exhibit booths nationwide. For over 25 years, we have mastered the art of exhibition, delivering complete turnkey solutions—from initial trade show booth design to on-site management. Whether you need a bespoke, permanent custom trade show booth or a flexible exhibit rental, we have the expertise to execute your vision flawlessly.'}</p>
            </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 items-center justify-items-center">
              {brandLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[180px] aspect-[5/3] rounded-xl border border-gray-500 bg-white flex items-center justify-center p-4"
                >
                  <Image
                    src={logo.src}
                    width={200}
                    height={94}
                    alt={logo.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-x-4 mt-12">
                  <div><a href={data?.cta?.primary?.href || "/contact-us/"} className="px-6 py-3 bg-[#9A3220] border-2 border-[#9A3220] rounded-xl text-xl text-white hover:bg-gray-500 hover:border-2 hover:border-white  hover:text-white transition duration-300">{data?.cta?.primary?.label || 'Get A Quote'}</a></div>
                  <div><a href={data?.cta?.secondary?.href || "/about-us/"} className="px-6 py-3 border-2 border-[#9A3220] rounded-xl text-black text-xl hover:bg-custom hover:text-white transition duration-300">{data?.cta?.secondary?.label || 'About Us'}</a></div>
                </div>
          </div>
        </div>
     
      </section> */}
      <section>
        <div className="topsection py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-red-700 text-center font-semibold barlofamilty leading-tight">{data?.intro?.eyebrow || 'Triumfo Inc.'}</p>
              <h1 className="maintitle text-gray-700 mb-6">{data?.intro?.title || 'Trade Show Exhibit Booths Engineered for Engagement, Attraction & ROI'}</h1>
              <p className="text-xl text-gray-500">{data?.intro?.description || 'We have been crafting custom trade show booths that empower exhibitors to create memorable brand experiences since 1999. We simplify your trade show exhibit journey by eliminating last-minute hassles. We deliver turnkey trade show booth services with consistent quality, on time and on budget.'}</p>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {(stats.length ? stats : [
                { icon: '/images/exhibit-service.webp',label: 'Large Exhibit', value1: '40x40 Exhibits',  url1: '/40x40-trade-show-booth/', value2: '40x50 Exhibits',  url2: '/40x50-trade-show-booth/', value3: 'Custom Exhibit Sizes',  url3: '/40x50-trade-show-booth/', },
                { icon: '/images/exhibit-service.webp',label: 'Island Exhibits', value1: '20x20 Exhibits',  url1: '/20x20-trade-show-booth/', value2: '30x30 Exhibits',  url2: '/30x30-trade-show-booth/', value3: 'Custom Exhibit Sizes',  url3: '/30x30-trade-show-booth/', },
                { icon: '/images/exhibit-service.webp',label: 'Inline Exhibits', value1: '10x10 Exhibits',  url1: '/10x10-trade-show-booth/', value2: '10x20 Exhibits',  url2: '/10x20-trade-show-booth/', value3: 'Custom Exhibit Sizes',  url3: '/10x20-trade-show-booth/', },
                { icon: '/images/exhibit-service.webp',  label: 'Rental Exhibit', value1: 'Flexible rental booths designed for any show need.',  url1: '/30x4-trade-show-booth/' },
              ]).map((item, idx) => (
                <div key={idx} className="bg-white rounded-[14px] p-[28px] border border-gray-700 text-center hover:border-[#9A3220] hover:shadow-xl transition-all duration-300 group">
                  <div className="mt-2 w-[64px] h-[64px] rounded-[12px] bg-[rgba(154,50,32,0.1)] flex items-center justify-center text-[24px] text-[color:var(--teal)] mx-auto group-hover:bg-[rgba(154,50,32,0.2)] transition-colors">
                    <Image src={item.icon} width={50} height={50} alt="" className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl text-gray-600 font-bold mt-4 barlofamilty group-hover:text-[#9A3220] transition-colors">{item.label}</h3>
                  <div className="mt-6 space-y-2">
                    {item.value1 && (
                      <Link href={item.url1 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-[#9A3220] hover:bg-[rgba(154,50,32,0.05)] rounded-lg transition-all duration-200 hover:translate-x-1 font-medium">
                        {item.value1}
                      </Link>
                    )}
                    {item.value2 && (
                      <Link href={item.url2 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-[#9A3220] hover:bg-[rgba(154,50,32,0.05)] rounded-lg transition-all duration-200 hover:translate-x-1 font-medium">
                        {item.value2}
                      </Link>
                    )}
                    {item.value3 && (
                      <Link href={item.url3 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-[#9A3220] hover:bg-[rgba(154,50,32,0.05)] rounded-lg transition-all duration-200 hover:translate-x-1 font-medium">
                        {item.value3}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-x-4 mt-12">
                  <div><a href={data?.cta?.primary?.href || "/contact-us/"} className="px-6 py-3 bg-[#9A3220] border-2 border-[#9A3220] rounded-xl text-xl text-white hover:bg-gray-500 hover:border-2 hover:border-white  hover:text-white transition duration-300">{data?.cta?.primary?.label || 'Get A Quote'}</a></div>
                  <div><a href={data?.cta?.secondary?.href || "/about-us/"} className="px-6 py-3 border-2 border-[#9A3220] rounded-xl text-black text-xl hover:bg-custom hover:text-white transition duration-300">{data?.cta?.secondary?.label || 'About Us'}</a></div>
                </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-24 lg:py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              { number: counters.years, suffix: '+', label: 'Years Experience', icon: '⭐' },
              { number: counters.projects, suffix: '+', label: 'Projects Delivered', icon: '🎯' },
              { number: counters.clients, suffix: '+', label: 'Satisfied Clients', icon: '👥' },
              { number: counters.countries, suffix: '+', label: 'Countries Served', icon: '🌍' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="glass-effect rounded-3xl p-8 lg:p-12 hover-lift">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl lg:text-6xl font-black text-gradient-gold mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


   {/* Premium Services Section */}
      <section className="py-32 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        
          {/* Services Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Our Services</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for every exhibition need</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <div key={idx} className="premium-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
        </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/trade-show-booth-ideas/" 
              className="inline-block px-12 py-5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all duration-500 hover:scale-110"
            >
              Choose From 500+ Exhibit Booth Rental Options
            </Link>
          </div>
        
      </section>




     <section>
  <div className="homeportfolio bg-[#34343C] py-20">
    <div className="container mx-auto px-4 text-center text-white pb-20">
      <h2 className="maintitle">Our Trade Show Booth Work</h2>
      <div className="max-w-3xl mx-auto mt-4">
        <p className="text-xl text-white leading-relaxed">Browse our recent trade show booth projects that we have delivered to our esteemed clients.</p>
      </div>
    </div>
    <div className="px-4 sm:px-2 py-2">
      <div className="grid grid-cols-12 gap-2">
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio6.webp" width={767}  height={530}
            alt="Custom Trade Show Booth for Actus at NAB Show 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Actus
                </h2>
                <p className="text-white text-base">
                  NAB Show 2025 Trade Show Booth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/pt2.webp" width={767}  height={530}
            alt="Custom Trade Show Booth for AutoStore at Promat 2019"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Auto Store
                </h2>
                <p className="text-white text-base">
                  Promat 2019 Custom Booth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio2.webp" width={767}  height={530}
            alt="Trade Show Booth for Dexon Systems at InfoComm 2018"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Dexon System
                </h2>
                <p className="text-white text-base">
                  InfoComm 2018 Exhibit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio5.webp" width={767}  height={530}
            alt="Trade Show Booth for ION8 at IHS 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  ION8
                </h2>
                <p className="text-white text-base">
                  IHS 2025 Booth Design
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio3.webp" width={767}  height={530}
            alt="Custom Wooden Trade Show Booth for ProtoChips at M&M 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  ProtoChips
                </h2>
                <p className="text-white text-base">
                  M&M 2025 Exhibit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio4.webp" width={767}  height={530}
            alt="Trade Show Booth for FPC at IFAI 2018"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  FPC
                </h2>
                <p className="text-white text-base">
                  IFAI 2018 Island Booth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
        <a
          href={data?.portfolioIntro?.primaryCta?.href || "/contact-us/"}
          className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300"
        >
          Get A Quote
        </a>
        <a
          href={data?.portfolioIntro?.secondaryCta?.href || "/portfolio/"}
          className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300"
        >
          View More
        </a>
      </div>
    </div>
  </div>
</section> 


      {/* <section>
        <div className="contentbg py-36">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24">
              <div className="mb-8 m:mb-0">
                <div className="figure relative before:absolute before:content-[''] before:inset-0 before:left-[-10px] before:top-[-7px] before:bg-[#34343C] before:w-[calc(100%-50px)] before:h-[calc(100%+14px)] before:rounded-[8px]">
                  <Image src={(data?.contentBlock?.imageUrl) || "/images/custom-exhibit-for-your-booth.webp"} width={582} height={474} alt="Custom Trade Show Booth Work At Mine Expo 2024" className="w-full h-auto rounded-xl relative z-10"/>
                </div>
              </div>
              <div className="contents">
                <div>
                  <h2 className="maintitle text-gray-700 mb-4">{data?.contentBlock?.title || 'Get Your Free trade show exhibit Concept in Just 48 Hours.'}</h2>
                  <p className="text-xl text-gray-500 leading-relaxed">{data?.contentBlock?.description || 'Get a personalized trade show booth concept tailored to your brand—delivered in just 48 hours, completely free and without commitment.'}</p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a href={data?.contentBlock?.primaryCta?.href || '/contact-us/'} className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
                      {data?.contentBlock?.primaryCta?.label || 'Claim Your Free Design'}
                    </a>
                    
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section className="py-32 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                Locations
              </span>
            </div>
            <h2 className="maintitle text-gray-700 mb-6">
         End-to-End Exhibit Rental Solutions In the USA
        </h2>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
         Triumfo Inc. is a trusted name in trade show booth rentals with 25+ years of experience. We deliver fully managed rental exhibits across major U.S. trade show cities—simple, seamless, and stress-free.
        </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="group relative premium-card rounded-3xl p-10 lg:p-12 hover-lift text-center"
              >
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-gradient-gold transition-all duration-300">
                  {city}
            </h3>
          </div>
            ))}
          </div>
        </div>
      </section>
      
	{/* <section>
  <div className=" py-20">
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

	</div>
  </div>
</section> */}

      
      

  

 {/* Premium Exhibitors & Agencies Section */}
 <section className="py-32 lg:py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0066FF]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                Services
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">For Exhibitors & Agencies</h2>
				                        </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* For Exhibitors */}
            <div className="glass-effect rounded-3xl p-10 lg:p-16 text-white hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center text-4xl">
                  🎯
				                    </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-gradient-gold mb-2">
                    For Exhibitors:
                  </h2>
                  <p className="text-xl text-[#D4AF37] font-semibold">
                    Simplifying Your Exhibit Experience
                  </p>
				                </div>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Exhibiting at a trade show is never a simple task, whether it's your first time or you exhibit frequently. You need the right trade show, booth partner, and booth type to meet your goals. All these can be overwhelming.
                </p>
                <p className="text-lg">
                  We simplify the entire exhibiting process. Our experts trade show booth designers and booth builders take every measure to ensure a smooth and successful show campaign. You can trust us whether you are a local, national, or international exhibitor.
                </p>
                <p className="text-lg">
                  As a proud member of <a className="text-[#D4AF37] hover:text-[#FFD700] underline font-semibold" href="https://www.ifesnet.com/triumfo-international-gmbh/" target="_blank" rel="noopener noreferrer">IFES (International Federation of Exhibition & Event Services)</a>, Triumfo Inc. adheres to international quality standards, operates with ethical and responsible practices, and brings proven expertise in exhibitions and events.
                </p>
				            </div>
            </div>

            {/* For Agencies */}
            <div className="glass-effect rounded-3xl p-10 lg:p-16 text-white hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0066FF] to-[#00CCFF] rounded-2xl flex items-center justify-center text-4xl">
                  🏢
            </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-gradient-blue mb-2">
                    For Agencies:
                  </h2>
                  <p className="text-xl text-[#00CCFF] font-semibold">
                    End-to-End Services, Under Your Name
                  </p>
        </div>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  You don't have to look further if you are a trade show agency looking for a reliable exhibition stand builder. We provide end-to-end trade show booth solutions that you can confidently offer to your clients under your brand name.
                </p>
                <p className="text-lg">
                  We manage everything in-house with 30+ skilled 3D booth designers, 80+ expert booth builders, and 10+ creative graphic designers and printing specialists. Supported by a 40+ member I&D team and an 80,000+ sq. ft. production facility equipped with advanced technology.
                </p>
                <p className="text-lg">
                  We currently partner with trade show agencies across 30+ countries, including the USA, Europe, UAE, India, South Korea, Japan, and China. We work for your clients, under your name, contributing to your reputation and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="testimonial bg-[#E9EEF7] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="maintitle mb-4">{data?.testimonialsIntro?.title || 'Client Testimonials'}</h2>
              <p className="text-xl text-[#9A3220] font-medium mb-4">Your expectation. Our obligation.</p>
              <p className="text-xl text-gray-500 leading-relaxed">{data?.testimonialsIntro?.description || 'Watch short video testimonials to see how Triumfo Inc. has met or exceeded client expectations in creating memorable, high-performing trade show exhibit booths and impactful show experiences.'}</p>
            </div>
            <div className="grid grid-cols-12 gap-8">
            <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/sOuKNnrLzb0')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner1_1.webp"  width={768} height={531} alt="Testimonial Video 1" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:17</div>
				                    </div>
				                </div>
              </div>
              <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/fTs64_NWdUw')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner3_1.webp"  width={768} height={531} alt="Testimonial Video 2" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:20</div>
				                    </div>
				                </div>
              </div>
              <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/U28Z9Kr90uE')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner2_1.webp"  width={768} height={531} alt="Testimonial Video 3" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:47</div>
				                    </div>
				                </div>
				            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
              <Link href={data?.testimonialsIntro?.primaryCta?.href || "/testimonials/"} className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
                {data?.testimonialsIntro?.primaryCta?.label || 'View More'}
              </Link>
              <Link href="https://www.trustpilot.com/review/triumfo.us" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 border-2 border-custom rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300 flex gap-x-1 items-center">
                <img src="https://www.trustpilot.com/favicon.ico" width="32" height="32" alt="Trustpilot" className="h-6"/>Trustpilot
              </Link>
            </div>
          </div>
        </div>
      </section>


{/* 
      <section>
        <div className="seosection py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 leading-normal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
              <div className="mb-8 lg:mb-0 text-left lg:text-justify">
                <h2 className="maintitle mb-4 text-gray-700 text-center">For Exhibitors:</h2>
                <p className="text-xl text-[#9A3220] font-medium mb-4 text-center">Simplifying Your Exhibit Experience</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">Exhibiting at a trade show is never a simple task, whether it’s your first time or you exhibit frequently. You need the right trade show, booth partner, and booth type to meet your goals. All these can be overwhelming.</p>
                <p className="text-gray-600 text-base mb-4 leading-[1.8rem]">We simplify the entire exhibiting process. Our experts trade show booth designers and booth builders take every measure to ensure a smooth and successful show campaign. You can trust us whether you are a local, national, or international exhibitor.</p>
                <p className="text-gray-600 text-base mb-4 leading-[1.8rem]">As a proud member of <a className="text-blue-500 hover:text-blue-700" href="https://www.ifesnet.com/triumfo-international-gmbh/" target="_blank" rel="noopener noreferrer">IFES (International Federation of Exhibition & Event Services)</a>, Triumfo Inc. adheres to international quality standards, operates with ethical and responsible practices, and brings proven expertise in exhibitions and events. Our global association ensures reliability, consistency, and excellence in every project we deliver worldwide.</p>
              </div>
              <div className="text-left lg:text-justify">
                <h2 className="maintitle mb-4 text-gray-700 text-center">For Agencies:</h2>
                <p className="text-xl text-[#9A3220] font-medium mb-4 text-center">End-to-End Services, Under Your Name</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">You don’t have to look further if you are a trade show agency looking for a reliable exhibition stand builder. We provide end-to-end trade show booth solutions that you can confidently offer to your clients under your brand name. </p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">We manage everything in-house with 30+ skilled 3D booth designers, 80+ expert booth builders, and 10+ creative graphic designers and printing specialists. Supported by a 40+ member I&D team and an 80,000+ sq. ft. production facility equipped with advanced technology, we deliver high-quality turnkey exhibit solutions with complete control and precision.</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">We currently partner with trade show agencies across 30+ countries, including the USA, Europe, UAE, India, South Korea, Japan, and China. We work for your clients, under your name, contributing to your reputation and success.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Faqtab/>
      <div className="ctaction   py-6">
        <div className="container mx-auto px-4">
          <div className="text-gray-700 rounded-xl max-w-5xl mx-auto py-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-5xl md:text-5xl font-semibold mb-3 font-heading">
                    {data?.ctaBottom?.title || 'Let’s Plan Your Next Show'}
                  </h2>
                  <p className="text-lg text-gray-500">
                    {data?.ctaBottom?.subtitle || 'Share your trade show goals, and we will suggest the finest booth approach according to your budget and booth size. Let’s create a memorable brand experience for your next show.'}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
                  <Link href="tel:+1 775 927 6412" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
                    Call Us
                  </Link>
                  <Link href={data?.ctaBottom?.secondary?.href || '/contact-us/'} className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
                    {data?.ctaBottom?.secondary?.label || 'Get A Quote'}
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
