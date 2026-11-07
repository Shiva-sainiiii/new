import { site, wa, heroLines, sapna, templates, services, process, projects, easy, experience, certs } from "@/data/content";

const Shot = ({ label, style }) => <div className="shot" style={style}>{label}</div>;
const Row = ({ a, b, red }) => (<div className="brow"><span>{a}</span><i /><b className={red ? "red" : ""}>{b}</b></div>);

export function Hero() {
  return (
    <section id="top" className="sec wall blue hero">
      <div className="awning" />
      <div className="board">
        <div className="d board-t">{heroLines.map((l) => <span key={l}>{l}</span>)}</div>
        <div className="board-s">Clinic · Gym · Café · Real Estate · Services</div>
      </div>
      <div className="hero-body">
        <div>
          <h1 className="hl">I build the website behind the sign.</h1>
          <p className="lead">{site.name}, full-stack developer (Next.js, Supabase, AI). 3 web internships and live client sites in Haryana.</p>
        </div>
        <div className="stack">
          <a className="btn" href={wa()} target="_blank" rel="noreferrer">Get a website for your business</a>
          <a className="btn alt" href="#contact">Hire me</a>
        </div>
      </div>
    </section>
  );
}

export function Sapna() {
  return (
    <section id="work" className="sec wall chalk">
      <h2 className="d">Dr. Sapna's<br />Dental Care</h2>
      <div className="split">
        <div className="bill">
          <div className="stamp">Live</div>
          <div className="bill-h">Bill no. 001 · Rohtak</div>
          <p className="bill-d">A full clinic website with an admin panel the doctor runs herself, and an AI chatbot that answers patients.</p>
          <Row a="Result" b={sapna.result} red />
          <Row a="Stack" b="Next.js · Admin panel · Gemini chatbot" />
          <Row a="My role" b="Design · build · launch" />
          <a className="btn" href={site.sapnaUrl} target="_blank" rel="noreferrer">Open live site ↗</a>
        </div>
        <div className="browser"><div className="browser-bar"><i /><i /><i /></div><Shot label="[Screenshot: clinic homepage]" style={{ height: 360 }} /></div>
      </div>
    </section>
  );
}

export function Templates() {
  return (
    <section id="demo" className="sec wall ink">
      <h2 className="d">Rate list</h2>
      <p className="lead">Pick your business. Each one is a ready site I customise for you.</p>
      <div className="rates">
        {templates.map((t) => (
          <div key={t.name} className="rate">
            <div className="rate-top">
              <span className="rate-n">{t.name}</span>
              <span className="sw" style={{ background: t.c[0] }} /><span className="sw" style={{ background: t.c[1] }} />
              <i />
              <a className="tagy" href={wa(`Hi, I want the ${t.name} template`)} target="_blank" rel="noreferrer">Demo</a>
            </div>
            <div className="rate-d">{t.text}</div>
          </div>
        ))}
      </div>
      <p className="small">Don't see your trade? <a className="ul" href={wa("Hi, my trade is ")} target="_blank" rel="noreferrer">Ask on WhatsApp</a></p>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="sec wall chalk">
      <h2 className="d">What I do</h2>
      <div className="svc">
        {services.map(([a, b]) => (<div key={a} className="svc-row"><div className="svc-n">{a}</div><div className="svc-d">{b}</div></div>))}
      </div>
      <div className="stickers">
        <span className="small b">Demo sites for</span>
        {templates.map((t) => <span key={t.name} className="sticker">{t.name}</span>)}
        <a className="btn" href={wa("Hi, I want a free demo")} target="_blank" rel="noreferrer">Get a free demo</a>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="sec wall yel">
      <div className="between"><h2 className="d">How a project goes</h2><a className="btn dk" href={wa("Hi, I want a free demo")} target="_blank" rel="noreferrer">Start with a free demo</a></div>
      <div className="tickets">
        {process.map(([a, b], i) => (
          <div key={a} className="ticket"><div className="d tk-n">{i + 1}</div><div className="tk-t">{a}</div><p>{b}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="sec wall chalk">
      <div className="between"><h2 className="d">Khata:<br />my projects</h2><span className="small">Things I built for myself.</span></div>
      <div className="khata">
        {projects.map(([n, stack, d, live, code]) => (
          <div key={n} className="k-row">
            <div className="k-n">{n}</div>
            <div><b>{stack}</b><div>{d}</div></div>
            <div className="k-l"><a href={live} target="_blank" rel="noreferrer">Live ↗</a><a href={code} target="_blank" rel="noreferrer">Code ↗</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EasyDevOps() {
  return (
    <section className="sec wall ink">
      <div className="split narrow">
        <div>
          <span className="mk">Engineering project</span>
          <h2 className="d" style={{ marginTop: 18 }}>Easy<br />DevOps</h2>
          <p className="lead">Deploy without a laptop. GitHub, Vercel, Render and Netlify on one screen, driven by plain commands.</p>
          <div className="stickers">{["Flask", "Vanilla JS", "Python intent parser", "Platform APIs"].map((x) => <span key={x} className="sticker">{x}</span>)}</div>
          <a className="btn" href={site.easyUrl} target="_blank" rel="noreferrer">Open live app ↗</a>
        </div>
        <div className="notes">
          {easy.map(([a, b]) => (<div key={a} className="note"><span className="mk">{a}</span><p>{b}</p></div>))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="sec wall chalk">
      <div className="split about">
        <div className="vcard"><Shot label="[Plain-background photo of you]" style={{ height: 260 }} /><div className="vc-n">{site.name}</div><div className="vc-r">Full-stack developer</div><div className="vc-c">{site.phone}<br />{site.location}</div></div>
        <div>
          <h2 className="d">About</h2>
          <p className="big2">Self-driven full-stack developer from Kharkhoda, Haryana. I build websites and AI tools for businesses, and I started by deploying from a phone.</p>
          <div className="exp">
            {experience.map(([a, b, c]) => (<div key={a} className="exp-row"><div><b>{a}</b><span>{b}</span></div><em>{c}</em></div>))}
          </div>
          <div className="row-btns" id="resume"><a className="btn" href={site.resume}>Resume ↓</a><a className="btn alt" href={site.github}>GitHub ↗</a></div>
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  return (
    <section className="sec wall blue">
      <div className="between"><h2 className="d">Certificates</h2><span className="small">Tap any one to open it full size.</span></div>
      <div className="certs">
        {certs.map((c, i) => (
          <a key={i} href={c.image || "#"} target="_blank" rel="noreferrer" className="frame">
            {c.image ? <img src={c.image} alt={c.title} /> : <Shot label="[Certificate image]" style={{ height: 120 }} />}
            <b>{c.title}</b><span>{c.by}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="sec wall yel contact">
      <div><div className="open-sign"><span className="d">Open</span><small>for freelance work and internships</small></div><h2 className="d huge">Let's talk.</h2></div>
      <div className="between end">
        <div className="info">
          <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><br />{site.location}
        </div>
        <div className="row-btns">
          <a className="btn dk" href={wa()} target="_blank" rel="noreferrer">WhatsApp me</a>
          <a className="btn alt" href={site.linkedin}>LinkedIn</a>
          <a className="btn alt" href={site.github}>GitHub</a>
        </div>
      </div>
    </section>
  );
}
