/** Genex's standard selection fill, derived from the accent supplied by the host. */
import {channels,fromOklch,oklch,type Rgb} from "../vendor/genex-color.ts";
const LIGHTNESS_BISECTIONS=24;
export function luminance(color: string): number {
  const [r, g, b] = channels(color).map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)) as Rgb;
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}
export function contrastRatio(a: string, b: string): number {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
/** The same hue and chroma at the lightest step where white text still reaches `ratio`. */
function underWhite(color: string, ratio: number): string {
  const [L, C, h] = oklch(color);
  if (contrastRatio(color, "#ffffff") >= ratio) return color;
  let lo = 0,
    hi = L;
  for (let i = 0; i < LIGHTNESS_BISECTIONS; i++) {
    const mid = (lo + hi) / 2;
    if (contrastRatio(fromOklch(mid, C, h), "#ffffff") >= ratio) lo = mid;
    else hi = mid;
  }
  return fromOklch(lo, C, h);
}

export const selectionFill=(accent:string):string=>underWhite(accent,5);
