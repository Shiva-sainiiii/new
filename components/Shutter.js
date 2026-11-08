"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Shutter() {
  const [s, setS] = useState("closed"); // closed | up | gone
  const y0 = useRef(null);
  const done = useRef(false);

  const open = useCallback(() => {
    if (done.current) return;
    done.current = true;
    try { sessionStorage.setItem("shutter", "1"); } catch {}
    window.__shutterDone = true;
    window.dispatchEvent(new Event("shutter-open"));
    setS("up");
    setTimeout(() => { setS("gone"); document.body.style.overflow = ""; }, 1200);
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("shutter"); } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) { done.current = true; window.__shutterDone = true; setS("gone"); return; }
    document.body.style.overflow = "hidden";
    const t = setTimeout(open, 2800);
    const key = (e) => { if (["Enter", " ", "ArrowUp", "ArrowDown", "Escape"].includes(e.key)) open(); };
    window.addEventListener("keydown", key);
    return () => { clearTimeout(t); window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [open]);

  if (s === "gone") return null;
  return (
    <div className={`shutter ${s === "up" ? "up" : ""}`} onClick={open} onWheel={open}
      onTouchStart={(e) => (y0.current = e.touches[0].clientY)}
      onTouchMove={(e) => { if (y0.current !== null && y0.current - e.touches[0].clientY > 30) open(); }}
      role="button" aria-label="Open the shutter">
      <img className="shutter-logo" src="/shiva-logo.png" alt="" />
      <div className="lock" />
      <div className="chev" />
      <div className="shutter-hint">Tap or scroll to open</div>
    </div>
  );
}
