import Link from 'next/link';

export const revalidate = 3600;

export default function PrivacyPolicy() {
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Privacy Policy</h1>
								<p className="text-white text-lg">Triumfo.us ("Triumfo", "we", "us", or "our") is committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy explains what information we collect, how we use it, and how we protect it.</p>
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
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">Information We Collect</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">
									<p className="mb-3">We collect several different types of information for various purposes to improve our services to you.</p>
									<p>Personal Information: We may collect personal information, such as your name, email address, phone number, and mailing address, when you register for an account, subscribe to our newsletter, or contact us. Usage Data: We may also collect information about your use of our website, such as the pages you visit, the links you click, and the searches you conduct. This data is collected anonymously and does not identify you personally. Use of Information</p>
								</div>
							</div>
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">We use the information we collect for various purposes, including:</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">
									<p className="mb-3">To provide and improve our services</p>
									<p className="mb-3">To personalize your experience</p>
									<p className="mb-3">To send you marketing communications</p>
									<p className="mb-3">To respond to your inquiries and requests</p>
									<p>For security and fraud prevention purposes</p>
								</div>
							</div>
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">Sharing of Information</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">
									<p className="mb-3">We may share your information with third-party service providers who help us operate our website and conduct our business. These service providers are contractually obligated to keep your information confidential and secure.</p>
									<p>We will not share your personal information with any third-party advertisers or marketing companies without your consent.</p>
								</div>
							</div>
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">Data Security</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">We take reasonable precautions to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure. We cannot guarantee the security of your information.</div>
							</div>
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">Changes to This Privacy Policy</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</div>
							</div>
							<div className="borbg border border-gray-200 rounded-lg overflow-hidden mb-8">
								<div className="tab-button text-xl font-semibold px-6 bg-gray-100 py-2 text-gray-700">Contact Us</div>
								<div className="tab-caption px-6 py-4 bg-white text-base text-gray-500">If you have any questions about this Privacy Policy, please contact us by email at enquiry@triumfo.us.</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
