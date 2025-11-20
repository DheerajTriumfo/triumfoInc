import { buildMetadata } from '../../../lib/seo';
import { getBoothDetailByUrl } from '../../../lib/boothdetail';
import BoothProductLayoutClient from './LayoutClient';

export default function Layout({ children }) {
  return <BoothProductLayoutClient>{children}</BoothProductLayoutClient>;
}
