"use client";

import { useAge } from "@/components/providers/age-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CongTuoi } from "@/components/cong-tuoi";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isVerified } = useAge();

  return (
    <>
      <CongTuoi />
      <SiteHeader />
      <main key={isVerified ? "verified" : "unverified"}>{children}</main>
      <SiteFooter />
    </>
  );
}
