import { Outfit, Inter } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--f-d" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-body" });
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shivasainiportfolio.vercel.app"),
  title: "Shiva Saini | Websites for local businesses",
  description: "Full-stack developer (Next.js, Supabase, AI) building fast websites for clinics, gyms, cafes and shops in Haryana.",
  openGraph: { title: "Shiva Saini | Websites for local businesses", description: "Full-stack developer building fast websites for clinics, gyms, cafes and shops in Haryana.", type: "website" },
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={`${outfit.variable} ${inter.variable}`}>{children}</body></html>);
}
