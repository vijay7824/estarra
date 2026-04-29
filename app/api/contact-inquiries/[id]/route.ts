import { NextResponse } from 'next/server';
import { storage } from '@/server/storage';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const inquiry = await storage.getContactInquiry(id);
    if (!inquiry) {
      return NextResponse.json({ 
        success: false, 
        message: "Inquiry not found" 
      }, { status: 404 });
    }
    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to fetch inquiry" 
    }, { status: 500 });
  }
}
