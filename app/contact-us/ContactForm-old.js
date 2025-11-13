'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function ContactForm() {
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
		if (fd.has('multipleimage[]')) {
			const files = fd.getAll('multipleimage[]');
			fd.delete('multipleimage[]');
			for (const file of files) fd.append('uploadfile[]', file);
		}
		if (!fd.has('country')) fd.set('country', '');
		if (!fd.has('cmpnyname')) fd.set('cmpnyname', '');
		fd.set('pageurl', window.location.href);
		fd.set('pageip', '-');
		try {
			setSubmitting(true);
			const res = await fetch(`${apiBase}/forms/contact`, {
				method: 'POST',
				body: fd,
			});
			let payload = null;
			try { payload = await res.json(); } catch {}
			if (res.ok && payload?.success) {
				router.push('/thank-you');
			} else {
				const errText = payload?.error || payload?.message || 'Request failed.';
				setMessage(errText);
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
			<div className="col-span-12 md:col-span-6 w-full"><input required type="text" name="eventname" placeholder="Event Name*" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6 w-full"><input required type="text" name="boothsize" placeholder="Booth Size*" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="text" name="name" placeholder="Your Name" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="email" name="email" placeholder="Email ID" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="tel" name="phone" placeholder="Phone Number" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="text" name="country" placeholder="Country" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="text" name="cmpnyname" placeholder="Company Name" className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-6"><input type="file" name="multipleimage[]" multiple className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/></div>
			<div className="col-span-12 md:col-span-12"><textarea name="information" rows="5" placeholder="Your Requirement.." className="w-full bg-white px-2 mb-3 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"></textarea></div>
			<div className="col-span-12 md:col-span-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<label className="inline-flex items-center space-x-2 cursor-pointer text-gray-700">
						<input type="checkbox" required className="w-5 h-5 text-green-600 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none" />
						<span className="text-base select-none text-gray-500">I Agree To The Privacy Policy</span>
					</label>
					<button type="submit" disabled={submitting} className="flex flex-wrap gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-custom hover:text-white transition duration-300">{submitting ? 'Sending…' : 'CONTACT US'}</button>
				</div>
				{message && (
					<p className={`mt-4 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>{message}</p>
				)}
			</div>
		</form>
	);
}
