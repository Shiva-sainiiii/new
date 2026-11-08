"use client";
import { useEffect, useRef, useState } from "react";

// Chashma ek hi object hai: hero ke sign ke kone par chipakta hai, phir scroll ke saath har section ki
// heading ke top-right kone tak udta hai aur wahan tirchha chipak jata hai. Seedha na dikhe to FRONT (degrees) badlo, jaise 90.
// Smooth: scroll sirf TARGET set karta hai, asli position har frame par dheere dheere target ki taraf badhti hai (jhatka nahi).
// Size: BASE_M (phone) / BASE_D (desktop) badlo. Chipakne ki jagah: neeche measure() me `cx`, `cy`.
const FRONT = -90;
const PHI = "78deg";
const BASE_M = 190, BASE_D = 300;
const SPEED = 6.5; // zyada = tez follow, kam = aur smooth
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t); // sine in-out

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
    let A = [], W = 300, raf = 0, last = 0, snap = true, lastTheta = null;
    const cur = { x: 0, y: 0, k: 1, rot: 0, th: FRONT };
    const tgt = { x: 0, y: 0, k: 1, rot: 0, th: FRONT };

    const docPos = (n) => { let x = 0, y = 0; while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; } return { x, y }; };

    const measure = () => {
      const vw = document.documentElement.clientWidth;
      const base = vw < 700 ? BASE_M : BASE_D;
      W = base * 1.6;
      el.style.width = W + "px"; el.style.height = W * 0.5 + "px";
      // pehla target = hero ka sign (board); baaki = har section ki heading
      const targets = [...document.querySelectorAll(".hero .board, .sec h2.d")];
      A = targets.map((h, idx) => {
        const p = docPos(h);
        let textRight, textTop, fs;
        if (idx === 0) { textRight = p.x + h.offsetWidth; textTop = p.y; fs = 48; }
        else {
          const hr = h.getBoundingClientRect();
          const range = document.createRange(); range.selectNodeContents(h);
          let rects = [...range.getClientRects()].filter((r) => r.width > 0);
          if (!rects.length) rects = [hr];
          textRight = p.x + Math.max(...rects.map((r) => r.right)) - hr.left;
          textTop = p.y + Math.min(...rects.map((r) => r.top)) - hr.top;
          fs = parseFloat(getComputedStyle(h).fontSize) || 40;
        }
        const w = base * clamp(fs / 48, 0.85, 1.25) * 1.6, hh = w * 0.5;
        // Top-right kone par chipakta hai: chashma ka dikhta hissa heading ke kone par aadha andar, aadha bahar
        const cx = clamp(textRight - w * 0.12, w * 0.3, vw - w * 0.3);
        const cy = textTop - hh * 0.08;
        return { hy: p.y, cx, cy, w, rot: idx === 0 ? 11 : idx % 2 ? -11 : 12 };
      });
      snap = true; // resize par seedha nayi jagah par (animate nahi)
      update();
    };

    const apply = () => {
      el.style.transform = `translate3d(${cur.x - W / 2}px,${cur.y - W * 0.25}px,0) rotate(${cur.rot}deg) scale(${cur.k})`;
      const m = mv.current;
      if (m && !reduce && (lastTheta === null || Math.abs(cur.th - lastTheta) > 0.4)) {
        lastTheta = cur.th;
        m.cameraOrbit = `${cur.th.toFixed(1)}deg ${PHI} auto`;
      }
    };

    const step = (now) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
      const f = snap || reduce ? 1 : 1 - Math.exp(-dt * SPEED);
      let moving = false;
      for (const k of ["x", "y", "k", "rot", "th"]) {
        const d = tgt[k] - cur[k];
        if (Math.abs(d) > (k === "k" ? 0.002 : 0.05)) moving = true;
        cur[k] += d * f;
      }
      snap = false;
      apply();
      if (moving) raf = requestAnimationFrame(step);
    };

    // scroll se sirf target nikalta hai
    function update() {
      if (!A.length) return;
      const r = scrollY + innerHeight * 0.5;
      let i = 0;
      while (i < A.length - 1 && r >= A[i + 1].hy) i++;
      const a = A[i], b = A[Math.min(i + 1, A.length - 1)];
      let t = 0;
      if (b !== a) t = clamp(((r - a.hy) / (b.hy - a.hy) - 0.12) / 0.72, 0, 1);
      const e = ease(t), arc = Math.sin(Math.PI * t), side = i % 2 ? 1 : -1;
      tgt.x = lerp(a.cx, b.cx, e) + arc * 40 * side;
      tgt.y = lerp(a.cy, b.cy, e) - arc * 70;
      tgt.k = lerp(a.w, b.w, e) / W;
      tgt.rot = lerp(a.rot, b.rot, e) + arc * 10 * -side;
      tgt.th = FRONT - (i + e) * 360; // hamesha ek hi disha me ghoomta hai, isliye wapas ulta nahi ghoomta
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); }
    }

    measure();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => { removeEventListener("scroll", update); removeEventListener("resize", measure); ro.disconnect(); cancelAnimationFrame(raf); };
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
