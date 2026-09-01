"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn, noWidow } from "@/lib/utils";

/** Icon User dạng solid màu cam */
function IconUserSolid({ className }: { className?: string }) {
  return (
    <svg className={cn("fill-cam text-cam", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

/** Icon Mail dạng solid màu cam */
function IconMailSolid({ className }: { className?: string }) {
  return (
    <svg className={cn("fill-cam text-cam", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/** Ô input bo tròn nền kem */
function O({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ComponentType<{
    className?: string;
  }>;
}) {
  return (
    <span className="relative block group">
      {Icon && (
        <Icon
          className="
            pointer-events-none
            absolute
            left-4.5
            top-1/2
            size-5
            -translate-y-1/2
            fill-cam
            text-cam
            transition-colors
          "
        />
      )}

      <input
        {...props}
        className={cn(
          "h-[48px] sm:h-[50px] w-full rounded-full bg-[#fff5ea]",
          "text-base text-den font-medium font-body",
          "placeholder:text-[#c4b5a5] placeholder:font-normal",
          "transition-all duration-300",
          "shadow-xs",
          "focus:outline-none",
          "focus:ring-2 focus:ring-trang/50",
          "focus:bg-trang",
          "focus:shadow-md",
          Icon ? "pl-12 pr-5" : "px-6",
        )}
      />
    </span>
  );
}

/**
 * Dải liên hệ
 *
 * Layout desktop:
 * ┌──────────────────────┬──────────────────────────────────┐
 * │                      │                                  │
 * │       IMAGE          │             FORM                 │
 * │       40%            │             60%                  │
 * │                      │                                  │
 * └──────────────────────┴──────────────────────────────────┘
 *
 * Image luôn bám sát mép trái của section.
 */
export function DaiLienHe() {
  const [daGui, setDaGui] = useState(false);

  return (
    <section className="w-full overflow-hidden text-trang">
      <div
        className="
          relative
          flex
          w-full
          flex-col
          lg:min-h-[540px]
          xl:min-h-[580px]
          lg:flex-row
        "
      >
        {/* =====================================================
            LEFT — IMAGE
            ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            shrink-0
            overflow-hidden
            lg:w-[40%]
            xl:w-[40%]
          "
        >
          <img
            src="/images/lien-he/band.webp"
            alt="Ghé Miên giao"
            className="w-full h-full object-cover object-center scale-[1.04] origin-left -ml-[2px]"
          />

          {/* =================================================
              FADE IMAGE → CAM
              
              Chỉ đặt overlay ở mép phải image.
              Không tạo thêm một column.
          ================================================= */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              hidden
              w-[80px]
              bg-gradient-to-l
              from-cam
              via-cam/40
              to-transparent
              lg:block
              xl:w-[110px]
            "
          />
        </motion.div>

        {/* =====================================================
            RIGHT — CONTENT / FORM
            ===================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            justify-center
            bg-cam
            px-6
            py-12

            sm:px-10
            sm:py-14

            lg:px-12
            lg:py-16

            xl:px-16
            xl:py-20
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <h1
              className="
                font-display
                text-2xl
                font-bold
                uppercase
                leading-tight
                tracking-wider
                text-trang

                sm:text-3xl

                lg:text-[38px]
              "
            >
              CÓ CHUYỆN, GHÉ MIÊN GIAO?
            </h1>

            <p
              className="
                mt-3
                max-w-[612px]
                text-base
                font-normal
                leading-relaxed
                text-trang/95

                sm:mt-4
                sm:text-lg
              "
            >
              {noWidow(
                "Đăng ký để không bỏ lỡ những men vị, trải nghiệm và cuộc hẹn mới nhất từ Miên.",
                3,
              )}
            </p>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              flex
              w-full
              max-w-[640px]
              flex-col
              items-start
              gap-6
            "
            onSubmit={(e) => {
              e.preventDefault();

              setDaGui(true);

              setTimeout(() => {
                setDaGui(false);
              }, 4000);
            }}
          >
            {/* INPUTS */}

            <div className="grid w-full gap-y-5 gap-x-8 sm:gap-x-12 lg:gap-x-14 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span
                  className="
                    text-base
                    font-medium
                    font-body
                    tracking-wide
                    text-trang

                    sm:text-lg
                  "
                >
                  Họ tên
                  <span className="ml-0.5 text-trang/80" aria-hidden>
                    *
                  </span>
                </span>

                <O required icon={IconUserSolid} placeholder="Nguyễn Minh A" />
              </label>

              <label className="flex flex-col gap-2">
                <span
                  className="
                    text-base
                    font-medium
                    font-body
                    tracking-wide
                    text-trang

                    sm:text-lg
                  "
                >
                  Email
                  <span className="ml-0.5 text-trang/80" aria-hidden>
                    *
                  </span>
                </span>

                <O
                  required
                  type="email"
                  icon={IconMailSolid}
                  placeholder="nguyenminha@gmail.com"
                />
              </label>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
                mt-4
                h-[48px]
                w-full
                max-w-[240px]
                sm:max-w-[260px]
                self-center
                cursor-pointer
                rounded-full
                bg-[#fff5ea]
                text-base
                font-medium
                font-body
                text-cam
                shadow-md
                outline-none
                transition-all
                duration-300
                hover:scale-105
                hover:bg-trang
                hover:shadow-xl
                active:scale-95
              "
            >
              {daGui ? "Đã gửi thông tin" : "Gửi"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* =======================================================
          SUCCESS TOAST
      ======================================================= */}

      <AnimatePresence>
        {daGui && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-6
              right-6
              z-[100]
              p-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-cam/20
                bg-[#fbf4ea]
                px-6
                py-4
                text-base
                font-semibold
                text-cam
                shadow-2xl
              "
            >
              <CheckCircle2 className="size-6 shrink-0 text-cam" />

              <span>Cảm ơn bạn! Thông tin đã được gửi đến Miên.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
