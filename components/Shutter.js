"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Shutter() {
  const [s, setS] = useState("closed"); // closed | up | gone
  const y0 = useRef(null);

  const open = useCallback(() => {
    setS((cur) => {
      if (cur !== "closed") return cur;
      try { sessionStorage.setItem("shutter", "1"); } catch {}
      setTimeout(() => { setS("gone"); document.body.style.overflow = ""; }, 1200);
      return "up";
    });
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("shutter"); } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) { setS("gone"); return; }
    document.body.style.overflow = "hidden";
    const t = setTimeout(open, 3500);
    const key = (e) => { if (["Enter", " ", "ArrowUp", "ArrowDown", "Escape"].includes(e.key)) open(); };
    window.addEventListener("keydown", key);
    return () => { clearTimeout(t); window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [open]);

  if (s === "gone") return null;
  return (
    <div
      className={`shutter ${s === "up" ? "up" : ""}`}
      onClick={open}
      onWheel={open}
      onTouchStart={(e) => (y0.current = e.touches[0].clientY)}
      onTouchMove={(e) => { if (y0.current !== null && y0.current - e.touches[0].clientY > 30) open(); }}
      role="button"
      aria-label="Open the shutter"
    >
      <div className="shutter-sign">
        <div className="sign-title">Your business, online</div>
        <div className="sign-sub">Clinic · Gym · Café · Real Estate · Services</div>
      </div>
      <div className="shutter-handle" />
      <div className="shutter-hint">Tap or swipe up to open ↑</div>
      <button className="shutter-skip" onClick={(e) => { e.stopPropagation(); open(); }}>Skip</button>
    </div>
  );
}
