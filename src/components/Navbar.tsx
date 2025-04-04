'use client';

import { useState } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { TbMenuOrder } from "react-icons/tb";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="font-mono bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center md:py-4 md:px-6 p-1">
        {/* Logo Section */}
        <h1 className="text-3xl font-extrabold text-white tracking-widest">
          Ravi <span className="text-yellow-300">Portfolio</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} legacyBehavior>
              <a
                className={`transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-yellow-300 font-bold border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <Link href="/contact" legacyBehavior>
          <a className="bg-yellow-300 text-gray-900 font-semibold md:py-2 md:px-4 px-1 rounded-lg shadow-md text-xs hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Hire Me
          </a>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <TbMenuOrder />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 flex flex-col space-y-6">
            <button onClick={toggleMobileMenu} className="text-white text-3xl self-end">
              &times;
            </button>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} legacyBehavior>
                <a
                  className={`text-xl transition-colors duration-300 ${
                    pathname === link.path
                      ? "text-yellow-300 font-bold border-l-4 border-yellow-300 pl-2"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact" legacyBehavior>
              <a className="bg-yellow-300 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105">
                Hire Me
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
