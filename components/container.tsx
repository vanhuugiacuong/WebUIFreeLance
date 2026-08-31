import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  /** Lưới hẹp 956px dùng cho "Về chúng tôi" và "Vùng nguyên liệu". */
  narrow?: boolean;
};

/**
 * Figma dựng trên khung 1446px với hai lưới: 1152px (lề 147) và 956px (lề 245).
 * `w-[calc(100%-3rem)]` giữ đúng lề 24px trên mobile mà vẫn khoá đúng bề rộng ở desktop.
 */
export function Container({ className, narrow, ...props }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-[calc(100%-3rem)]",
        narrow ? "max-w-narrow" : "max-w-main",
        className
      )}
      {...props}
    />
  );
}
