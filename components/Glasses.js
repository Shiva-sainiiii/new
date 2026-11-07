"use client";
import { useEffect, useRef, useState } from "react";

// Chashma ek hi object hai jo hero ki line ke side se shuru hota hai aur
// scroll ke saath har section ki heading tak ud ke chipakta jata hai.
// Seedha na dikhe to FRONT (degrees) badlo, jaise 90.
const FRONT = -90;
const PHI = "78deg";
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function Glasses() {
  const box = useRef(null);
  const mv = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!customElements.get("model-viewer") && !document.getElementById("mv-lib")) {
      const s = document.createElement("script");
      s.id = "mv-lib"; s.type = "module";
      s.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
      document.head.appendChild(s);
    }
    if (window.__shutterDone) { setShow(true); return; }
    const on = () => setShow(true);
    window.addEventListener("shutter-open", on);
    return () => window.removeEventListener("shutter-open", on);
  }, []);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let A = [], raf = 0, W = 280, lastTheta = null;

    const docPos = (n) => { let x = 0, y = 0; while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; } return { x, y }; };

    const measure = () => {
      const vw = document.documentElement.clientWidth;
      const base = vw < 700 ? 100 : 180;
      W = base * 1.6;
      el.style.width = W + "px"; el.style.height = W * 0.5 + "px";
      const targets = [...document.querySelectorAll(".hero .board-t, .sec h2.d")];
      A = targets.map((h, idx) => {
        const hr = h.getBoundingClientRect();
        const range = document.createRange(); range.selectNodeContents(h);
        let rects = [...range.getClientRects()].filter((r) => r.width > 0);
        if (!rects.length) rects = [hr];
        const right = Math.max(...rects.map((r) => r.right)) - hr.left;
        const top = Math.min(...rects.map((r) => r.top)) - hr.top;
        const fs = parseFloat(getComputedStyle(h).fontSize) || 40;
        const w = base * clamp(fs / 48, 0.8, 1.6), hh = w * 0.5;
        const p = docPos(h);
        const textRight = p.x + right, textTop = p.y + top;
        let cx, cy;
        if (idx > 0 && textRight + 16 + w <= vw - 4) { cx = textRight + 16 + w / 2; cy = textTop + fs * 0.1; }
        else { cx = clamp(textRight - w * 0.3, w / 2 + 4, vw - w / 2 - 4); cy = textTop - hh * 0.5; }
        return { hy: p.y, cx, cy, w, rot: idx % 2 ? -11 : 12 };
      });
      update();
    };

    const update = () => {
      raf = 0;
      if (!A.length) return;
      const r = scrollY + innerHeight * 0.5;
      let i = 0;
      while (i < A.length - 1 && r >= A[i + 1].hy) i++;
      const a = A[i], b = A[Math.min(i + 1, A.length - 1)];
      let t = 0;
      if (b !== a) t = clamp(((r - a.hy) / (b.hy - a.hy) - 0.3) / 0.55, 0, 1);
      const e = ease(t), arc = Math.sin(Math.PI * t), dir = i % 2 ? 1 : -1;
      const cx = lerp(a.cx, b.cx, e) + arc * 70 * dir;
      const cy = lerp(a.cy, b.cy, e) - arc * 110;
      const k = lerp(a.w, b.w, e) / W;
      const rot = lerp(a.rot, b.rot, e) + arc * 16 * -dir;
      el.style.transform = `translate3d(${cx - W / 2}px,${cy - W * 0.25}px,0) rotate(${rot}deg) scale(${k})`;
      const m = mv.current;
      if (m && !reduce) {
        const theta = FRONT + e * 360 * -dir;
        if (lastTheta === null || Math.abs(theta - lastTheta) > 1.5) {
          lastTheta = theta;
          m.cameraOrbit = `${theta.toFixed(1)}deg ${PHI} auto`;
        }
      }
    };

    const tick = () => { if (!raf) raf = requestAnimationFrame(update); };
    measure();
    addEventListener("scroll", tick, { passive: true });
    addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => { removeEventListener("scroll", tick); removeEventListener("resize", measure); ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={box} className={`fly ${show ? "drop" : ""}`} aria-hidden="true">
      <div className="fly-in">
        <model-viewer
          ref={mv} src="/glasses.glb" alt=""
          camera-orbit={`${FRONT}deg ${PHI} auto`} disable-zoom="" interaction-prompt="none"
          environment-image="neutral" shadow-intensity="0" exposure="1.15"
        />
      </div>
    </div>
  );
}
