import Link from 'next/link';
import QuotationForm from './QuotationForm';

export const metadata = {
	title: 'Get Booth Quotation | Triumfo Inc.',
	description: 'Get a free quote for your trade show booth rental or purchase. Fill out our form and we\'ll get back to you shortly.',
};

export default function GetBoothQuotation() {
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-6">Get Booth Quotation</h1>
								<p className="text-white font-semibold text-base">Tell us about your requirements and we&apos;ll get back to you with a customized quote.</p>
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
								<QuotationForm />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

