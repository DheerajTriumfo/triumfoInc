'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function DesignForm() {
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
		
		// Handle file uploads if any
		if (fd.has('uploadfile[]')) {
			const files = fd.getAll('uploadfile[]');
			fd.delete('uploadfile[]');
			for (const file of files) {
				if (file instanceof File) {
					fd.append('uploadfile[]', file);
				}
			}
		}
		
		// API expects pageurl & pageip
		fd.set('pageurl', typeof window !== 'undefined' ? window.location.href : '');
		fd.set('pageip', '-');
		
		try {
			setSubmitting(true);
			const res = await fetch(`${apiBase}/forms/design`, { method: 'POST', body: fd });
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
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="eventname" placeholder="Event Name" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="eventcity" placeholder="Event City" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="boothsize" placeholder="Booth Size" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6 w-full"><input type="text" name="Budget" placeholder="Budget" className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="text" name="name" placeholder="Your Name*" required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="email" name="email" placeholder="Email ID*" required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="tel" name="phone" placeholder="Phone Number*" required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12 md:col-span-6"><input type="text" name="country" placeholder="Country*" required className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12"><input type="file" name="uploadfile[]" multiple className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/></div>
			<div className="grid col-span-12"><textarea name="information" rows={4} placeholder="Tell us about your design requirements.." className="w-full px-3 mb-4 py-4 bg-[#ffffff] border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"></textarea></div>
			<div className="grid col-span-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<label className="inline-flex items-center space-x-2 cursor-pointer text-gray-700">
						<input type="checkbox" required className="w-5 h-5 text-green-600 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none" />
						<span className="text-sm select-none text-gray-700">I Agree To The Privacy Policy</span>
					</label>
					<button type="submit" disabled={submitting} className="flex flex-wrap gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-custom hover:text-white transition duration-300">{submitting ? 'SENDING…' : 'REQUEST DESIGN'}</button>
				</div>
				{message && <p className={`mt-3 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
			</div>
		</form>
	);
}

