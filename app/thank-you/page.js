import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
	return (
		<>
			<section className="thanku-banner">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h1>Thank You For Connecting With Us!</h1>
						<p>We have received your message and our expert will soon get back to you.</p>
					</div>
				</div>
			</section>
			<section className="thanku-inner">
				<div className="container mx-auto px-4">
					<div className="th-box">
						<div className="img-box">
							<Image src="/images/thanks.png" alt="Thank You" width={200} height={200} />
						</div>
						<p>You are now one step closer to a <span>successful</span> and <span>stress-free exhibition experience.</span></p>
						<div className="backtohome">
							<Link href="/">Return to the Home Page</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

