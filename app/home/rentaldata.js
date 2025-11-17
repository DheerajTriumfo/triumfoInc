'use client';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function GetRentaldata() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
 const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const res = await fetch('https://triumfous.mobel.us/api/rentaldata');
        const data = await res.json();

        if (data?.rentals) {
          const formattedRentals = data.rentals.map(r => {
          const title = r.p_slug.split('-')[0]; // take only "10x10"
          return {
            id: r.id,
            title: title,
            alttag : r.banner_alt,
            countText: `EXPLORE ${r.count} BOOTH DESIGN${r.count !== 1 ? 'S' : ''}`,
            image: `https://triumfous.mobel.us/rentalexhibition/${r.banner_img}`,
            href: `/${r.p_slug}/`,
            count: Number(r.count) || 0,
          };
        });
          const total = formattedRentals.reduce((sum, rental) => sum + rental.count, 0);
          setTotalCount(total);
          setRentals(formattedRentals);
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch rental data:", err);
        setLoading(false);
      }
    }

    fetchRentals();
  }, []);
  
  useEffect(() => {
  if (!loading && typeof window !== "undefined" && window.$ && window.$.fn.owlCarousel) {
    window.$('#rental').owlCarousel({
      lazyLoad: true,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      dots: true,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });
  }
}, [loading, rentals]);


  return (
    <>
    <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("Owl Carousel loaded")}
      />
      <section>
        <div className="bg-[#34343C] lg:[clip-path:ellipse(90%_100%_at_50%_100%)] relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="maintitle text-white mb-6 max-w-2xl mx-auto">
                Choose Booth Designs Based on Size
              </h2>
              <p className="text-xl text-[#9A3220] mb-6 font-bold">{totalCount}+ DESIGNS. ANY SIZE. FULLY CUSTOMIZABLE.</p>
              <p className="text-xl text-white">
                From compact displays to large-scale trade show exhibits, find the ideal trade show booth for your next show. Our extensive collection of booth designs thoughtfully engineered with brand-focused layouts and material planning. 
              </p>
            </div>

            <div className="owl-carousel owl-theme mt-12" id="rental">
              {(loading ? [] : rentals).map((r, idx) => (
                <div key={idx} className="column relative">
                  <div className="figure">
                    <Image
					  src={r.image} // already full URL
					  width={358}
					  height={443}
					  alt={r.alttag}
					  priority={idx === 0}
					  loading={idx === 0 ? 'eager' : 'lazy'}
					  className="w-full object-cover"
					  style={{ width: '100%', height: 'auto' }}
					/>


                  </div>

                  <div className="colloverlay bg-[linear-gradient(180deg,rgba(32,32,32,0)_75%,#0f0f0f_96%)] absolute top-0 left-0 w-full h-full">
                    <div className="caption text-center absolute left-0 bottom-[40px] block w-full">
                      <Link href={r.href || ""}>
                        <div className="captitile text-white font-heading font-bold text-4xl">{r.title}</div>
                        <div className="eyeebrow text-white text-base font-heading font-semibold">EXPLORE <span className="text-red-600 text-xl">{r.count}</span> BOOTH DESIGN IDEAS</div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Optional fallback if no rentals */}
              {!loading && rentals.length === 0 && <p className="text-white text-center">No booths available.</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
