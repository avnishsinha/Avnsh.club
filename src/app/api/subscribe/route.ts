import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
    if (!valid) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    // TODO: integrate with Mailchimp / Buttondown / Brevo
    // For now just simulate success:
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
