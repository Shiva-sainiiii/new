import { Bungee, Hind } from "next/font/google";
import "./globals.css";
const bungee = Bungee({ subsets: ["latin"], weight: "400", variable: "--f-d" });
const hind = Hind({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-body" });
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shivasainiportfolio.vercel.app"),
  title: "Shiva Saini | Websites for local businesses",
  description: "Full-stack developer (Next.js, Supabase, AI) building fast websites for clinics, gyms, cafes and shops in Haryana.",
  openGraph: { title: "Shiva Saini | Websites for local businesses", description: "Full-stack developer building fast websites for clinics, gyms, cafes and shops in Haryana.", type: "website" },
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={`${bungee.variable} ${hind.variable}`}>{children}</body></html>);
}
