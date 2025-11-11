import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Major Exhibiting Cities in the USA | Triumfo Inc.',
    description: 'We provide trade show booth design services in various cities in the USA. Get a free new design and quote after getting in touch with Triumfo Inc.',
    pathname: '/major-exhibiting-cities/',
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
