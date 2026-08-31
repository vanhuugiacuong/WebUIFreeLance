"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAge } from "@/components/providers/age-provider";

/**
 * Cổng xác minh độ tuổi:
 * - Lần đầu người dùng truy cập (chưa có localStorage "mien-du-tuoi"), cổng xác minh sẽ hiển thị.
 * - Khi người dùng bấm "Đúng", hệ thống sẽ ghi nhớ vào localStorage, ẩn cổng và kích hoạt toàn bộ animation trang chủ.
 */
export function CongTuoi() {
  const { isVerified, confirmAge } = useAge();
  const [nho, setNho] = useState(true);
  const [tuChoi, setTuChoi] = useState(false);

  const hienThi = !isVerified;

  useEffect(() => {
    if (!hienThi) return;
    const truoc = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = truoc;
    };
  }, [hienThi]);

  const dongY = () => {
    confirmAge();
  };

  return (
    <AnimatePresence>
      {hienThi && (
        <motion.div
          id="cong-tuoi-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="Xác minh độ tuổi"
          className="fixed inset-0 z-[100] overflow-y-auto bg-cam text-kem"
        >
          <div className="flex min-h-full flex-col items-center justify-between gap-10 px-6 py-[clamp(2.5rem,6vh,4.5rem)] text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/logo-footer.webp"
                alt="Rượu Miên — Vị men nồng"
                width={148}
                height={81}
                priority
                className="h-[72px] w-auto drop-shadow-md"
              />
            </motion.div>

            {tuChoi ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex max-w-[640px] flex-col items-center gap-8"
              >
                <h1 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-tight">
                  Hẹn gặp lại khi bạn đủ tuổi
                </h1>
                <p className="text-lg font-medium leading-relaxed">
                  Rất tiếc, bạn cần đủ tuổi sử dụng đồ uống có cồn theo quy định pháp
                  luật hiện hành để truy cập Miên.
                </p>
                <button
                  type="button"
                  onClick={() => setTuChoi(false)}
                  className="h-[52px] min-w-[160px] rounded-full bg-kem px-8 text-base font-semibold text-cam transition-opacity hover:opacity-90 cursor-pointer shadow-md"
                >
                  Quay lại
                </button>
              </motion.div>
            ) : (
              <div className="flex max-w-[820px] flex-col items-center gap-10">
                <h1 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[1.1] overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Bạn đã đủ tuổi
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    thưởng thức rượu chưa?
                  </motion.span>
                </h1>

                <motion.label
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    checked={nho}
                    onChange={(e) => setNho(e.target.checked)}
                    className="peer sr-only"
                  />
                  <span className="grid size-6 place-items-center rounded-md bg-kem text-cam ring-1 ring-kem">
                    {nho && <Check className="size-4" strokeWidth={3} />}
                  </span>
                  <span className="text-base text-kem/90">Ghi nhớ trên thiết bị này</span>
                </motion.label>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="flex flex-wrap items-center justify-center gap-5"
                >
                  <button
                    type="button"
                    onClick={dongY}
                    className="h-[52px] min-w-[160px] rounded-full bg-kem px-8 text-base font-semibold text-cam transition-opacity hover:opacity-90 cursor-pointer shadow-md"
                  >
                    Đúng
                  </button>
                  <button
                    type="button"
                    onClick={() => setTuChoi(true)}
                    className="h-[52px] min-w-[160px] rounded-full border border-kem bg-transparent px-8 text-base font-semibold text-kem transition-colors hover:bg-kem hover:text-cam cursor-pointer"
                  >
                    Không
                  </button>
                </motion.div>
              </div>
            )}

            <p className="max-w-[880px] text-sm leading-relaxed text-kem/80">
              Miên khuyến khích thưởng thức có trách nhiệm. Khi tiếp tục truy cập, bạn
              xác nhận mình đáp ứng độ tuổi sử dụng đồ uống có cồn theo quy định pháp
              luật hiện hành và đồng ý với Chính sách quyền riêng tư &amp; Cookie của
              Miên.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
