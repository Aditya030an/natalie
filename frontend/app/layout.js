import Navbar from "@/Components/Navbar";
import "./globals.css";
import Link from "next/link";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Homepage — Natalie Style",
  description: "Homepage recreated with animations (Next.js App Router)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
