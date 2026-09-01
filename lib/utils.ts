import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Chuyển đổi các khoảng trắng ở các từ cuối chuỗi văn bản thành non-breaking space (\u00A0)
 * để tránh hiện tượng chữ mồ côi (rớt 1 từ rải rác xuống dòng mới).
 */
export function noWidow(text: string, wordsToTie: number = 2): string {
  if (!text || typeof text !== "string") return text;
  const trimmed = text.trim();
  const parts = trimmed.split(/\s+/);
  if (parts.length <= wordsToTie) return text;

  const lead = parts.slice(0, parts.length - wordsToTie).join(" ");
  const tail = parts.slice(parts.length - wordsToTie).join("\u00A0");
  return `${lead} ${tail}`;
}

