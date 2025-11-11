import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Get a Booth Quotation – Triumfo Inc.',
    description: 'Get a quick and customized quotation from Triumfo Inc. with over 25+ years of experience in exhibit booth building.',
    pathname: '/get-booth-quotation/',
  });
}

export default function GetBoothQuotationLayout({ children }) {
  return <>{children}</>;
}

