import { buildMetadata, fetchPageSEO } from '../../../lib/seo';
import MajorCityLayoutClient from './LayoutClient';

export async function generateMetadata({ params }) {
  const { slug } = params || {};
  const seo = (await fetchPageSEO(slug)) || {};
  const title = seo.title || (slug ? slug.replace(/-/g, ' ') : 'Major Exhibiting City');
  const description = seo.description || 'Discover Triumfo Inc. services for major exhibiting cities across the United States.';
  return await buildMetadata({
    title: `${title} | Triumfo Inc.`,
    description,
    image: seo.image,
    pathname: `/major-exhibiting-cities/${slug}/`,
  });
}

export default function Layout({ children }) {
  return <MajorCityLayoutClient>{children}</MajorCityLayoutClient>;
}
