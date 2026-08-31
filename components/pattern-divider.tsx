import { cn } from "@/lib/utils";

/**
 * Dải hoa văn Bài Chòi ngăn giữa các section — trong Figma cao 94px ở khung 1446px.
 * Lặp ngang theo tỉ lệ gốc nên không bị méo trên màn rộng.
 */
export function PatternDivider({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      className={cn(
        "h-[clamp(2.25rem,6.5vw,5.875rem)] w-full bg-repeat-x",
        className
      )}
      style={{
        backgroundImage: "url(/images/pattern-tile.webp)",
        backgroundSize: "auto 100%",
      }}
    />
  );
}
