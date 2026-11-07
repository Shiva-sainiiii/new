"use client";
import { useEffect, useState } from "react";

// Model sahi seedha na dikhe to sirf camera-orbit ("theta phi radius") badlo.
const ORBIT = "-90deg 78deg auto";

export default function Glasses() {
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
  return (
    <div className={`glasses ${show ? "drop" : ""}`}>
      <model-viewer
        src="/glasses.glb" alt="Pixel sunglasses"
        camera-controls="" auto-rotate="" auto-rotate-delay="3000" rotation-per-second="16deg"
        camera-orbit={ORBIT} disable-zoom="" interaction-prompt="none"
        environment-image="neutral" shadow-intensity="0" exposure="1.15"
      />
    </div>
  );
}
