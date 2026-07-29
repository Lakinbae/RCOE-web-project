import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold">Welcome to Our NGO</h1>
        <p className="mt-2 text-gray-700">We support children with education, mentorship, and community programs. Edit this copy in the frontend or via the content pages API.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/events" className="px-4 py-2 bg-blue-600 text-white rounded">See Events</Link>
          <Link to="/join" className="px-4 py-2 border rounded">Join as Volunteer</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Founders</h3>
          <p className="text-sm text-gray-600 mt-2">Add founder bios here.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Impact</h3>
          <p className="text-sm text-gray-600 mt-2">Showcase beneficiaries and outcomes.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Support</h3>
          <p className="text-sm text-gray-600 mt-2">Donation campaigns and how funds are used.</p>
        </div>
      </section>
    </div>
  );
}
