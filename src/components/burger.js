import React, { useState, useEffect, useCallback } from "react";

import * as styles from "./burger.module.css";

function isDarkColor(color) {
  const match = color.match(/\d+/g);
  if (!match || match.length < 3) return false;
  const [r, g, b] = match.map(Number);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.55;
}

function hasDarkGradient(bgImage) {
  // Extract first rgb/rgba color from a gradient string
  const match = bgImage.match(/rgba?\([^)]+\)/);
  if (match) return isDarkColor(match[0]);
  // Check for hex colors
  const hex = bgImage.match(/#([0-9a-f]{3,8})/i);
  if (hex) {
    const h = hex[1];
    const r = parseInt(h.length > 4 ? h.slice(0, 2) : h[0] + h[0], 16);
    const g = parseInt(h.length > 4 ? h.slice(2, 4) : h[1] + h[1], 16);
    const b = parseInt(h.length > 4 ? h.slice(4, 6) : h[2] + h[2], 16);
    return isDarkColor(`rgb(${r},${g},${b})`);
  }
  return false;
}

export default ({ open, setOpen }) => {
  const [onDark, setOnDark] = useState(true);

  const checkBackground = useCallback(() => {
    if (typeof window === "undefined") return;
    const x = window.innerWidth - 48;
    const y = 48;
    const els = document.elementsFromPoint(x, y);
    for (const el of els) {
      if (el === document.documentElement || el === document.body) continue;
      const style = getComputedStyle(el);
      const bg = style.backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
        // Skip near-transparent backgrounds (e.g. rgba(255,255,255,0.04) on cards)
        const alphaMatch = bg.match(/,\s*([\d.]+)\s*\)/);
        if (alphaMatch && parseFloat(alphaMatch[1]) < 0.15) continue;
        setOnDark(isDarkColor(bg));
        return;
      }
      const bgImg = style.backgroundImage;
      if (bgImg && bgImg !== "none" && bgImg.includes("gradient")) {
        setOnDark(hasDarkGradient(bgImg));
        return;
      }
    }
    setOnDark(false);
  }, []);

  useEffect(() => {
    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    return () => window.removeEventListener("scroll", checkBackground);
  }, [checkBackground]);

  const color = open || onDark ? "white" : "#1a1a2e";

  return (
    <button
      type="button"
      className={styles.styledBurger}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div
        className={open ? styles.openedUpperLine : styles.upperLine}
        style={{ backgroundColor: color }}
      />
      <div
        className={open ? styles.openedLowerLine : styles.lowerLine}
        style={{ backgroundColor: color }}
      />
    </button>
  );
};
