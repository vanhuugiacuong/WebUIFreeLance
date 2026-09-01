"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail } from "lucide-react";

import { cn, noWidow } from "@/lib/utils";

/** Ô nhập bo tròn nền kem, icon tuỳ chọn. */
function O({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <span className="relative block">
      {Icon && (
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-xam"
          strokeWidth={1.75}
        />
      )}
      <input
        {...props}
        className={cn(
          "h-[55px] w-full rounded-full bg-kem text-base text-den placeholder:text-xam-nhat focus:outline-none focus:ring-2 focus:ring-den/20",
          Icon ? "pl-12 pr-5" : "px-6"
        )}
      />
    </span>
  );
}

/**
 * Dải cam trang Liên hệ: ảnh vuông tràn mép trái hoà vào nền cam, bên phải là
 * form đăng ký nhận tin (Họ tên + Email + nút Gửi). Chỉ dựng giao diện.
 */
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function DaiLienHe() {
  const [daGui, setDaGui] = useState(false);

  return (
    <section className="bg-cam text-kem relative">
      <div className="grid lg:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image
            src="/images/lien-he/band.webp"
            alt="Ghé Miên giao"
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-cam lg:block" />
        </div>

        <div className="flex flex-col justify-center gap-7 px-6 py-[clamp(2.5rem,5vw,4.5rem)] lg:pl-4 lg:pr-[clamp(2rem,6vw,6rem)]">
          <div>
            <h1 className="font-display text-d3 font-semibold leading-tight">
              Có chuyện, ghé Miên giao?
            </h1>
            <p className="mt-3 max-w-[612px] text-lg font-medium leading-relaxed">
              {noWidow("Đăng ký để không bỏ lỡ những men vị, trải nghiệm và cuộc hẹn mới nhất từ Miên.", 3)}
            </p>
          </div>

          <form
            className="flex flex-col items-center gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setDaGui(true);
              setTimeout(() => setDaGui(false), 4000);
            }}
          >
            <div className="grid w-full max-w-[620px] gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-lg font-medium">
                  Họ tên<span aria-hidden>*</span>
                </span>
                <O required icon={User} placeholder="Nguyễn Minh A" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-lg font-medium">
                  Email<span aria-hidden>*</span>
                </span>
                <O required type="email" icon={Mail} placeholder="nguyenminha@gmail.com" />
              </label>
            </div>
            <button
              type="submit"
              className="h-[55px] w-full max-w-[294px] rounded-full bg-kem text-base font-semibold text-cam transition-opacity hover:opacity-90 cursor-pointer shadow-md"
            >
              {daGui ? "Đã gửi thông tin" : "Gửi"}
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {daGui && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="toast toast-end toast-bottom z-[100] p-6"
          >
            <div className="alert alert-success bg-kem text-cam font-medium shadow-xl border border-cam/20 flex items-center gap-3 px-5 py-3.5 rounded-2xl">
              <CheckCircle2 className="size-6 text-cam" />
              <span>Cảm ơn bạn! Thông tin đã được gửi đến Miên.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
