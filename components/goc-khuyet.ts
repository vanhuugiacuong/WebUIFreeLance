import type { CSSProperties } from "react";

/**
 * Bốn góc bị "cắn" bởi một cung tròn tâm đặt ngay đỉnh góc — hình dạng lặp lại
 * khắp thiết kế Miên (banner, khung ảnh, khối vùng nguyên liệu).
 * Đo từ ảnh gốc: mọi điểm trên biên góc đều cách đỉnh 33.0–33.5px ở khổ 1000px.
 */
export function gocKhuyet(banKinh: string): CSSProperties {
  const g = (viTri: string) =>
    `radial-gradient(circle ${banKinh} at ${viTri}, transparent 99%, #000 100%)`;
  const lop = [g("0 0"), g("100% 0"), g("0 100%"), g("100% 100%")].join(",");
  return {
    WebkitMaskImage: lop,
    WebkitMaskComposite: "source-in",
    maskImage: lop,
    maskComposite: "intersect",
  } as CSSProperties;
}
