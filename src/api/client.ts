const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

async function request(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...opts
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export const api = {
  getEvents: () => request('/events'),
  getEvent: (id: string) => request(`/events/${id}`),
  join: (payload: any) => request('/join', { method: 'POST', body: JSON.stringify(payload) }),
  createCheckout: (payload: any) => request('/donate/create-checkout-session', { method: 'POST', body: JSON.stringify(payload) })
};

