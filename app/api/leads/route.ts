import { NextResponse } from 'next/server';
import { storage } from '@/server/storage';
import { insertLeadSchema } from '@/shared/schema';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Clean phone number: remove spaces, brackets and dashes
    const rawPhone = String(body.phone || '').trim().replace(/[\s-()]/g, '');
    const cleanPhone = rawPhone.startsWith('+91') 
      ? rawPhone.slice(3) 
      : rawPhone.startsWith('91') && rawPhone.length === 12 
        ? rawPhone.slice(2) 
        : rawPhone;

    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({
        success: false,
        message: "Please enter a valid 10-digit mobile number."
      }, { status: 400 });
    }

    const leadData = {
      name: body.name?.trim() || 'Prospective Client',
      phone: cleanPhone,
      service: body.service?.trim() || 'House Construction',
      location: body.location?.trim() || 'Lucknow',
      area: body.area ? String(body.area).trim() : null,
      budget: body.budget ? String(body.budget).trim() : null,
      sourcePage: body.sourcePage ? String(body.sourcePage).trim() : 'Website',
    };

    const validatedData = insertLeadSchema.parse(leadData);
    const savedLead = await storage.createLead(validatedData);

    // Construct formatted WhatsApp message for +91 7392861099
    const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const waText = 
      `*New Estarra Construction Lead (Lucknow)*\n\n` +
      `👤 *Name:* ${savedLead.name}\n` +
      `📱 *Phone:* +91 ${savedLead.phone}\n` +
      `🏗️ *Service:* ${savedLead.service}\n` +
      `📍 *Location:* ${savedLead.location || 'Lucknow'}\n` +
      `📐 *Plot/Built-up Area:* ${savedLead.area || 'Not specified'}\n` +
      `💰 *Budget:* ${savedLead.budget || 'Not specified'}\n` +
      `📄 *Source Page:* ${savedLead.sourcePage || 'Website'}\n` +
      `⏰ *Received:* ${formattedDate}`;

    const whatsappUrl = `https://wa.me/917392861099?text=${encodeURIComponent(waText)}`;

    // Optional: If a server-side webhook is configured in env, forward the lead
    const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: "917392861099",
          message: waText,
          lead: savedLead,
        }),
      }).catch((err) => console.error('Webhook notification error:', err));
    }

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully and queued for WhatsApp (+91 7392861099)!",
      lead: savedLead,
      whatsappUrl,
      whatsappMessage: waText,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Invalid lead data",
        errors: error.errors,
      }, { status: 400 });
    }
    console.error('Lead submission error:', error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while saving your enquiry. Please try again.",
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await storage.getLeads();
    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error('Fetch leads error:', error);
    return NextResponse.json({
      success: false,
      message: "Failed to retrieve leads",
    }, { status: 500 });
  }
}
