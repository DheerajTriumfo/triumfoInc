import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Thank You | Triumfo Inc.',
    description: 'Thanks for your submission. Our team will contact you shortly.',
    pathname: '/thank-you/',
  });
}

export default function ThankYouLayout({ children }) {
  return <>{children}</>;
}

