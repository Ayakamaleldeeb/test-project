 // src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 ">
        <li><Link href="/" className="text-white">Home</Link></li>
        <li><Link href="/about" className="text-white">About</Link></li>
        <li><Link href="/contact" className="text-white">Contact</Link></li>
        <li><Link href="/login" className="text-white">login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;