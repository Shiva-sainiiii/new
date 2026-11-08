"use client";
import { useState } from "react";
import { site, wa } from "@/data/content";
const links = [["Work", "#work"], ["Services", "#services"], ["Projects", "#projects"], ["About", "#about"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo"><img src="/shiva-logo.png" width="38" height="38" alt="" /><span>{site.name}</span></a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><span /></button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        <a href={site.resume} target="_blank" rel="noreferrer">Resume</a>
        <a className="btn sm" href={wa()} target="_blank" rel="noreferrer">Contact</a>
      </nav>
    </header>
  );
}
