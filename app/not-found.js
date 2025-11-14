import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  alternates: {
    canonical: "/404",
  },
  openGraph: {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
    url: "/404",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
  },
};

export default function NotFound() {
  return (
    <section>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="w-full shadow-lg p-8 text-center border border-gray-200">
              <h1 className="text-4xl text-gray-700 font-semibold mb-6"><span className="text-custom">404!</span> Oops! Page Not Found</h1>
              <p className="text-gray-500 text-lg">The page you're looking for doesn't exist or may have been moved.</p>
              <div className="mt-8"><Link href="/get-booth-quotation/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Back To Home</Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


