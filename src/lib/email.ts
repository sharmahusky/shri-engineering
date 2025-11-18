/**
 * Email Service
 * 
 * Handles email sending for contact and inquiry forms
 */

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  productCategory: string;
  quantity?: string;
  message: string;
}

/**
 * Generate contact form email HTML
 */
export function generateContactEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f97316; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #f97316; }
          .value { margin-top: 5px; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${escapeHtml(data.subject)}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Shri Engineering website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate inquiry form email HTML
 */
export function generateInquiryEmailHTML(data: InquiryFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #14b8a6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #14b8a6; }
          .value { margin-top: 5px; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Product Inquiry</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${escapeHtml(data.company)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Product Category:</div>
              <div class="value">${escapeHtml(data.productCategory)}</div>
            </div>
            ${data.quantity ? `
            <div class="field">
              <div class="label">Quantity:</div>
              <div class="value">${escapeHtml(data.quantity)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Shri Engineering website inquiry form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Generate plain text version
 */
export function generatePlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&');
}

