import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} NGO Name. All rights reserved.
      </div>
    </footer>
  );
}
