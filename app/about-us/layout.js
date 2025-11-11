import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'About Triumfo Inc. | Trade Show Exhibit Specialists',
    description: 'Learn about Triumfo Inc., a trusted trade show exhibit design and rental company delivering turnkey solutions across the United States.',
    pathname: '/about-us/',
  });
}

export default function Layout({ children }) {
  return children;
}
