import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/main/SmoothScroll";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Solvestic | Science-Backed Skincare for Indian Skin",
  description:
    "Discover Solvestic skincare, thoughtfully formulated for Indian skin to target pigmentation, acne, dryness, pores and dullness with effective solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable}`}
    >
      <body>
        <Navbar />
        <SmoothScroll />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}