import { API_CONFIG, resolveSiteUrl } from './config';

export const DEFAULT_SEO = {
  siteName: 'Triumfo Inc.',
  title: 'Trade Show Booth Displays Design & Exhibit Solutions',
  description: 'Triumfo Inc. offers award-winning custom trade show booth design and rental services across the USA. With 25+ years of expertise, we build exhibits that attract, engage, and convert.',
  image: 'https://triumfous.mobel.us/web/images/custom-trade-show-booth.webp',
};

export async function buildCanonical(pathname = '/') {
  const base = await resolveSiteUrl();
  const path = typeof pathname === 'string' ? pathname : '/';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function buildMetadata({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  pathname = '/',
  openGraph = {},
  twitter = {},
} = {}) {
  const siteUrl = await resolveSiteUrl();
  const url = await buildCanonical(pathname);
  const ogImage = image || DEFAULT_SEO.image;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: DEFAULT_SEO.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: '@triumfoinc',
      creator: '@triumfoinc',
      ...twitter,
    },
  };
}

function summarize(html, maxLen = 420) {
  try {
    const text = String(html || '').replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    return text ? text.slice(0, maxLen) : '';
  } catch (err) {
    return '';
  }
}

export async function fetchPageSEO(identifier) {
  try {
    const id = String(identifier || '').trim();
    if (!id) return null;

    let type = 'page';
    let key = id;
    if (id.includes(':')) {
      const parts = id.split(':');
      type = parts[0] || 'page';
      key = parts.slice(1).join(':');
    }

    let url;
    switch (type) {
      case 'upcoming': {
        const endpoint = API_CONFIG.ENDPOINTS.UPCOMING_TRADE_SHOW_DETAIL.replace('{slug}', encodeURIComponent(key));
        url = `${API_CONFIG.BASE_URL}${endpoint}`;
        break;
      }
      case 'blog': {
        url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BLOG}/${encodeURIComponent(key)}`;
        break;
      }
      case 'booth':
      default: {
        const endpoint = API_CONFIG.ENDPOINTS.BOOTH_SIZE_BY_URL.replace('{boothSizeUrl}', encodeURIComponent(key));
        url = `${API_CONFIG.BASE_URL}${endpoint}`;
        break;
      }
    }

    const res = await fetch(url, { headers: { Accept: 'application/json' }, next: { revalidate: 300 } });
    if (!res.ok) return null;
    const json = await res.json();

    const data = json?.data?.tradeshow || json?.data?.blog || json?.data || json;

    const rawTitle =
      data?.meta_title ||
      data?.metatitle ||
      data?.title ||
      data?.name ||
      data?.cityname ||
      data?.heading ||
      key.replace(/-/g, ' ');

    const rawDesc =
      data?.metadescription ||
      data?.metadesc ||
      data?.meta_description ||
      data?.meta_desc ||
      data?.description ||
      data?.overview ||
      data?.content ||
      data?.long_description ||
      '';

    const desc = summarize(rawDesc, 320);

    const rawImg =
      data?.og_image ||
      data?.event_logo ||
      data?.bannerimage ||
      data?.mainimage ||
      data?.image ||
      data?.blogimg ||
      data?.prdmain_img;

    const image = rawImg
      ? `${API_CONFIG.BASE_URL}${rawImg.startsWith('/') ? '' : '/'}${rawImg}`
      : undefined;

    return {
      title: String(rawTitle || '').trim(),
      description: desc,
      image,
    };
  } catch (err) {
    return null;
  }
}
