import { buildMetadata } from '../../../lib/seo';
import { API_CONFIG } from '../../../lib/config';

export default function Layout({ children }) {
  return <>{children}</>;
}

export async function generateMetadata({ params }) {
  const slug = params?.slug || '';
  const controller = new AbortController();
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BLOG}/${encodeURIComponent(slug)}`;
    const res = await fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Failed to load blog');
    const json = await res.json();
    const blog = json?.data?.blog || {};
    const title = blog.meta_title || blog.blogtitle || 'Blog Detail';
    const description = blog.metadesc && String(blog.metadesc).trim().length > 0
      ? String(blog.metadesc)
      : (blog.blogdesc
        ? String(blog.blogdesc).replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim().slice(0, 160)
        : 'Read our latest insights about trade show exhibiting, booth design and rentals.');
    const image = blog.blogimg
      ? `${API_CONFIG.BASE_URL}/api/images/uploads/blog/${encodeURIComponent(blog.blogimg)}`
      : undefined;
    return await buildMetadata({
      title: `${title} | Triumfo Inc.`,
      description,
      image,
      pathname: `/blog/${encodeURIComponent(slug)}/`,
    });
  } catch (err) {
    return await buildMetadata({
      title: 'Blog Detail | Triumfo Inc.',
      description: 'Read our latest insights about trade show exhibiting, booth design and rentals.',
      pathname: `/blog/${encodeURIComponent(slug)}/`,
    });
  }
}
