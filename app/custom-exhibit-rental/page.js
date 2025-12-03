'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CustomExhibitRental() {
	const router = useRouter();
	
	useEffect(() => {
		router.replace('/custom-trade-show-displays/');
	}, [router]);

	return null;
}

