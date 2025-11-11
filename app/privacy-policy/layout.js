import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Privacy Policy | Triumfo Inc.',
    description: 'Learn how Triumfo Inc. collects, uses, and protects your information across our trade show services.',
    pathname: '/privacy-policy/',
  });
}

export default function Layout({ children }) {
  return children;
}
