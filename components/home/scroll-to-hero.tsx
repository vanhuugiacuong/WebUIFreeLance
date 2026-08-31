"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToHero() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      // Smooth scroll to top Hero section on page mount / navigation
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
