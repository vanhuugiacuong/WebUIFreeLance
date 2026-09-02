"use client";

import { createContext, useContext, useEffect, useState } from "react";

const KHOA = "mien-du-tuoi";

interface AgeContextType {
  isVerified: boolean;
  confirmAge: () => void;
  resetAge: () => void;
}

const AgeContext = createContext<AgeContextType>({
  isVerified: true,
  confirmAge: () => {},
  resetAge: () => {},
});

export function useAge() {
  return useContext(AgeContext);
}

export function AgeProvider({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean>(true);

  useEffect(() => {
    try {
      const verified = localStorage.getItem(KHOA) === "1";
      setIsVerified(verified);
      if (verified) {
        document.documentElement.classList.add("du-tuoi");
      }
    } catch {
      setIsVerified(true);
    }
  }, []);

  const resetAge = () => {
    try {
      localStorage.removeItem(KHOA);
      document.documentElement.classList.remove("du-tuoi");
    } catch {}
    setIsVerified(false);
  };

  const confirmAge = () => {
    try {
      localStorage.setItem(KHOA, "1");
      document.documentElement.classList.add("du-tuoi");
    } catch {}
    setIsVerified(true);
  };

  // Lắng nghe phím tắt Alt + R để Reset trạng thái xác minh độ tuổi (phục vụ thuyết trình / demo)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "r" || e.key === "R")) {
        e.preventDefault();
        resetAge();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AgeContext.Provider value={{ isVerified, confirmAge, resetAge }}>
      {children}
    </AgeContext.Provider>
  );
}
