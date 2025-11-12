import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Full Trade Show Services  By Triumfo Inc.',
    description: 'From planning and design to installation, execution, and breakdown — everything under one roof for a seamless exhibiting experience.',
    pathname: '/services/',
  });
}

export default function Layout({ children }) {
  return children;
}
