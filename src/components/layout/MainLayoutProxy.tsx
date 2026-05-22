// src/components/MainLayoutProxy.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function MainLayoutProxy({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="grow">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
