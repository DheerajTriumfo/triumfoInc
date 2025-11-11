import { buildMetadata } from '../../../lib/seo';
import { getBoothDetailByUrl } from '../../../lib/boothdetail';
import BoothProductLayoutClient from './LayoutClient';

export async function generateMetadata({ params }) {
  const resolvedParams = params ? await params : {};
  const { slug, productId } = resolvedParams || {};
  const endpoint = getBoothDetailByUrl(slug, productId);

  const summarize = (html, maxLen = 180) => {
    try {
      const text = String(html || '').replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
      return text ? text.slice(0, maxLen) : '';
    } catch (err) {
      return '';
    }
  };

  try {
    const res = await fetch(endpoint, { headers: { Accept: 'application/json' }, next: { revalidate: 300 } });
    if (!res.ok) throw new Error('Failed to fetch booth detail');
    const json = await res.json();
    const data = json?.data || {};

    const metaTitle = data.meta_title || data.metatitle;
    const displayTitle = data.title || data.name || data.heading || data.skucode || `Booth ${productId}`;
    const title = metaTitle || displayTitle;

    const metaDesc = data.metadescription || data.meta_description || data.metadesc;
    const description = metaDesc && String(metaDesc).trim().length > 0
      ? String(metaDesc).trim()
      : summarize(data.long_description || data.description || data.content || '');

    const rawImg = data.og_image || data.mainimage || data.bannerimage || data.image || data.prdmain_img;
    let image;
    if (rawImg) {
      const origin = new URL(endpoint).origin;
      image = rawImg.startsWith('http') ? rawImg : `${origin}${rawImg.startsWith('/') ? '' : '/'}${rawImg}`;
    }

    return await buildMetadata({
      title: `${title} | Triumfo Inc.`,
      description: description || 'Exhibit booth details and specifications.',
      image,
      pathname: `/${slug}/${productId}/`,
    });
  } catch (err) {
    return await buildMetadata({
      title: `Booth ${productId} | Triumfo Inc.`,
      description: 'Exhibit booth details and specifications.',
      pathname: `/${slug}/${productId}/`,
    });
  }
}

export default function Layout({ children }) {
  return <BoothProductLayoutClient>{children}</BoothProductLayoutClient>;
}
