import { useQuery } from '@tanstack/react-query';
import { get } from '../lib/apiClient';

export function useHomeQuery(options = {}) {
	const hasBaseUrl = !!process.env.NEXT_PUBLIC_API_BASE_URL;
	return useQuery({
		queryKey: ['home'],
		queryFn: async () => {
			const data = await get('/home');
			return data;
		},
		staleTime: 60 * 1000,
		gcTime: 5 * 60 * 1000,
		enabled: hasBaseUrl,
		...options,
	});
}

export default useHomeQuery;
