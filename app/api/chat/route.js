import { NextResponse } from "next/server";
import { aiContext } from "@/data/content";

const canned = [
  [/sapna|dental|clinic/i, "I built a full clinic website for Dr. Sapna's Dental Care in Rohtak, with an admin panel she runs herself and an AI chatbot that answers patients."],
  [/stack|tech|language/i, "I mostly work with Next.js, Supabase and AI APIs, plus Flask and vanilla JS for smaller tools."],
  [/gym|cafe|jewel|real estate|website|site/i, "Yes, I have ready templates for dentists, gyms, jewellers, cafes and real estate. Message Shiva on WhatsApp for a free demo."],
  [/price|cost|charge|rate/i, "Pricing depends on the project. Message Shiva on WhatsApp and he will share a quote after a free demo."],
];

export async function POST(req) {
  const { message } = await req.json().catch(() => ({}));
  if (!message || typeof message !== "string" || message.length > 500)
    return NextResponse.json({ reply: "Please send a short question." }, { status: 400 });

  const key = process.env.GEMINI_API_KEY;
  if (key) {
    try {
      const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: aiContext }] }, contents: [{ role: "user", parts: [{ text: message }] }] }),
      });
      const d = await r.json();
      const reply = d?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (reply) return NextResponse.json({ reply });
    } catch {}
  }
  const hit = canned.find(([re]) => re.test(message));
  return NextResponse.json({ reply: hit ? hit[1] : "Good question. Please message Shiva on WhatsApp and he will answer directly." });
}
