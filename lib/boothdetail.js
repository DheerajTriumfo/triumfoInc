import { API_CONFIG } from './config';

const BOOTH_ENDPOINTS = {
  BOOTH_SIZE_BY_URL: '/api/{boothSizeUrl}',
  BOOTH_DETAIL_BY_URL: '/api/rental/booth-size/{boothSizeUrl}/{id}',
};

export const getBoothDetailEndpoint = (boothSizeUrl = '') => {
  const endpoint = BOOTH_ENDPOINTS.BOOTH_SIZE_BY_URL.replace('{boothSizeUrl}', boothSizeUrl);
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export const getBoothDetailByUrl = (boothSizeUrl = '', id = '') => {
  const endpoint = BOOTH_ENDPOINTS.BOOTH_DETAIL_BY_URL
    .replace('{boothSizeUrl}', boothSizeUrl)
    .replace('{id}', id);
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
