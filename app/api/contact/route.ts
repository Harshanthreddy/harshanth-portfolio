import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Simulate sending email / recording message
    console.log('[Contact Submission]', { name, email, subject, message, date: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Harsha will get back to you shortly.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing your message.' },
      { status: 500 }
    );
  }
}
