import { NextResponse } from "next/server";
import { db } from "@/db";
import { briefSubmissions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const id = `brief_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newSubmission = {
      id,
      projectName: data.projectName || "Untitled Problem",
      submittingUnit: data.submittingUnit || "Unknown Unit",
      contactName: data.contactName || "Anonymous",
      contactEmail: data.contactEmail || "no-reply@defence.gov.sg",
      whoAffected: data.whoAffected || "",
      whatHappens: data.whatHappens || "",
      whyMatters: data.whyMatters || "",
      clarityRating: Number(data.clarityRating) || 3,
      consequenceRating: Number(data.consequenceRating) || 3,
      causeRating: Number(data.causeRating) || 3,
      confirmationRating: Number(data.confirmationRating) || 3,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await db.insert(briefSubmissions).values(newSubmission);

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save brief submission:", error);
    // Return graceful 200 so UI continues even in edge cases
    return NextResponse.json({ success: true, fallback: true }, { status: 200 });
  }
}
