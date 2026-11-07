// Saara content yahin se badlo. Placeholders "#" ya [ ] ko asli values se replace karo.
export const site = {
  name: "Shiva Saini",
  wa: "918813008167",
  email: "shivasaini.5666@gmail.com",
  phone: "+91 88130 08167",
  location: "Kharkhoda (Sonipat), Haryana",
  github: "#", linkedin: "#", resume: "#", // resume: public/resume.pdf rakho aur "/resume.pdf" likho
  sapnaUrl: "https://drsapnadentalrohtak.vercel.app/",
  easyUrl: "https://easydevops.vercel.app",
};
export const wa = (t = "Hi Shiva, I want a website for my business") =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`;

export const sapna = { result: "[YOUR RESULT, e.g. bookings per month]" };

export const templates = [
  { name: "Dentist", text: "Clinic site with booking, treatments and a chatbot.", c: ["#0e5a6b", "#7fe3f0"] },
  { name: "Gym", text: "Plans, trainers and membership enquiries that convert.", c: ["#7a1212", "#ff6a4d"] },
  { name: "Jeweller", text: "Showroom feel, catalogue and investment calculator.", c: ["#6b4a12", "#f5d889"] },
  { name: "Cafe", text: "Menu, gallery and table bookings on WhatsApp.", c: ["#4a2c17", "#e6b27a"] },
  { name: "Real Estate", text: "Property listings with maps and lead capture.", c: ["#12354a", "#8fd0ff"] },
];
export const services = [
  ["Website Development", "Fast, responsive and AI-powered websites for your business."],
  ["Google Business Setup", "Show up on Google Search and Maps for local customers."],
  ["WhatsApp Business Setup", "Business profile, catalog and quick replies, set up properly."],
  ["Insta Business Boost", "A business-ready Instagram profile and growth support."],
];
export const process = [
  ["Free demo", "Tell me about your business on WhatsApp. I make a demo website before you pay anything."],
  ["Build", "A fast website for your business. Booking or an AI assistant only where it actually helps."],
  ["Launch", "Google Business and WhatsApp Business set up, so customers can find you and message you."],
];
export const projects = [
  ["EasyDevOps", "Flask · Python intent parser · Platform APIs", "Deploy from a phone: GitHub, Vercel, Render, Netlify on one screen.", "https://easydevops.vercel.app", "#"],
  ["CodeAgent", "Vanilla JS · AI API", "Mobile-first coding assistant with live preview and self-testing.", "#", "#"],
  ["Snake Rush", "Canvas · Vanilla JS", "Browser slither game with AI snakes that have personalities.", "#", "#"],
  ["Blog Website", "Supabase · OpenRouter · Vercel", "A blog where human writing meets AI.", "#", "#"],
];
export const easy = [
  ["Problem", "June 2026, coding from a phone: GitHub meant adding and deleting files one by one, and Vercel meant a separate tab to import a repo and deploy."],
  ["Decision: skip the AI call", "OpenRouter's free tier allows 15 requests a minute and 50 a day, and a public product would bill every user to my account. So commands run through a Python intent parser with suggestions while typing. AI only steps in for typos and complex requests."],
  ["Decision: three ways to upload", "Files, a whole folder (added because files from different directories got mixed), or a zip, since Claude can hand you a zip of the whole project."],
  ["Result", "Bulk delete of files, repos and folders, which GitHub itself does not offer. Chat history, all three platforms on one screen, and user API keys are not saved directly."],
];
export const experience = [
  ["Maincrafts Technology", "Web Development Intern", "Jun–Jul 2026"],
  ["OctaNet", "Web Development Intern", "Oct–Dec 2024"],
  ["CodSoft", "Web Development Intern", "Sep–Oct 2024"],
];
// image: public/certs/ mein file rakho aur "/certs/name.jpg" likho
export const certs = [
  ["Maincrafts Technology", "Internship"], ["Maincrafts Technology", "Internship"],
  ["Web Development Internship", "OCTANET Pvt Ltd"], ["AI For Beginners", "Microsoft"],
  ["Data Entry Operator", "IT/ITeS"], ["ADCA", "Sunshine Campus"],
  ["CRM", "IT/ITeS"], ["Web Development Internship", "CODSOFT"],
].map(([title, by]) => ({ title, by, image: null }));
export const askChips = ["What did you build for Dr. Sapna?", "Which stack do you use?", "Can you make a site for my gym?"];
// AI ko jo context milega
export const aiContext = `You are Shiva Saini's portfolio assistant. Answer briefly and only from this info.
Shiva is a full-stack developer (Next.js, Supabase, AI) from Kharkhoda, Haryana, with 3 web internships.
Client work: Dr. Sapna's Dental Care, Rohtak: clinic website, admin panel she runs herself, Gemini chatbot.
Services: website development, Google Business setup, WhatsApp Business setup, Insta business boost. Templates: dentist, gym, jeweller, cafe, real estate.
Process: free demo first, then build, then launch.
Projects: EasyDevOps (Flask, deploy from a phone), CodeAgent, Snake Rush, Blog Website.
For pricing or hiring, tell them to message Shiva on WhatsApp (${site.phone}). If unsure, say so.`;
