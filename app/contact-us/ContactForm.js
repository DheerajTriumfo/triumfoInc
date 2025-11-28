'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Contactform() {
  const [formData, setFormData] = useState({
    eventname: '',
    eventcity: '',
    boothsize: '',
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    information: '',
    files: [],
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // ✅ Client-only data safely inside useEffect (won't cause SSR mismatch)
  useEffect(() => {
    setClientData({
      pageUrl: window?.location?.href || '',
      ipAddress: window?.location?.hostname || ''
    });

    // Fetch country code based on IP
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_calling_code) {
          setFormData(prev => ({ ...prev, countryCode: `${data.country_calling_code}` }));
        }
      })
      .catch(err => {
        console.error('Failed to fetch country code:', err);
        // Fallback to +1 if API fails
        setFormData(prev => ({ ...prev, countryCode: '+1' }));
      });
  }, []);

  // ✅ Handle all field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'multipleimage') {
      const newFiles = Array.from(files);
      setFormData({ ...formData, files: [...formData.files, ...newFiles] });
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle file removal
  const handleRemoveFile = (index) => {
    const newFiles = [...formData.files];
    const newUploadedFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    newUploadedFiles.splice(index, 1);
    setFormData({ ...formData, files: newFiles });
    setUploadedFiles(newUploadedFiles);
  };

  // ✅ Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setFormData({ ...formData, files: [...formData.files, ...files] });
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  // ✅ Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const newErrors = {};
    if (!formData.eventname) newErrors.eventname = 'Event Name is required';
    if (!formData.eventcity) newErrors.eventcity = 'Event City is required';
    if (!formData.boothsize) newErrors.boothsize = 'Booth Size is required';
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email Id is required';
    if (!formData.phone) newErrors.phone = 'Mobile Number is required';
    if (!formData.information) newErrors.information = 'Your Requirements is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const fd = new FormData();
    fd.append('eventname', formData.eventname);
    fd.append('eventcity', formData.eventcity);
    fd.append('boothsize', formData.boothsize);
    fd.append('name', formData.name);
    fd.append('email', formData.email);
    fd.append('phone', `${formData.countryCode}${formData.phone}`);
    fd.append('country', formData.countryCode);
    fd.append('information', formData.information);
    fd.append('pageurl', clientData.pageUrl);
    fd.append('pageip', clientData.ipAddress);

    formData.files.forEach((file) => fd.append('multipleimage', file));

    try {
      const res = await fetch('https://triumfous.mobel.us/api/submitcontactform', {
        method: 'POST',
        body: fd,
        headers: {
          'Accept': 'application/json',
        },
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

        {/* Event Name */}
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

        {/* Event City */}
        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="eventcity"
            placeholder="Event City*"
            value={formData.eventcity}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.eventcity ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.eventcity && <div className="text-sm text-red-700">{errors.eventcity}</div>}
        </div>

        {/* Booth Size */}
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

        {/* Full Name */}
        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.name ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.name && <div className="text-sm text-red-700">{errors.name}</div>}
        </div>

        {/* Email Id */}
        <div className="col-span-12 md:col-span-6">
          <input
            type="email"
            name="email"
            placeholder="Email Id*"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base ${
              errors.email ? 'border-red-500' : 'focus:border-gray-400'
            }`}
          />
          {errors.email && <div className="text-sm text-red-700">{errors.email}</div>}
        </div>

        {/* Mobile Number with Country Code */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-20 bg-gray-50 px-2 mb-2 py-4 border border-gray-300 rounded-l-md text-base focus:border-gray-400"
                placeholder="+1"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number*"
              value={formData.phone}
              onChange={handleChange}
              className={`flex-1 bg-white px-3 mb-2 py-4 border border-gray-300 rounded-r-md text-base ${
                errors.phone ? 'border-red-500' : 'focus:border-gray-400'
              }`}
            />
          </div>
          {errors.phone && <div className="text-sm text-red-700">{errors.phone}</div>}
        </div>

        {/* Upload File Option - Modern Drag and Drop */}
        <div className="col-span-12">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all ${
              isDragging
                ? 'border-[#A02C1C] bg-[#A02C1C]/5'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              name="multipleimage"
              multiple
              onChange={handleChange}
              className="hidden"
            />
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center items-center">
                <label className="relative cursor-pointer rounded-md font-semibold text-[#A02C1C] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#A02C1C] focus-within:ring-offset-2">
                  <span>Upload a file</span>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>

          {/* Display uploaded files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200"
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <svg
                      className="h-5 w-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile(index);
                    }}
                    className="ml-4 flex-shrink-0 text-red-600 hover:text-red-800"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Your Requirements */}
        <div className="col-span-12">
          <textarea
            name="information"
            rows="4"
            placeholder="Your Requirements*"
            value={formData.information}
            onChange={handleChange}
            className={`w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:border-gray-400 ${
              errors.information ? 'border-red-500' : ''
            }`}
          />
          {errors.information && <div className="text-sm text-red-700">{errors.information}</div>}
        </div>

        {/* Submit Button */}
        <div className="col-span-12">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-opacity-90 transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
