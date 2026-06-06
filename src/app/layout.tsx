// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayoutProxy from "@/components/layout/MainLayoutProxy"; // Importujemy proxy
import "./globals.css";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelved - Twoja Wirtualna Biblioteka",
  description: "Śledź książki, filmy i seriale w jednym miejscu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="antialiased bg-[#121A1D] text-[#FAD3B1] min-h-screen relative flex flex-col">
        {/* Proxy zajmie się wyświetlaniem Navbaru i Footeru zależnie od ścieżki */}
        <MainLayoutProxy>
          {children}
          <Toaster position="top-right" richColors />
        </MainLayoutProxy>
      </body>
    </html>
  );
}
