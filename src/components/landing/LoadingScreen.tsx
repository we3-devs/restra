"use client";

import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_TIME = 350;
const BLINK_DELAY = 1200;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldBlink, setShouldBlink] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let hideTimer: number | undefined;

    const hide = () => {
      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_TIME - (performance.now() - startedAt),
      );

      hideTimer = window.setTimeout(() => setIsVisible(false), remainingTime);
    };

    const blinkTimer = window.setTimeout(
      () => setShouldBlink(true),
      BLINK_DELAY,
    );

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    return () => {
      if (blinkTimer) window.clearTimeout(blinkTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      window.removeEventListener("load", hide);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen" role="status" aria-label="Loading RESTRA">
      <img
        src="/logo.svg"
        alt="RESTRA"
        className={`loading-screen__logo${shouldBlink ? " loading-screen__logo--blink" : ""}`}
      />
    </div>
  );
}
