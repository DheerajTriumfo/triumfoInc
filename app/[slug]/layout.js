import { buildMetadata, fetchPageSEO } from '../../lib/seo';
import BoothSegmentLayoutClient from './LayoutClient';

export async function generateMetadata({ params }) {
  const { slug } = params || {};
  const seo = (await fetchPageSEO(slug)) || {};
  const title = seo.title || (slug ? slug.replace(/-/g, ' ') : 'Trade Show');
  const description = seo.description || 'Explore trade show booth designs, rentals, and exhibiting resources by Triumfo Inc.';
  return await buildMetadata({
    title: `${title} | Triumfo Inc.`,
    description,
    image: seo.image,
    pathname: `/${slug}/`,
  });
}

export default function Layout({ children }) {
  return <BoothSegmentLayoutClient>{children}</BoothSegmentLayoutClient>;
}

