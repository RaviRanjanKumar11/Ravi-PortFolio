'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // More modern icons

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
      ? "py-3 bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-xl" 
      : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-black text-white tracking-tighter italic">
            RAVI<span className="text-yellow-400 group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-gray-900/40 border border-white/5 px-6 py-2 rounded-full backdrop-blur-lg">
          <ul className="flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`relative transition-colors duration-300 hover:text-yellow-400 ${
                    pathname === link.path ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Sidebar (Slide-in Effect) */}
      <div className={`fixed inset-y-0 right-0 w-full bg-gray-950 z-[60] transform transition-transform duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full p-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="self-end text-white text-4xl mb-12"
          >
            <HiX />
          </button>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-bold tracking-tighter ${
                  pathname === link.path ? "text-yellow-400" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-2xl font-bold text-yellow-400 underline underline-offset-8"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}