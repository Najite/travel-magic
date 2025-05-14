'use client';

import { useState } from 'react';

const formURL =
  'https://script.google.com/macros/s/AKfycbz3x3Ej7ECe1PJWApeDku2cQ1NcRdARAO7q_7pFAUT7NnzCg3hbzsIOuN8snR_Im0Wx/exec';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    const params = new URLSearchParams({ email });

    try {
      await fetch(formURL, {
        method: 'POST',
        mode: 'no-cors', // This allows the request without triggering a CORS error
        body: params,
      });

      setStatus('success');
      setMessage('You’ve been added to the waitlist!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mt-10 px-4 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            status === 'success' ? 'text-emerald-500' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
