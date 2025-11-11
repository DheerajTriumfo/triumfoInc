'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function ScheduleCallForm() {
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
		fd.set('pageurl', typeof window !== 'undefined' ? window.location.href : '');
		fd.set('pageip', '-');
		try {
			setSubmitting(true);
			const res = await fetch(`${apiBase}/forms/schedule-call`, { method: 'POST', body: fd });
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
		<form onSubmit={onSubmit} className="space-y-4">
			<input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
			<div>
				<label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name*</label>
				<input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-700 focus:outline-none"/>
			</div>
			<div>
				<label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number*</label>
				<input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-700 focus:outline-none"/>
			</div>
			<div>
				<label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email ID*</label>
				<input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-700 focus:outline-none"/>
			</div>
			<div>
				<label htmlFor="startdate" className="block text-gray-700 font-medium mb-1">Please Select Date*</label>
				<input type="date" id="startdate" name="startdate" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-700 focus:outline-none"/>
			</div>
			<div>
				<label htmlFor="call_time" className="block text-gray-700 font-medium mb-1">Best time to call*</label>
				<select id="call_time" name="call_time" required className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-1 focus:ring-gray-700 focus:outline-none">
					<option value="">Select best time to call</option>
					<option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
					<option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
					<option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
				</select>
			</div>
			<div>
				<label htmlFor="information" className="block text-gray-700 font-medium mb-1">Tell Us About Requirement</label>
				<textarea id="information" name="information" rows="3" placeholder="Enter your message" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-gray-700 focus:outline-none"></textarea>
			</div>
			<button type="submit" disabled={submitting} className="w-full bg-custom hover:bg-gray-700 text-white font-semibold py-3 rounded-md transition-colors duration-200">{submitting ? 'SENDING…' : 'Send Message'}</button>
			{message && <p className={`mt-2 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
		</form>
	);
}

