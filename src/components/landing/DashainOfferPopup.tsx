"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { dashainOffer, isDashainOfferActive } from "@/lib/offers";
import { ClaimButtons } from "./DashainOffer";

const POPUP_SEEN_KEY = `restra:${dashainOffer.id}:popup-seen`;
const POPUP_DELAY_MS = 2500;

export function DashainOfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isDashainOfferActive()) return;
    try {
      if (sessionStorage.getItem(POPUP_SEEN_KEY)) return;
    } catch {
      // Storage blocked: still show once for this page view.
    }
    const timer = window.setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        sessionStorage.setItem(POPUP_SEEN_KEY, "1");
      } catch {
        // Ignore: the popup simply may show again next visit.
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] w-[calc(100%-2rem)] max-w-[26rem] gap-0 overflow-y-auto border-[#F5C518]/25 bg-[#100E0A] p-0 text-white sm:max-w-[26rem]"
      >
        <DialogTitle className="sr-only">
          {dashainOffer.name}: {dashainOffer.discount} off — {dashainOffer.offerPrice}
        </DialogTitle>
        <DialogDescription className="sr-only">{dashainOffer.image.alt}</DialogDescription>
        <button
          type="button"
          onClick={() => handleOpenChange(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]"
          aria-label="Close offer"
        >
          <X className="h-4 w-4" />
        </button>
        <Image
          src={dashainOffer.image.src}
          alt=""
          width={dashainOffer.image.width}
          height={dashainOffer.image.height}
          sizes="26rem"
          className="h-auto w-full"
        />
        <div className="p-4">
          <ClaimButtons className="sm:flex-col" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
