import { NextResponse } from "next/server";

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

    // In production, this would save to a database or send an email
    // For this demo, we just log it and return success
    console.log("Contact form submission:", {
      name,
      email,
      country,
      tripType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
