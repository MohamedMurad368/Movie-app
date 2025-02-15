"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline'; // استيراد أيقونة القلب

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-yellow-500">
            MovieApp
          </Link>
        </div>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block md:w-full md:justify-center`}>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li className="flex items-center space-x-2"> {/* إضافة مساحة بين الرابط والقلب */}
            <Link href="/movies" className="hover:text-yellow-500">
              Movies
            </Link>
            {/* إضافة أيقونة القلب بجانب Movies */}
            <HeartIcon className="w-5 h-5 text-red-500" />
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
