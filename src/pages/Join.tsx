import React, { useState } from 'react';
import { api } from '../api/client';

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', skills: '' });
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const payload = { name: form.name, email: form.email, skills: form.skills.split(',').map(s => s.trim()) };
      await api.join(payload);
      setStatus('success');
      setForm({ name: '', email: '', skills: '' });
    } catch (err: any) {
      setStatus('error');
      console.error(err);
    }
  }

  return (
    <div className="max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Join as a Volunteer or Tutor</h2>
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded shadow">
        <label className="block">
          <div className="text-sm font-medium">Full name</div>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" required />
        </label>
        <label className="block">
          <div className="text-sm font-medium">Email</div>
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" required />
        </label>
        <label className="block">
          <div className="text-sm font-medium">Skills or subjects (comma separated)</div>
          <input value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
        </div>
        {status === 'success' && <div className="text-green-600">Thanks for signing up. We will contact you soon.</div>}
        {status === 'error' && <div className="text-red-600">There was an error. Try again later.</div>}
      </form>
    </div>
  );
}
