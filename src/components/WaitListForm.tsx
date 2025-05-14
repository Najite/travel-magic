'use client';

import { useState } from 'react';

const formURL =
  'https://script.google.com/macros/s/AKfycbz3x3Ej7ECe1PJWApeDku2cQ1NcRdARAO7q_7pFAUT7NnzCg3hbzsIOuN8snR_Im0Wx/exec';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('email', email);

      await fetch(formURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required for Google Apps Script without CORS headers
      });

      setStatus('success');
      setMessage('🎉 You’ve been added to the waitlist!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            status === 'success' ? 'text-emerald-600' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
