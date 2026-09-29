import { NextResponse } from "next/server";

export type NewsletterPayload = {
  email: string;
};

export type NewsletterResponse = {
  success: boolean;
  message: string;
  timestamp: string;
};

export async function POST(request: Request) {
  try {
    const body: NewsletterPayload = await request.json();

    if (!body || !body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production, this would persist to a CRM or database (e.g. Supabase, Resend, HubSpot)
    console.log(`[AERRO Newsletter Subscription] Received: ${body.email.trim()}`);

    const response: NewsletterResponse = {
      success: true,
      message: "You have been successfully added to our priority launch list.",
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[Newsletter API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
