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

    // Coerce childAge to number if present
    if (body.childAge !== undefined && body.childAge !== "") {
      body.childAge = Number(body.childAge);
    }

    // Validate with Zod (discriminated union by role)
    const parsed = earlyAccessSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Connect to MongoDB
    await dbConnect();

    // Check duplicate email
    const existing = await EarlyAccess.findOne({ email: data.email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "This email is already registered." },
        { status: 409 }
      );
    }

    // Build document based on role
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc: Record<string, any> = { role: data.role, email: data.email };

    if (data.role === "parent") {
      doc.name = data.name;
      doc.childName = data.childName;
      doc.childAge = data.childAge;
    } else if (data.role === "school") {
      doc.schoolName = data.schoolName;
      doc.address = data.address;
    } else if (data.role === "doctor") {
      doc.name = data.name;
      doc.specialization = data.specialization;
      doc.address = data.address;
    }

    // Save document
    await EarlyAccess.create(doc);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Early access registration error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
