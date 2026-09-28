import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    
    // Honeypot check for spam bots
    const honeypot = data.get('website_url')?.toString();
    if (honeypot && honeypot.trim().length > 0) {
      // Quietly succeed to fool the bot without doing work
      return { success: true };
    }

    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const company = data.get('company')?.toString().trim();
    const role = data.get('role')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = 'Please provide your full name.';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please provide a valid business email address.';
    }

    if (!company || company.length < 2) {
      errors.company = 'Please specify your company or organization name.';
    }

    if (!message || message.length < 10) {
      errors.message = 'Please briefly describe your operational challenge or question (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        values: { name, email, company, role, message }
      });
    }

    // Server-side inquiry handling:
    // In production, this can also call Cloudflare Worker Email Routing / Resend / Mailgun API.
    // We log the inbound structured request securely on the server.
    console.log('[Axiom Contact Inquiry Received]:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      role,
      messageLength: message ? message.length : 0
    });

    return {
      success: true,
      inquiry: {
        name,
        email,
        company,
        role
      }
    };
  }
};
