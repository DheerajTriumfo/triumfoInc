import axios from 'axios';

// Fallback to local Laravel API if env is not set
const fallbackBase = 'https://triumfous.mobel.us/api';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;

export const apiClient = axios.create({
	baseURL,
	headers: {
		Accept: 'application/json',
	},
	withCredentials: false,
});

export async function get(path, config = {}) {
	const response = await apiClient.get(path, config);
	return response.data;
}

export async function post(path, data, config = {}) {
	const response = await apiClient.post(path, data, config);
	return response.data;
}

export default apiClient;
