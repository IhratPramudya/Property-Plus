'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen.toString()}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="h-10 w-auto"
                src={logo}
                alt="PropertyPulse"
                width={40}
                height={40}
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-2">
              <Link
                href="/"
                className="text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Properties
              </Link>
              <Link
                href="/properties/add"
                className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Add Property
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:block md:ml-6">
            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-3 py-2">
              <FaGoogle className="text-white mr-2" />
              <span>Login or Register</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Properties
            </Link>
            <Link
              href="/properties/add"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Add Property
            </Link>
            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-3 py-2 my-4">
              <FaGoogle className="mr-2" />
              <span>Login or Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
