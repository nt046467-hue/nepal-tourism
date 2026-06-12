import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, country, tripType, message } = body;

    if (!name || !email || !country || !tripType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save inquiry to database
    const inquiry = await db.contactInquiry.create({
      data: {
        name,
        email,
        country,
        tripType,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully! Our team will contact you within 24 hours.",
        id: inquiry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const inquiries = await db.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error("Fetch inquiries error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
