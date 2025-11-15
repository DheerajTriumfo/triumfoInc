import { buildMetadata, fetchPageSEO } from '../../../lib/seo';
import UpcomingTradeShowDetailLayoutClient from './LayoutClient';

// export async function generateMetadata({ params }) {
//   const { slug } = params || {};
//   const seo = (await fetchPageSEO(`upcoming:${slug}`)) || {};
//   const title = seo.title || (slug ? slug.replace(/-/g, ' ') : 'Trade Show');
//   const description = seo.description || 'Details about this upcoming trade show.';
//   const image = seo.image;
//   return await buildMetadata({
//     title: `${title} | Triumfo Inc.`,
//     description,
//     image,
//     pathname: `/upcoming-trade-show/${slug}/`,
//     openGraph: { type: 'website', locale: 'en_US' },
//   });
// }

export default function Layout({ children }) {
  return (
    <>
      <UpcomingTradeShowDetailLayoutClient>{children}</UpcomingTradeShowDetailLayoutClient>
    </>
  );
}
