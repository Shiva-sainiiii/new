import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--f-body" });
export const metadata = {
  title: "Shiva Saini | Websites for local businesses",
  description: "Full-stack developer (Next.js, Supabase, AI) building fast websites for clinics, gyms, cafes and shops in Haryana.",
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={font.variable}>{children}</body></html>);
}
