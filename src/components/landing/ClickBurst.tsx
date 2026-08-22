"use client";

import { useEffect } from "react";

export default function ClickBurst() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button:not([disabled]), a.btn-cta, [role='button']:not([disabled])"
      ) as HTMLElement | null;
      if (!target) return;

      if (getComputedStyle(target).position === "static") {
        target.style.position = "relative";
      }
      target.style.overflow = "hidden";

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.8;
      const burst = document.createElement("span");
      burst.className = "btn-burst-el";
      burst.style.width = `${size}px`;
      burst.style.height = `${size}px`;
      burst.style.left = `${e.clientX - rect.left - size / 2}px`;
      burst.style.top = `${e.clientY - rect.top - size / 2}px`;
      target.appendChild(burst);
      burst.addEventListener("animationend", () => burst.remove());
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
