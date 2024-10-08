import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Travel",
  description: "Travel Web App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-3">
        <Navbar/>
       <main className="relative overflow-hidden">
       {children}
       </main>
        <Footer/>
        </body>
    </html>
  );
}
