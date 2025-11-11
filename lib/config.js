import { headers } from 'next/headers';

const DEFAULT_API_ORIGIN = 'https://triumfous.mobel.us';

function normalizeApiOrigin() {
  const envBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_ORIGIN;
  return envBase.replace(/\/api\/?$/, '').replace(/\/$/, '') || DEFAULT_API_ORIGIN;
}

export const ENV_CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
};

export const API_CONFIG = {
  BASE_URL: normalizeApiOrigin(),
  NEXT_URL: process.env.NEXT_PUBLIC_NEXT_URL || 'https://www.triumfo.us',
  TIMEOUT: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000', 10),
  RETRY_ATTEMPTS: parseInt(process.env.NEXT_PUBLIC_API_RETRY_ATTEMPTS || '3', 10),
  ENDPOINTS: {
    HOME: '/api/home',
    BOOTHDETAIL: '/api/{slug}',
    BOOTH_SIZE: '/api/rental/booth-size',
    BOOTH_SIZE_BY_URL: '/api/{boothSizeUrl}',
    BOOTH_DETAIL_BY_URL: '/api/rental/booth-size/{boothSizeUrl}/{id}',
    PORTFOLIO: '/api/portfolio',
    BLOG: '/api/blog',
    TRADE_SHOWS: '/api/trade-shows',
    UPCOMING_TRADE_SHOWS: '/api/upcoming-trade-shows',
    UPCOMING_TRADE_SHOW_DETAIL: '/api/upcoming-trade-shows/{slug}',
    MAJOR_CITIES: '/api/cities/major-exhibiting',
    CITIES_DETAIL: '/api/cities/major-exhibiting',
    TRADE_SHOW_BOOTH_RENTALS: '/api/trade-show-booth-rentals',
    FORMS_CONTACT: '/api/forms/contact',
    FORMS_QUOTATION: '/api/forms/quotation',
    FORMS_DESIGN: '/api/forms/design',
    FORMS_SCHEDULE_CALL: '/api/forms/schedule-call',
    FORMS_BLOG: '/api/forms/blog',
    IMAGES: {
      WEB: '/api/images/web',
      PORTFOLIO: '/api/images/portfolio',
      UPLOADS: '/api/images/uploads',
    },
  },
};

export async function resolveSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  try {
    const h = await headers();
    const host = h.get('x-forwarded-host') || h.get('host');
    const proto = h.get('x-forwarded-proto') || 'http';
    if (host) return `${proto}://${host}`;
  } catch (err) {
    // ignore, headers unavailable on client
  }
  return 'http://localhost:3000';
}

export const EMAIL_CONFIG = {
  SMTP: {
    HOST: process.env.SMTP_HOST || 'smtpcorp.netcore.co.in',
    PORT: Number(process.env.SMTP_PORT || 587),
    SECURE: false,
    USER: process.env.SMTP_USER || 'noreply@triumfo.de',
    PASS: process.env.SMTP_PASS || '@Xama3513#25$',
  },
  FROM: {
    NAME: 'Triumfo Inc.',
    EMAIL: 'noreply@triumfo.de',
  },
  TO: {
    DEFAULT: 'php@triumfo.de',
  },
};

export const IMAGE_CONFIG = {
  ALLOWED_FORMATS: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  MAX_SIZE: 5 * 1024 * 1024,
};

export const VALIDATION_CONFIG = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
};

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
};

export const SUCCESS_MESSAGES = {
  EMAIL_SENT: 'Email sent successfully! We will contact you soon.',
};

export const buildApiUrl = (endpoint) => {
  const base = API_CONFIG.BASE_URL;
  if (!endpoint) return base;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};

export const buildImageUrl = (type, filename) => {
  if (!filename) return null;
  const safeName = encodeURIComponent(filename);
  switch (type) {
    case 'web':
      return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IMAGES.WEB}/${safeName}`;
    case 'portfolio':
      return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IMAGES.PORTFOLIO}/${safeName}`;
    case 'uploads':
      return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IMAGES.UPLOADS}/${safeName}`;
    default:
      return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IMAGES.WEB}/${safeName}`;
  }
};
