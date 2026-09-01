import { cn } from "@/lib/utils";

/**
 * Dải hoa văn thổ cẩm ngăn giữa các section.
 */
export function PatternDivider({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      className={cn(
        "h-[clamp(2.5rem,6vw,5.5rem)] w-full bg-repeat-x",
        className
      )}
      style={{
        backgroundImage: `url('${encodeURI("/svg/khung nguyên liệu (2).svg")}')`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    />
  );
}
