"use client";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from 'react';
import { get } from "../../lib/apiClient";


export default function Portfolio()
{
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchPortfolios = async () => {
        try {
          const res = await get('/portfolios');
          const list = Array.isArray(res?.data) ? res.data : [];
          setItems(list);
        } catch {}
      };
      fetchPortfolios();
    }, []);

    useEffect(() => {
      if (items.length === 0) return;

      const doFancyboxFunctions = (event) => {
        const loadFancybox = () => {
          if (!document.getElementById("fancybox-css")) {
            const link = document.createElement("link");
            link.id = "fancybox-css";
            link.rel = "stylesheet";
            link.href =
              "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css";
            document.head.appendChild(link);

            link.onload = () => {
              document.documentElement.classList.add("fancybox-css-loaded");
              if (isFancyboxLoaded()) startFancybox();
            };
          }

          if (!document.getElementById("fancybox-js")) {
            const script = document.createElement("script");
            script.id = "fancybox-js";
            script.src =
              "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
              document.documentElement.classList.add("fancybox-js-loaded");
              if (isFancyboxLoaded()) startFancybox();
            };
          }
        };

        const setupFancybox = () => {
          if (window.$ && window.$.fancybox) {
            window.$("[data-fancybox]").fancybox();
          }
        };

        const isFancyboxLoaded = () =>
          document.documentElement.classList.contains("fancybox-css-loaded") &&
          document.documentElement.classList.contains("fancybox-js-loaded");

        const startFancybox = () => {
          document.documentElement.classList.add("fancybox-is-loaded");
          setupFancybox();
          if (event && event.type === "click") {
            window.$(event.target).click();
            window.dispatchEvent(new Event("resize"));
          }
        };

        if (event && event.type === "click" && !isFancyboxLoaded()) event.preventDefault();

        if (!isFancyboxLoaded()) {
          loadFancybox();
        } else {
          startFancybox();
        }
      };

      const elements = document.querySelectorAll("[data-fancybox]");
      elements.forEach((el) => {
        el.addEventListener("click", doFancyboxFunctions, { once: true });
        el.addEventListener("mouseenter", doFancyboxFunctions, { once: true });
      });

      // Cleanup
      return () => {
        elements.forEach((el) => {
          el.removeEventListener("click", doFancyboxFunctions);
          el.removeEventListener("mouseenter", doFancyboxFunctions);
        });
      };
    }, [items]);
	return(
		<>
			<Head>
				<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" 
/>
			</Head>
		      
		   
			<section>
		    	<div className="bannerbg bg-[#34343C] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-6">Portfolio</h1>
		    					<p className="text-white font-semibold text-base">Triumfo Inc. is one of the leading trade show booth construction companies known to provide high-quality and eye-catchy custom trade show booths and rentals.</p>
		    					<div className="mt-8"><Link href="/get-booth-quotation/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
            <section>
			  <div className="w-full p-3">
                <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-3 space-y-3">
                  {(items.length ? items : []).map((p) => (
                    <div key={p.id} className="break-inside-avoid">
                      <a href={p.image_url} data-fancybox="triumfoinc"><img src={p.image_url} width="1200" height="900" alt={p.alttag || ''} className="w-full h-auto rounded-lg" /></a>
                    </div>
                  ))}
			    </div>
			  </div>
			</section>

		</>
		);
}