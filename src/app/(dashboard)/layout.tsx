import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIC DDoS Radar",
  description: "Created by Saeed Khosravi(sharpwit)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-[family-name:var(--font-geist-sans)] flex h-screen bg-gradient-to-l from-secondary-gradient to-primary-gradient text-foreground overflow-hidden">
          {/* Sidebar */}
          <Sidebar />
          {/* Main */}
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
