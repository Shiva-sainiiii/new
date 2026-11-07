"use client";
import { useRef, useState } from "react";
import { askChips } from "@/data/content";

export default function AskAI() {
  const [msgs, setMsgs] = useState([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const box = useRef(null);

  async function send(text) {
    const t = (text ?? q).trim();
    if (!t || busy) return;
    const next = [...msgs, { r: "me", t }];
    setMsgs(next); setQ(""); setBusy(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: t }) });
      const d = await res.json();
      setMsgs([...next, { r: "ai", t: d.reply || "Something went wrong. Try again." }]);
    } catch {
      setMsgs([...next, { r: "ai", t: "Could not reach the assistant. Please try again." }]);
    }
    setBusy(false);
    setTimeout(() => box.current?.scrollTo({ top: 99999, behavior: "smooth" }), 50);
  }

  return (
    <section id="ask" className="sec wall ink">
      <div className="split ask">
        <div>
          <h2 className="d">Ask<br />my AI</h2>
          <p className="lead">Questions about my projects, stack or services. Answers come from my real work.</p>
          <div className="stickers col">{askChips.map((c) => <button key={c} className="sticker btn-s" onClick={() => send(c)}>{c}</button>)}</div>
        </div>
        <div className="phone">
          <div className="wa-head">Shiva's assistant</div>
          <div className="wa-body" ref={box}>
            {msgs.length === 0 && <div className="bubble ai">Hi! Ask me about Shiva's work, or tap a question on the left.</div>}
            {msgs.map((m, i) => <div key={i} className={`bubble ${m.r}`}>{m.t}</div>)}
            {busy && <div className="bubble ai">…</div>}
          </div>
          <div className="wa-in">
            <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask anything…" />
            <button onClick={() => send()} disabled={busy} aria-label="Send">➤</button>
          </div>
        </div>
      </div>
    </section>
  );
}
