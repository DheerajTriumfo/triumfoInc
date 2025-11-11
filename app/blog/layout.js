import { buildMetadata } from '../../lib/seo';
import BlogLayoutClient from './LayoutClient';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Our Recent Blogs | Get Some Trade Show Tips',
    description: 'Get to know about different trade show marketing strategies. Get some latest trade show tips through our blogs to enhance your trade show traffic and sales.',
    pathname: '/blog/',
  });
}

export default function Layout({ children }) {
  return <BlogLayoutClient>{children}</BlogLayoutClient>;
}
