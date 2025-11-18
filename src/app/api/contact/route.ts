/**
 * Contact Form API Route
 * POST /api/contact
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import { generateContactEmailHTML, generatePlainText } from '@/lib/email';

// Rate limiting map (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

/**
 * Check rate limit
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 requests per hour
  }

  limit.count++;
  return true;
}

/**
 * Get client IP
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate form data
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    // Generate email
    const emailHtml = generateContactEmailHTML(body);
    const emailText = generatePlainText(emailHtml);

    // TODO: Send email using your email service
    // For now, we'll just log it
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation email to user
    // await sendEmail({
    //   to: body.email,
    //   subject: 'We received your message',
    //   html: generateConfirmationEmail(body.name),
    // });

    // Send notification email to admin
    // await sendEmail({
    //   to: 'sales@sriengineering.org',
    //   subject: `New Contact Form: ${body.subject}`,
    //   html: emailHtml,
    //   text: emailText,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}

