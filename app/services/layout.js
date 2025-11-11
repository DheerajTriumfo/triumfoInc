import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Full Trade Show Booth Services And Setup across USA',
    description: 'As a leading trade show booth service provider in USA, we offer full trade show booth services across the nation.',
    pathname: '/services/',
  });
}

export default function Layout({ children }) {
  return children;
}
