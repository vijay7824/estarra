import { NextResponse } from 'next/server';
import { storage } from '@/server/storage';
import { insertContactInquirySchema } from '@/shared/schema';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = insertContactInquirySchema.parse(body);
    const inquiry = await storage.createContactInquiry(validatedData);
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your inquiry! We'll get back to you soon.",
      inquiry: inquiry 
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        message: "Invalid data provided", 
        errors: error.errors 
      }, { status: 400 });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: "Failed to submit inquiry" 
      }, { status: 500 });
    }
  }
}
