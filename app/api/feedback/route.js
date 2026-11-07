import { NextResponse } from "next/server";
// TODO: yahan Supabase insert lagao (table: feedback). Abhi sirf server log mein jata hai.
export async function POST(req) {
  const { stars, name, text } = await req.json().catch(() => ({}));
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("FEEDBACK", { stars, name: String(name || "").slice(0, 80), text: String(text || "").slice(0, 1000) });
  return NextResponse.json({ ok: true });
}
