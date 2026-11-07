import { Archivo, Rozha_One } from "next/font/google";
import "./globals.css";
const archivo = Archivo({ subsets: ["latin"], weight: ["500", "700", "800", "900"], variable: "--f-body" });
const rozha = Rozha_One({ subsets: ["latin"], weight: "400", variable: "--f-sign" });
export const metadata = {
  title: "Shiva Saini | Websites for local businesses",
  description: "Full-stack developer (Next.js, Supabase, AI) building fast websites for clinics, gyms, cafes and shops in Haryana.",
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={`${archivo.variable} ${rozha.variable}`}>{children}</body></html>);
}
