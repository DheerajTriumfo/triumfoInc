'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function QuoteForm({ defaultBoothSize = '', defaultEventName = '' }) {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);

	async function onSubmit(e) {
		e.preventDefault();
		setMessage('');
		setIsError(false);
		const form = e.currentTarget;
		const fd = new FormData(form);
		// API expects pageurl & pageip
		fd.set('pageurl', typeof window !== 'undefined' ? window.location.href : '');
		fd.set('pageip', '-');
		try {
			setSubmitting(true);
			const res = await fetch(`${apiBase}/forms/quotation`, { method: 'POST', body: fd });
			let payload = null; try { payload = await res.json(); } catch {}
			if (res.ok && payload?.success) {
				router.push('/thank-you');
			} else {
				setMessage(payload?.error || 'Unable to submit. Please try again.');
				setIsError(true);
			}
		} catch (err) {
			setMessage('Network/CORS error. Please try again.');
			setIsError(true);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="grid grid-cols-12 gap-y-4 gap-x-6">
			<input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
			<input type="hidden" name="boothsize" placeholder="Booth Size*" defaultValue={defaultBoothSize} required />
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="eventname" placeholder="Event Name*" defaultValue={defaultEventName} required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="eventcity" placeholder="Event CIty*"  required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="text" name="name" placeholder="Your Name" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="email" name="email" placeholder="Email ID" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="tel" name="phone" placeholder="Phone Number" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="text" name="country" placeholder="Country Name" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"/></div>
			<div className="grid col-span-12 md:col-span-12"><textarea name="information" rows={4} placeholder="Your Requirement.." className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"></textarea></div>
			<div className="grid col-span-12">
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<button type="submit" disabled={submitting} className="flex flex-wrap gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-custom hover:text-white transition duration-300">{submitting ? 'SENDING…' : 'CONTACT US'}</button>
				</div>
				{message && <p className={`mt-3 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
			</div>
		</form>
	);
}


