import React, { useState } from 'react';
import { api } from '../api/client';

export default function Donate() {
  const [amount, setAmount] = useState(5000);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function donate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.createCheckout({ amount_cents: amount, donor_email: email, donor_name: '', recurring: false });
      if (res.url) {
        window.location.href = res.url;
      } else {
        alert('Checkout session created. Session id: ' + res.sessionId);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to create checkout session');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold mb-4">Donate</h2>
      <form onSubmit={donate} className="space-y-4 bg-white p-6 rounded shadow">
        <label className="block">
          <div className="text-sm font-medium">Amount (in cents)</div>
          <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <div className="text-sm font-medium">Email for receipt</div>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading ? 'Redirecting…' : 'Donate'}</button>
        </div>
      </form>
    </div>
  );
}
