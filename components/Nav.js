"use client";
import { useState } from "react";
import { site, wa } from "@/data/content";
const links = [["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Resume", "#resume"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">{site.name}</a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><span /></button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        <a className="pill-y" href={wa()} target="_blank" rel="noreferrer">Contact</a>
      </nav>
    </header>
  );
}
