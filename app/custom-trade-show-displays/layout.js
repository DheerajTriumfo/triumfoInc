import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Custom Trade Show Exhibits | We Design, Build & Deliver.',
    description: 'Triumfo Inc. designs & builds custom trade show exhibits & display booths that captivate audiences. Benefit from 25+ years of expertise & end-to-end services.',
    pathname: '/custom-trade-show-displays/',
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
