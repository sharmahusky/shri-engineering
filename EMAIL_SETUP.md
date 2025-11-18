# Email Service Setup Guide

## Current Implementation

The contact form API is set up at `/api/contact/route.ts` and ready to integrate with an email service.

## Option 1: Resend (Recommended - Modern & Simple)

### Setup Steps:

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     EMAIL_FROM=noreply@yourdomain.com
     ```

3. **Update API Route:**
   Uncomment and update the Resend code in `src/app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({
     from: process.env.EMAIL_FROM || 'noreply@shriengineering.com',
     to: companyInfo.contact.email,
     subject: emailContent.subject,
     html: emailContent.html,
     text: emailContent.text,
   });
   ```

## Option 2: Nodemailer (Traditional)

### Setup Steps:

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Configure Email Service:**
   Add to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   ```

3. **Update API Route:**
   Uncomment and configure the Nodemailer code in `src/app/api/contact/route.ts`

## Option 3: SendGrid (Enterprise)

### Setup Steps:

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create an API key
   - Add to `.env.local`:
     ```
     SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
     EMAIL_FROM=noreply@yourdomain.com
     ```

3. **Update API Route:**
   Add SendGrid code to `src/app/api/contact/route.ts`

## Option 4: Gmail SMTP (Simple, but limited)

### Setup Steps:

1. **Enable App Password:**
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an app password

2. **Configure:**
   Add to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   ```

3. **Use Nodemailer** (see Option 2)

## Testing

After setup, test the contact form:
1. Fill out the form on `/contact`
2. Submit
3. Check the email inbox
4. Check server logs for any errors

## Environment Variables

Add to `.env.local`:
```env
# Email Service (choose one)
RESEND_API_KEY=your_resend_api_key
# OR
SENDGRID_API_KEY=your_sendgrid_api_key
# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Email Configuration
EMAIL_FROM=noreply@shriengineering.com
EMAIL_TO=shriengineering24522@gmail.com

# Site URL (for sitemap)
NEXT_PUBLIC_SITE_URL=https://www.shriengineering.com
```

## Current Status

The API route is ready but currently just logs submissions. Uncomment and configure your preferred email service to enable actual email sending.

## Security Notes

- Never commit `.env.local` to git
- Use environment variables for all sensitive data
- Validate all form inputs (already implemented)
- Consider rate limiting for production
- Use HTTPS in production

## Rate Limiting (Optional)

For production, consider adding rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

Or use a middleware solution to prevent spam.

