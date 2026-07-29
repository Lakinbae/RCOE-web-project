import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">NGO Name</Link>
        <nav className="space-x-4">
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/join" className="hover:underline">Join</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

