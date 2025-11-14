import Link from 'next/link';

export const revalidate = 3600;

const faqs = [
	{
		q: 'Why should I hire a stand builder?',
		a: 'A professional stand builder knows the importance of a good exhibition stand. They embody your brand personality and highlight your key marketing message. An expertly designed booth can help you attract a maximum number of visitors and boost brand recall value as well.',
	},
	{ q: 'Do you ship?', a: 'Yes, we do it. We possess a fleet of vehicles. This way, we ensure that your booth is always in professional and competent hands that take care of it throughout the way – right from the workshop to the exhibition venue.' },
	{ q: 'Do you provide booth graphics?', a: 'Yes. We have an excellent in-house design studio & own production facilities. Our client servicing team works closely with clients to ensure the best of design and fabrication. We employ latest and competent design software solutions to produce graphics of any kind. The execution of a stand design is structured on a phased approach that rests on a platform of absolute planning; defining all the parameters necessary for a perfect stall design.' },
	{ q: 'Do you offer booth storage and warehousing?', a: 'Yes. If you want to use your stand at multiple shows year after year, then you must check our storage costs as displayed as option on all of our booth design quotes.' },
	{ q: 'Who will manage my booth design project in your office?', a: 'Once you’ve decided to hire us for designing and building your exhibit stand, we will assign a dedicated project manager who’ll make sure that your stand is delivered right on time and construction costs fall within your budget.' },
	{ q: 'Where are you located or based?', a: 'Our office is located in Las Vegas.' },
	{ q: 'Do you offer booth building in Europe?', a: 'Yes. We’ve built, shipped and installed exhibition stands throughout Europe.' },
	{ q: 'What type of stands do you build?', a: 'We specialize in high-quality bespoke custom exhibition stands, modular exhibition stand, and double-decker exhibition stand. We undertake all elements of the exhibition build process, from concept to completion.' },
	{ q: 'How old is your establishment?', a: 'We have 25+ years of extensive experience in the exhibition industry, with a blend of enthusiastic and creative designers, highly-skilled workers, and a wide network of associates.' },
];

export default function FAQPage() {
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">FAQ</h1>
								<p className="text-white text-lg">Explore our impressive range of visually-stunning 10x20 trade show displays to find the perfect one for your next event.</p>
								<div className="mt-8"><Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="faqbg py-12">
					<div className="container mx-auto px-4">
						<div className="max-w-6xl">
							{faqs.map((item, idx) => (
								<div key={idx} className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
									<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">{item.q}</div>
									<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">{item.a}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
