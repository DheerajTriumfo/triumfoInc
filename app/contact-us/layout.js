import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Contact Us | Triumfo Inc.',
    description: 'If you have any queries get in touch with us at +1 702 992 0440 or mail us at enquiry@triumfo.us or fill out the form given.',
    pathname: '/contact-us/',
  });
}

export default function Layout({ children }) {
  return children;
}
