import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Schedule a Trade Show Booth Consultation | Triumfo Inc.',
    description: 'Schedule a call with our experienced team to discuss your next trade show project and booth requirements.',
    pathname: '/schedule-a-call/',
  });
}

export default function Layout({ children }) {
  return children;
}
