import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Divyavani Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative">
        
        <ParticlesBackground />
        <Navbar />

        <div className="pt-24">
          {children}
        </div>
        
      </body>
    </html>
  );
}