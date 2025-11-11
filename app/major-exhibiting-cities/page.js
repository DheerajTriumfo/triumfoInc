import Link from 'next/link';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';
export const revalidate = 300;

function CitySection({ title, cities }) {
	if (!cities || cities.length === 0) return null;
	return (
		<>
			<h2 className="maintitle text-gray-700 mb-6 border-b border-gray-300 pb-2">{title}</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{cities.map((c, idx) => (
					<div key={`${c.url || idx}`}>
						<Link href={`/${c.url || ''}`} className="w-full block bg-white rounded-lg py-12 md:py-16 px-6 border border-gray-200 border-b-4 border-b-[#943724] color-gray-600 text-xl text-center transition duration-500 hover:bg-gray-700 cursor-pointer hover:text-white">
							<i className="fa fa-crosshairs text-custom" aria-hidden="true"></i> {c.display_name || c.name}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default async function MajorExhibitingCities() {
	let data = null;
	try {
		const res = await fetch(`${apiBase}/major-exhibiting-cities`, { next: { revalidate } });
		if (res.ok) {
			const json = await res.json();
			data = json?.data || null;
		}
	} catch {}

	const america = data?.regions?.america?.cities || [];
	const europe = data?.regions?.europe?.cities || [];
	const middleEast = data?.regions?.middle_east?.cities || [];

	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">City Listing</h1>
								<p className="text-white text-lg">Explore our impressive range of visually-stunning 10x20 trade show displays to find the perfect one for your next event.</p>
								<div className="mt-8"><Link href="/get-booth-quotation/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="citylisting py-20">
					<div className="container mx-auto px-4">
						<CitySection title="America" cities={america} />
						<CitySection title="Europe" cities={europe} />
						<CitySection title="Middle East" cities={middleEast} />
					</div>
				</div>
			</section>
		</>
	);
}
