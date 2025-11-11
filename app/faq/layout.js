import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "FAQ for trade show booth rental, designs that tell your brand's story.",
    description: "Triumfo Inc. is committed to helping you in finding the perfect solution for your trade show booth requirement. Here are some tips from the FAQ section of Exhibit Design Search.",
    pathname: '/faq/',
  });
}

export default function Layout({ children }) {
  return children;
}
