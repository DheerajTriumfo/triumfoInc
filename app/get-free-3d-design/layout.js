import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Get Free 3D Booth Design – Triumfo Inc.',
    description: 'Looking for a 3D design for your booth? Get a free 3D design for your exhibit booth and visualize your trade show presence before it’s built.',
    pathname: '/get-free-3d-design/',
  });
}

export default function GetFreeDesignLayout({ children }) {
  return <>{children}</>;
}

