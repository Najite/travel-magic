// src/app/api/waitlist/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    const formData = new URLSearchParams({ email });

    // Setup timeout (10 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000000); // 10 seconds

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ message: 'Webhook URL not set' }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok && response.status !== 0) {
      // status 0 is normal for `no-cors` from Google
      throw new Error('Failed to submit to Google Sheet.');
    }

    return NextResponse.json({ message: 'Success' });
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      return NextResponse.json({ message: 'Request timed out' }, { status: 504 });
    }

    console.error('Error in /api/waitlist:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
