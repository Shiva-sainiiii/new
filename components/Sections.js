import { site, wa, sapna, templates, services, process, projects, easy, experience, certs } from "@/data/content";

const Shot = ({ label, className = "", style }) => <div className={`shot ${className}`} style={style}>{label}</div>;

export function Hero() {
  return (
    <section id="top" className="sec dark hero">
      <div className="signboard">
        <div className="sign-title">Your business, online</div>
        <div className="sign-sub">Clinic · Gym · Café · Real Estate · Services</div>
      </div>
      <div className="hero-body">
        <div>
          <h1 className="h xl">I build the website<br />behind the sign.</h1>
          <p className="lead">{site.name}, full-stack developer (Next.js, Supabase, AI). 3 web internships and live client sites in Haryana.</p>
        </div>
        <div className="stack">
          <a className="btn y" href={wa()} target="_blank" rel="noreferrer">Get a website for your business</a>
          <a className="btn ghost" href="#contact">Hire me ↗</a>
        </div>
      </div>
    </section>
  );
}

export function Sapna() {
  return (
    <section id="work" className="sec bone">
      <div className="split">
        <div className="col-between">
          <div>
            <span className="tag">Live client · Rohtak</span>
            <h2 className="h">Dr. Sapna's Dental Care</h2>
            <p className="lead">A full clinic website with an admin panel the doctor runs herself, and an AI chatbot that answers patients.</p>
          </div>
          <div>
            <div className="line strong"><span>Result</span><span className="red">{sapna.result}</span></div>
            <div className="line"><span>Stack</span><span>Next.js · Admin panel · Gemini chatbot</span></div>
            <div className="line"><span>My role</span><span>Design · build · launch</span></div>
            <a className="btn k" href={site.sapnaUrl} target="_blank" rel="noreferrer">Open live site ↗</a>
          </div>
        </div>
        <div className="browser">
          <div className="browser-bar"><i /><i /><i /></div>
          <Shot label="[Screenshot: clinic homepage]" style={{ height: 380 }} />
        </div>
      </div>
    </section>
  );
}

export function Templates() {
  return (
    <section id="demo" className="sec dark">
      <h2 className="h">Templates<br />by trade</h2>
      <p className="lead">Pick your business. Each one is a ready site I customise for you.</p>
      <div className="tpl">
        {templates.map((t, i) => (
          <div key={t.name} className={`tpl-row ${i === 0 ? "first" : ""}`}>
            <div><div className="big">{t.name}</div><div className="sm">{t.text}</div></div>
            <div className="dots">{t.c.map((c) => <span key={c} style={{ background: c }} />)}</div>
          </div>
        ))}
      </div>
      <p className="sm">Don't see your trade? <a className="yl" href={wa("Hi, my trade is ")} target="_blank" rel="noreferrer">Ask on WhatsApp</a></p>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="sec bone">
      <h2 className="h">What I do</h2>
      <div className="svc">
        {services.map(([a, b]) => (<div key={a} className="svc-row"><div className="big l">{a}</div><div className="mut">{b}</div></div>))}
      </div>
      <div className="chips">
        <span className="t">Demo sites by trade</span>
        {templates.map((t) => <span key={t.name} className="pill">{t.name}</span>)}
        <a className="btn k push" href={wa("Hi, I want a free demo")} target="_blank" rel="noreferrer">Get a free demo ↗</a>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="sec yel">
      <div className="between">
        <h2 className="h">How a<br />project goes</h2>
        <a className="btn k" href={wa("Hi, I want a free demo")} target="_blank" rel="noreferrer">Start with a free demo ↗</a>
      </div>
      <div className="steps">
        {process.map(([a, b], i) => (
          <div key={a} className="step"><div className="num">{i + 1}</div><div className="big">{a}</div><p>{b}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="sec dark">
      <div className="between"><h2 className="h">Projects</h2><span className="mut sm">Things I built for myself.</span></div>
      <div className="proj">
        {projects.map(([n, stack, d, live, code]) => (
          <div key={n} className="proj-row">
            <div className="big xl2">{n}</div>
            <div><div className="yl b">{stack}</div><div className="mut">{d}</div></div>
            <div className="b"><a href={live} target="_blank" rel="noreferrer">Live ↗</a> &nbsp; <a href={code} target="_blank" rel="noreferrer">Code ↗</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EasyDevOps() {
  return (
    <section className="sec dark alt">
      <div className="split narrow">
        <div className="col-between">
          <div>
            <span className="tag y">Engineering project</span>
            <h2 className="h">EasyDevOps</h2>
            <p className="lead">Deploy without a laptop. GitHub, Vercel, Render and Netlify on one screen, driven by plain commands.</p>
          </div>
          <div>
            <div className="chips">{["Flask", "Vanilla JS", "Python intent parser", "Platform APIs"].map((x) => <span key={x} className="pill">{x}</span>)}</div>
            <a className="btn y" href={site.easyUrl} target="_blank" rel="noreferrer">Open live app ↗</a>
          </div>
        </div>
        <div>
          {easy.map(([a, b], i) => (
            <div key={a} className={`cs ${i === 0 ? "first" : ""}`}><div className="t yl">{a}</div><p>{b}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="sec bone">
      <div className="split about">
        <div className="photo"><Shot label="[Plain-background photo of you]" /></div>
        <div>
          <h2 className="h">{site.name}</h2>
          <p className="lead big2">Self-driven full-stack developer from Kharkhoda, Haryana. I build websites and AI tools for businesses, and I started by deploying from a phone.</p>
          <div className="t" style={{ marginTop: 28 }}>Experience</div>
          {experience.map(([a, b, c]) => (
            <div key={a} className="line"><span><b>{a}</b><br /><small>{b}</small></span><b>{c}</b></div>
          ))}
          <div className="row-btns" id="resume">
            <a className="btn k" href={site.resume}>Resume ↓</a>
            <a className="btn ghost" href={site.github}>GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  return (
    <section className="sec bone alt2">
      <div className="between"><h2 className="h">Certificates</h2><span className="mut sm">Tap any one to open it full size.</span></div>
      <div className="certs">
        {certs.map((c, i) => (
          <a key={i} href={c.image || "#"} target="_blank" rel="noreferrer" className="cert">
            {c.image ? <img src={c.image} alt={c.title} /> : <Shot label="[Certificate image]" className="flat" />}
            <b>{c.title}</b><span>{c.by}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="sec yel contact">
      <div><span className="t">Open for freelance work and internships</span><h2 className="h huge">Let's talk.</h2></div>
      <div className="between end">
        <div className="info">
          <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><br />{site.location}
        </div>
        <div className="row-btns">
          <a className="btn k" href={wa()} target="_blank" rel="noreferrer">WhatsApp me ↗</a>
          <a className="btn ghost" href={site.linkedin}>LinkedIn</a>
          <a className="btn ghost" href={site.github}>GitHub</a>
        </div>
      </div>
    </section>
  );
}
