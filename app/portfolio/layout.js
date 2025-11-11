import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Our Creative Work | Check Out Our Exhibition Stand Projects',
    description: 'Take a closer look at our creative journey! Browse a curated selection of exhibition stand projects we&#039;ve delivered worldwide—designed to inspire and built to impress.',
    pathname: '/portfolio/',
  });
}

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
