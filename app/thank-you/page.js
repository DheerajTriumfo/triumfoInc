import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
	return (
		<>
			<section>
    	<div className="bannerbg bg-[#34343C] py-20">
    		<div className="container mx-auto px-4">
    			<div className="max-w-3xl mx-auto">
    				<div className="text-center">
    					<h1 className="text-white font-semibold text-7xl mb-4">Thank You! for connecting with us.</h1>
    					<p className="text-white text-lg">We have received your message and our expert will soon get back to you.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    <div className="bg-white shadow-lg rounded-lg text-center p-10 max-w-2xl mx-auto py-8 my-8">
    <div className="flex justify-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#943724" className="w-[120px] h-[120px]">
        <circle cx="12" cy="12" r="10" stroke="#943724" strokeWidth="2" fill="none"></circle>
        <path strokeLinecap="round" strokeLinecap="round" d="M8 12l3 3 5-6" />
      </svg>
    </div>

    <p className="text-gray-700 text-xl  mb-2">
     You are one step closer to a
    </p>
    <h2 className="text-[#943724] text-3xl font-semibold leading-relaxed">
      SUCCESSFUL AND STRESS-FREE EXHIBITION EXPERIENCE.
    </h2>

    <div className="mt-8">
      <a href="/" className="inline-block bg-[#943724] hover:bg-[#257d8b] text-white px-6 py-3 rounded-md text-base font-medium transition duration-300">
        Return to the Home Page
      </a>
    </div>
  </div>
		</>
	);
}

