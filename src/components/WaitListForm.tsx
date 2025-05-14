'use client';

import { useState } from 'react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3x3Ej7ECe1PJWApeDku2cQ1NcRdARAO7q_7pFAUT7NnzCg3hbzsIOuN8snR_Im0Wx/exec';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required by Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString(),
      });

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>

      {status === 'success' && (
        <p className="mt-3 text-sm text-green-600 dark:text-green-400">
          Thanks! You’ve been added to the waitlist.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">
          Please enter a valid email or try again later.
        </p>
      )}
    </form>
  );
}
