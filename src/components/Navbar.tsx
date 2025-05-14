'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-600 dark:text-sky-400">
          ✈️ TravelMagic
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate-700 dark:text-slate-200"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 px-6"
      >
        <nav className="flex flex-col gap-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
