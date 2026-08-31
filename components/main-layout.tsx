"use client";

import { useAge } from "@/components/providers/age-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CongTuoi } from "@/components/cong-tuoi";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isVerified } = useAge();

  return (
    <div className="min-h-screen flex flex-col bg-kem">
      <CongTuoi />
      <SiteHeader />
      <main key={isVerified ? "verified" : "unverified"} className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
