'use client';
import React, { useState, useEffect } from 'react';
export default function Contactform()
{
	const [formData, setFormData] = useState({
		eventname: '',
		boothsize : '',
	    name: '',
	    email: '',
	    phone: '',
	    country: '',
	    cmpnyname : '',
	    information: '',
	    files: [],
	  });

	  const [errors, setErrors] = useState({});
	  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
	  const [loading, setLoading] = useState(false);

	  // Fetch page URL and IP Address
	  useEffect(() => {
	    if (typeof window !== 'undefined') {
	      setClientData({
	        pageUrl: window.location.href,
	        ipAddress: window.location.hostname, // real client IP needs backend
	      });
	    }
	  }, []);

	  // Handle input changes
	  const handleChange = (e) => {
	    const { name, value } = e.target;
	    if (name === 'multipleimage') {
    // ✅ Convert FileList to Array and store it in state
    setFormData({
      ...formData,
      files: Array.from(files),
    });
  } else {
    // ✅ Normal text field updates
    setFormData({
      ...formData,
      [name]: value,
    });
  }
	  };

	  //const [loading, setLoading] = useState(false);
	  // Submit form
	  const handleSubmit = async (e) => {
	  e.preventDefault();
	  console.log("✅ Form submitted...");

	  // Basic validation
	  const newErrors = {};
	  if (!formData.eventname) newErrors.eventname = 'Event Name is required';
	  if (!formData.boothsize) newErrors.boothsize = 'Booth Size is required';
	  if (!formData.name) newErrors.name = 'Name is required';
	  if (!formData.email) newErrors.email = 'Email is required';
	  if (!formData.phone) newErrors.phone = 'Phone number is required';
	  if (!formData.country) newErrors.country = 'Country Name is required';
	  if (!formData.cmpnyname) newErrors.cmpnyname = 'Your Company Name is required';

	  console.log("🟡 Validation errors:", newErrors);

	  if (Object.keys(newErrors).length > 0) {
	    setErrors(newErrors);
	    console.log("❌ Stopped: Validation failed");
	    return;
	  }

	  setLoading(true);
	  console.log("📦 Preparing FormData...");

	  const fd = new FormData();
	  fd.append("eventname", formData.name);
	  fd.append("boothsize", formData.name);
	  fd.append("name", formData.name);
	  fd.append("email", formData.email);
	  fd.append("phone", formData.phone);
	  fd.append("country", formData.city);
	  fd.append("cmpnyname", formData.city);
	  fd.append("information", formData.information);
	  fd.append("pageurl", clientData.pageUrl);
	  fd.append("pageip", clientData.ipAddress);
	  try {
	    console.log("🚀 Sending data to API...");
	    const response = await fetch("https://triumfous.mobel.us/api/submitcontactform", {
	      method: "POST",
	      body: fd,
	    });

	    console.log("🔵 Response status:", response.status);

	    let result = {};
	    try {
	      result = await response.json();
	      console.log("🟢 Response JSON:", result);
	    } catch (err) {
	      console.error("❌ Failed to parse JSON:", err);
	    }

	    if (response.ok) {
	      console.log("✅ Success! Redirecting...");
	      window.location.href = "/thank-you/";
	    } else {
	      alert(result.message || "An error occurred while submitting the form.");
	    }
	  } catch (err) {
	    console.error("🔥 Network error:", err);
	    alert("Something went wrong: " + err.message);
	  } finally {
	    setLoading(false);
	  }
	};
	return(
		<>
			{loading && (
	          <div className="loader-overlay">
	            <div className="spinner"></div>
	            <p>Submitting, please wait...</p>
	          </div>
	        )}
	        <form onSubmit={handleSubmit} className="validate-form grid grid-cols-12 gap-y-4 gap-x-6">
	        	<input type="hidden" name="pageurl" value={clientData.pageUrl} />
                <input type="hidden" name="ipaddress" value={clientData.ipAddress} />
	        	<input 
					  type="text" 
					  name="honeypot" 
					  value={formData.honeypot || ""} 
					  onChange={handleChange} 
					  autoComplete="off" 
					  tabIndex="-1"
					  style={{ display: "none" }}
					/>
	        	<div className="col-span-12 md:col-span-6 w-full">
	        		<input type="text" name="eventname" placeholder="Event Name*" value={formData.eventname}
	                          onChange={handleChange}  className="{errors.eventname ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	                {errors.name && <div className="error text-sm text-red-700">{errors.eventname}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6 w-full">
	            	<input type="text" name="boothsize" placeholder="Booth Size*"  value={formData.boothsize}
	                          onChange={handleChange} className="{errors.boothsize ? 'is-invalid' : ''}  w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	                {errors.name && <div className="error text-sm text-red-700">{errors.boothsize}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6">
	            	<input type="text" name="name" placeholder="Your Name" value={formData.name}
	                          onChange={handleChange} className="{errors.name ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            	{errors.name && <div className="error text-sm text-red-700">{errors.name}</div>}
	            </div>              
	            <div className="col-span-12 md:col-span-6">
	            	<input type="email" name="email" placeholder="Email ID" value={formData.email}
	                          onChange={handleChange} className="{errors.email ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            	{errors.name && <div className="error text-sm text-red-700">{errors.email}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6">
	            	<input type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
	                          onChange={handleChange} className="{errors.phone ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            	{errors.name && <div className="error text-sm text-red-700">{errors.phone}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6">
	            	<input type="text" name="country" placeholder="Country" value={formData.country}
	                          onChange={handleChange} className="{errors.country ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            	{errors.name && <div className="error text-sm text-red-700">{errors.country}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6">
	            	<input type="text" name="cmpnyname" placeholder="Company Name" value={formData.cmpnyname}
	                          onChange={handleChange} className="{errors.cmpnyname ? 'is-invalid' : ''} w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            	{errors.name && <div className="error text-sm text-red-700">{errors.cmpnyname}</div>}
	            </div>
	            <div className="col-span-12 md:col-span-6">
	            	<input type="file" name="multipleimage[]" multiple className="w-full bg-white px-3 mb-2 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"/>
	            </div>
	            <div className="col-span-12 md:col-span-12">
	            	<textarea name="information" rows="5" placeholder="Your Requirement.." className="w-full bg-white px-2 mb-3 py-4 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"></textarea>
	            </div>
	            <div className="col-span-12 md:col-span-12">
	            	<button type="submit" disabled={loading} className="flex flex-wrap gap-x-2 px-8 py-4 bg-[#A02C1C] text-base rounded-xl border border-[#A02C1C] text-white hover:bg-custom hover:text-white transition duration-300 cursor-pointer">
                      {loading ? (
  <>
    <span className="spinner"></span>
    <span className="ml-2">Submitting...</span>
  </>
) : (
  "Request Quote"
)}
                    </button>
	            </div>
	        </form>
		</>
		);
}