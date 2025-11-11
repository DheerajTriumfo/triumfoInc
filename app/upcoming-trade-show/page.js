import { Suspense } from 'react';
import UpcomingTradeShowClient from './UpcomingTradeShowClient';

export const dynamic = 'force-dynamic';

export default function UpcomingTradeShowPage() {
	return (
		<Suspense fallback={
			<div className="py-20 text-center text-gray-500">Loading trade shows...</div>
		}>
			<UpcomingTradeShowClient />
		</Suspense>
	);
}
