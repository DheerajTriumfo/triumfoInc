import Link from "next/link";
import Image from "next/image";

export default function Service()
{
	const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.triumfo.us/#organization",
        name: "Triumfo Inc.",
        url: "https://www.triumfo.us/",
        logo:
          "https://www.triumfo.us/_next/image/?url=%2Fimages%2Flogo.webp&w=256&q=75",
        description:
          "Triumfo Inc. is a full-service trade show solutions company, offering design, fabrication, logistics, and in-house production.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "enquiry@triumfo.us",
          telephone: "+1 775-927-6412",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "5071 N. Rainbow Blvd, Suite 170",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89130",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/triumfoinc",
          "https://x.com/triumfoinc",
          "https://www.youtube.com/channel/UCJyqDSj6grpkbWbnGYWciNw",
          "https://www.linkedin.com/company/triumfoinc",
        ],
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 260,
        },
      },
      {
        "@type": "WebPage",
        url: "https://www.triumfo.us/services/",
        name: "Services — Triumfo Inc.",
        description:
          "Discover Triumfo's comprehensive trade show services including booth design, fabrication, logistics, and turnkey exhibition solutions for events worldwide.",
        mainEntity: {
          "@id": "https://www.triumfo.us/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.triumfo.us/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.triumfo.us/services/",
          },
        ],
      },
    ],
  };
	return(
		<>
		<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
			<section>
		    	<div className="bannerbg bg-[#34343C] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-6">Turnkey Trade Show Booth Services</h1>
		    					<p className="text-white font-normal text-lg">Backed by in-house production and experienced project teams, we manage every stage of your trade show booth—design, build, logistics, and on-site support.</p>
		    					<div className="mt-8"><a href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</a></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="servcbg py-12">
			    	<div className="container mx-auto px-4">
			    		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch justify-center">
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv1.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">3D Design & Concept Development</div>
			    				<p className="text-gray-500 text-lg">Our experienced design team specialises in creating 3D booth concepts according to your booth needs. We have 30+ talented 3D booth designers. They ensure your brand vision is realized through accurate 3D designs before booth fabrication begins.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv2.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Booth Production</div>
			    				<p className="text-gray-500 text-lg">We own a booth fabrication facility that is equipped with the latest machinery. We manage every stage of booth production efficiently in this facility with our 80+ booth builders. These capabilities give us quality control on our booth production process.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv3.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Graphic Design & Printing</div>
			    				<p className="text-gray-500 text-lg">Our graphic production team has 10+ creative graphic design and printing experts. They smartly craft custom visuals to add a unique appeal to your trade show booth. We ensure your brand messaging is clear and visually stunning while being consistent.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv4.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Transportation & Logistics</div>
			    				<p className="text-gray-500 text-lg">Our logistics team handles the complete booth shipping process. We deliver your trade show booth on time and safely to the event venue. You can have a stress-free trade show journey while we manage your booth transportation needs.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv5.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Installation & Dismantling</div>
			    				<p className="text-gray-500 text-lg">Our experienced professionals install and dismantle your trade show booth without any hassle. We have 40+ trained and well-equipped professionals for I&D services. They ensure a smooth and accurate booth setup before the event. Then, they carefully dismantle it after the show. </p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv6.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Project Management</div>
			    				<p className="text-gray-500 text-lg">We provide end-to-end booth project management services. We quickly address any booth issues that arise during the event. Our team pays attention to every detail to deliver you a stress-free exhibiting experience.</p>
			    			</div>
			    		</div>
			    	</div>
			    </div>
		    </section>
		    <div className="ctaction bg-[#E9EEF7] py-6">
	        <div className="container mx-auto px-4">
	          <div className="text-gray-700 rounded-xl max-w-5xl mx-auto py-16">
	              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
	                <div>
	                  <h2 className="text-5xl md:text-5xl font-semibold mb-3 font-heading">
	                    {'Let’s Plan Your Next Show'}
	                  </h2>
	                  <p className="text-lg text-gray-500">Share your trade show goals, and we will suggest the finest booth approach according to your budget and booth size. Let’s create a memorable brand experience for your next show.</p>
	                </div>
	                <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
	                  <Link href="https://wa.me/17029340798" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-md text-white text-l font-medium hover:opacity-90 transition flex items-center justify-center gap-2" style={{ backgroundColor: '#0CC143' }}>
	                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
	                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
	                    </svg>
	                    <span>WhatsApp</span>
	                  </Link>
	                  <Link href={'/contact-us/'} className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
	                    {'Get A Quote'}
	                  </Link>
	                </div>
	              </div>
	          </div>
	        </div>
	      </div>
		</>
		);
}