import { buildMetadata } from '../../lib/seo';
import BlogLayoutClient from './LayoutClient';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Exhibitor’s Guide to Trade Shows | Booth Planning & Design Tips",
    description:
      "Master trade show success with our comprehensive exhibitor’s guide. Learn how to plan, design, and execute a standout booth for maximum impact.",
    pathname: "/blog/",
    image: "https://www.triumfo.us/images/home-portfolio5.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function Layout({ children }) {
  return <BlogLayoutClient>{children}</BlogLayoutClient>;
}
