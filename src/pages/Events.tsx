import React, { useEffect, useState } from 'react';
import { api } from '../api/client';

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getEvents().then((data) => {
      setEvents(data || []);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading events…</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="space-y-4">
        {events.length === 0 && <div className="text-gray-600">No events found.</div>}
        {events.map(ev => (
          <article key={ev.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{ev.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{ev.description}</p>
            <div className="mt-2 text-xs text-gray-500">{ev.start_at ? new Date(ev.start_at).toLocaleString() : 'Date TBD'}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
