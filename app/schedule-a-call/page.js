import Link from 'next/link';
import ScheduleCallForm from './ScheduleCallForm';

export const revalidate = 3600;

export default function ScheduleCall() {
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-12">Let us connect over a call to discuss your booth requirements.</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="faqbg py-12">
					<div className="container mx-auto px-4">
						<div className="bg-gray-50 rounded-md  p-4 md:p-8 w-full max-w-xl mx-auto border border-gray-200">
							<h2 className="barlofamilty font-semibold text-4xl text-gray-700 mb-6">Tell us the best time to have a call.</h2>
							<ScheduleCallForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
