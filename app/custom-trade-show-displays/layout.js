import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Custom Trade Show Booth Design & Build Company | Triumfo Inc',
    description: 'Leading custom trade show booth designer and exhibit stand builder in the USA since 1999. Get your free booth concept within 48 hours.',
    pathname: '/custom-trade-show-displays/',
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
