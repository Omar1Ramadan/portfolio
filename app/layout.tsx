import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/component/navbar";
import Footer from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Ramadan",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className} flex min-h-screen flex-col bg-blue-50`}>
        <div className = "flex flex-col md:flex-row flex-1">
          <NavMenu/>
          <div className="flex-2">
            {children} 
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
