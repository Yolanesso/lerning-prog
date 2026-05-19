export const API_BASE_URL = 'http://localhost:8080';

export function getStoredToken() {
  const rawToken = localStorage.getItem('token');

  if (!rawToken) {
    return null;
  }

  if (rawToken.trim().startsWith('{')) {
    try {
      return JSON.parse(rawToken).token;
    } catch {
      return rawToken;
    }
  }

  return rawToken;
}
