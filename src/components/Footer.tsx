'use client';

import Link from 'next/link';
// import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-white dark:text-white mb-2">
              Travel AI Magic
            </h2>
            <p className="text-sm text-gray-300 dark:text-gray-400 max-w-sm mx-auto sm:mx-0">
              Your ultimate travel planner powered by AI. Discover, plan, and explore smarter.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-white dark:text-gray-200 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-gray-300 dark:text-gray-400 hover:text-sky-500">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-300 dark:text-gray-400 hover:text-sky-500">How It Works</Link></li>
              <li><Link href="#gallery" className="text-gray-300 dark:text-gray-400 hover:text-sky-500">Inspiration</Link></li>
              <li><Link href="#waitlist" className="text-gray-300 dark:text-gray-400 hover:text-sky-500">Join Waitlist</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-white dark:text-gray-200 mb-3">Connect</h3>
            {/* Uncomment and customize when ready */}
            {/* 
            <div className="flex justify-center sm:justify-start gap-4 text-xl text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaLinkedin /></a>
            </div> 
            */}
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">Socials coming soon</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 dark:border-gray-800 text-center text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Travel AI Magic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
