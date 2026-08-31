"use client";

import { createContext, useContext, useEffect, useState } from "react";

const KHOA = "mien-du-tuoi";

interface AgeContextType {
  isVerified: boolean;
  confirmAge: () => void;
}

const AgeContext = createContext<AgeContextType>({
  isVerified: true,
  confirmAge: () => {},
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

  const confirmAge = () => {
    try {
      localStorage.setItem(KHOA, "1");
      document.documentElement.classList.add("du-tuoi");
    } catch {}
    setIsVerified(true);
  };

  return (
    <AgeContext.Provider value={{ isVerified, confirmAge }}>
      {children}
    </AgeContext.Provider>
  );
}
