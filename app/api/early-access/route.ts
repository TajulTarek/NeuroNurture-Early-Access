import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import EarlyAccess from "@/models/EarlyAccess";
import { earlyAccessSchema } from "@/lib/validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Parse body
    const body = await request.json();

    // Validate with Zod
    const parsed = earlyAccessSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone } = parsed.data;

    // Connect to MongoDB
    await dbConnect();

    // Check duplicate email
    const existing = await EarlyAccess.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Save document
    await EarlyAccess.create({ firstName, lastName, email, phone });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Early access registration error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
