import { NextResponse } from 'next/server';
import { storage } from '@/server/storage';

export async function GET() {
  try {
    const inquiries = await storage.getContactInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to fetch inquiries" 
    }, { status: 500 });
  }
}
