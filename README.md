# Shiva Saini portfolio (Next.js 14, App Router)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Kahan kya badalna hai
- `data/content.js`: saara text, links, WhatsApp number, certificates, projects.
- `app/page.js`: section ka order (lines upar-neeche karo).
- `components/Shutter.js`: shutter animation.
- `components/Glasses.js`: 3D chashma jo scroll ke saath har heading tak udta hai (`FRONT` se direction badlo).
- `components/ScrollFX.js`: scroll reveal animation + nav ka progress bar.
- Logo: `public/shiva-logo.png` (nav, visiting card, chat DP), `app/icon.png` (favicon).
- `app/globals.css`: colors (top par :root) aur mobile breakpoint (820px).
- Images: `public/` mein rakho, phir `components/Sections.js` ke `<Shot />` ko `<img src="/file.png" />` se badlo. Certificates ke liye `data/content.js` mein `image: "/certs/x.jpg"`.

## Ask my AI
Bina key ke canned answers aate hain. Real AI ke liye `.env.local` banao (`.env.example` dekho) aur `GEMINI_API_KEY` daalo. Vercel par Environment Variables mein bhi daalna.

## Feedback
`app/api/feedback/route.js` abhi sirf server log karta hai. Supabase insert wahan lagana hai.

## Deploy
GitHub par push karo, Vercel par import karo.
