"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { useAge } from "@/components/providers/age-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CongTuoi } from "@/components/cong-tuoi";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isVerified } = useAge();
  const pathname = usePathname();

  // Tự động đưa màn hình về vị trí đầu trang khi chuyển tabs / đổi route
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-kem">
      <CongTuoi />
      <SiteHeader />
      <main key={isVerified ? "verified" : "unverified"} className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}
