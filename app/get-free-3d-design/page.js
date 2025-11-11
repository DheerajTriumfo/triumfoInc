import Link from 'next/link';
import DesignForm from './DesignForm';

export const metadata = {
	title: 'Get Free 3D Design | Triumfo Inc.',
	description: 'Request a complimentary custom 3D stand design for your trade show booth. Fill out our form and we\'ll create a stunning design for you.',
};

export default function GetFreeDesign() {
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-6">Get Free 3D Design</h1>
								<p className="text-white font-semibold text-base">Contact us for a complimentary custom 3D stand design.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="videosection bg-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="bg-[#E8EEF7] rounded-xl border border-gray-300 px-4 py-6">
								<DesignForm />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

