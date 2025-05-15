import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    const res = await fetch(process.env.BASEROW_API_URL!, {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.BASEROW_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: email, // Ensure this matches your field name in Baserow
        },
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Baserow error:', error);
      return NextResponse.json({ message: 'Failed to save email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}