"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { get } from "../../lib/apiClient";

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const fancyboxLoaded = useRef(false);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await get("/portfolios");
        setItems(Array.isArray(res?.data) ? res.data : []);
      } catch {}
    };
    fetchPortfolios();
  }, []);

  const openImage = async (e, imageUrl) => {
    e.preventDefault();

    // 🔥 Lazy-load Fancybox ONLY on first click
    if (!fancyboxLoaded.current) {
      const { Fancybox } = await import("@fancyapps/ui");
      await import("@fancyapps/ui/dist/fancybox/fancybox.css");

      Fancybox.bind("[data-fancybox]", {
        groupAll: false,
        Thumbs: false,
        infinite: false,
        dragToClose: true,
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["close"],
          },
        },
      });

      fancyboxLoaded.current = true;
    }

    // Trigger Fancybox for clicked image
    e.currentTarget.click();
  };

  return (
    <>
      {/* Banner */}
      <section>
        <div className="bannerbg bg-[#34343C] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white font-semibold text-7xl mb-6">
              Portfolio
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Explore our portfolio to see our expertise in creating standout
              trade show booths.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us/"
                className="px-7 py-3 bg-custom rounded-md text-white text-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section>
        <div className="w-full p-3">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {items.map((p) => (
              <div key={p.id} className="break-inside-avoid">
                <a
                  href={p.image_url}
                  data-fancybox
                  onClick={(e) => openImage(e, p.image_url)}
                >
                  <Image
                    src={p.image_url}
                    alt={p.alttag || ""}
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           33vw"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
