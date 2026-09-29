import { NextResponse } from "next/server";

export type DealerPayload = {
  name: string;
  city: string;
  phone: string;
  businessType: string;
  email?: string;
  investmentBudget?: string;
  message?: string;
};

export type DealerResponse = {
  success: boolean;
  message: string;
  referenceId: string;
  timestamp: string;
};

export async function POST(request: Request) {
  try {
    const body: DealerPayload = await request.json();

    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid submission data." },
        { status: 400 }
      );
    }

    const { name, city, phone, businessType } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!city || city.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "City and State location is required." },
        { status: 400 }
      );
    }

    const cleanedPhone = phone ? phone.replace(/[\s\-()+]/g, "") : "";
    if (!cleanedPhone || cleanedPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: "A valid 10-digit contact number is required." },
        { status: 400 }
      );
    }

    if (!businessType || businessType.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please select your current Business Type." },
        { status: 400 }
      );
    }

    const referenceId = `AERRO-DLR-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      100 + Math.random() * 900
    )}`;

    console.log(`[AERRO Dealership Enquiry] [${referenceId}] from ${name} (${city}): ${businessType}`);

    const response: DealerResponse = {
      success: true,
      message: "Your dealership enquiry has been received. An AERRO partner representative will reach out shortly.",
      referenceId,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[Dealer API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
