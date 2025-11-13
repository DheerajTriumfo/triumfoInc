'use client';
import React, { useState, useEffect } from 'react';

export default function Contactform() {
  const [formData, setFormData] = useState({
    eventname: '',
    boothsize: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    cmpnyname: '',
    information: '',
    files: [],
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
  const [loading, setLoading] = useState(false);

  // ✅ Client-only data safely inside useEffect (won’t cause SSR mismatch)
  useEffect(() => {
    setClientData({
      pageUrl: window?.location?.href || '',
      ipAddress: window?.location?.hostname || ''
    });
  }, []);

  // ✅ Handle all field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'multipleimage') {
      setFormData({ ...formData, files: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const newErrors = {};
    if (!formData.eventname) newErrors.eventname = 'Event Name is required';
    if (!formData.boothsize) newErrors.boothsize = 'Booth Size is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.cmpnyname) newErrors.cmpnyname = 'Company is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const fd = new FormData();
    fd.append('eventname', formData.eventname);
    fd.append('boothsize', formData.boothsize);
    fd.append('name', formData.name);
    fd.append('email', formData.email);
    fd.append('phone', formData.phone);
    fd.append('country', formData.country);
    fd.append('cmpnyname', formData.cmpnyname);
    fd.append('information', formData.information);
    fd.append('pageurl', clientData.pageUrl);
    fd.append('pageip', clientData.ipAddress);

    //formData.files.forEach((file) => fd.append('multipleimage[]', file));
    formData.files.forEach((file) => fd.append('multipleimage', file));

    try {
      const res = await fetch('https://triumfous.mobel.us/api/submitcontactform', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();

      if (res.ok) {
        window.location.href = '/thank-you/';
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="spinner"></div>
          <p>Submitting, please wait...</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="validate-form grid grid-cols-12 gap-y-4 gap-x-6">
        {/* hidden inputs */}
        <input type="hidden" name="pageurl" value={clientData.pageUrl} />
        <input type="hidden" name="ipaddress" value={clientData.ipAddress} />
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="-1"
          style={{ display: 'none' }}
        />

        {/* Input fields */}
        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="eventname"
            placeholder="Event Name*"
            value={formData.eventname}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:ring-1 ${
              errors.eventname ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.eventname && <div className="text-sm text-red-700">{errors.eventname}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="boothsize"
            placeholder="Booth Size*"
            value={formData.boothsize}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.boothsize ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.boothsize && <div className="text-sm text-red-700">{errors.boothsize}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.name ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.name && <div className="text-sm text-red-700">{errors.name}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="email"
            name="email"
            placeholder="Email ID*"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.email ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.email && <div className="text-sm text-red-700">{errors.email}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.phone ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.phone && <div className="text-sm text-red-700">{errors.phone}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="country"
            placeholder="Country*"
            value={formData.country}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.country ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.country && <div className="text-sm text-red-700">{errors.country}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="cmpnyname"
            placeholder="Company Name*"
            value={formData.cmpnyname}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.cmpnyname ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.cmpnyname && <div className="text-sm text-red-700">{errors.cmpnyname}</div>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <input
            type="file"
            name="multipleimage"
            multiple
            onChange={handleChange}
            className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:border-gray-400"
          />
        </div>

        <div className="col-span-12">
          <textarea
            name="information"
            rows="5"
            placeholder="Your Requirement.."
            value={formData.information}
            onChange={handleChange}
            className="w-full bg-white px-2 mb-3 py-4 border border-gray-300 rounded-md text-base focus:border-gray-400"
          />
        </div>

        <div className="col-span-12">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-opacity-90 transition duration-300 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                <span className="ml-2">Submitting...</span>
              </>
            ) : (
              'Request Quote'
            )}
          </button>
        </div>
      </form>
    </>
  );
}
