import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Frequently Asked Questions | Triumfo Inc.",
    description: "Find answers to all your questions about our custom trade show booths, turnkey services, and more. Explore our FAQ page for quick and detailed information from Triumfo Inc.",
    pathname: '/faq/',
  });
}

export default function Layout({ children }) {
  return children;
}
