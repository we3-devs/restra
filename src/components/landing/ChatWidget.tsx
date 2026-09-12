"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { findAnswer } from "@/lib/chatFaq";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

const suggestedQuestions: Record<"en", string[]> = {
  en: [
    "Tell me more about Restra",
    "Price to start this software",
    "Can I use this software free of cost?",
    "How does QR ordering work?",
  ],
};

const greetingText: Record<"en", string> = {
  en: " Namaste!! Welcome to Restra Chat. Have a question? Ask away!",
};

export default function ChatWidget() {
  const { language } = useI18n();
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(true);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Namaste!! Welcome to Restra Chat. How can I help you today?",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    let idleTimer: number | undefined;

    const updateTeaserVisibility = () => {
      setTeaserVisible(false);
      window.clearTimeout(idleTimer);

      if (teaserDismissed) return;

      idleTimer = window.setTimeout(() => {
        const footer = document.querySelector("footer");
        const footerBounds = footer?.getBoundingClientRect();
        const isFooterVisible = Boolean(
          footerBounds && footerBounds.top < window.innerHeight && footerBounds.bottom > 0,
        );

        if (!open && !isFooterVisible) {
          setTeaserVisible(true);
        }
      }, 1000);
    };

    window.addEventListener("scroll", updateTeaserVisibility, { passive: true });
    updateTeaserVisibility();
    return () => {
      window.removeEventListener("scroll", updateTeaserVisibility);
      window.clearTimeout(idleTimer);
    };
  }, [open, teaserDismissed]);

  const sendText = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: `${Date.now()}-u`, role: "user", text: trimmed };
    const botMsg: ChatMessage = {
      id: `${Date.now()}-b`,
      role: "bot",
      text: findAnswer(trimmed, language),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleSend = () => sendText(input);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-row items-end gap-3 md:bottom-6 md:right-6">
      <>
        {open && (
          <div
            className="flex h-[min(32rem,calc(100vh-6rem))] w-[calc(100vw-2rem)] max-w-80 flex-col overflow-hidden rounded-2xl border border-white/8 bg-restra-card shadow-2xl sm:w-80"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-restra-text">
                  Restra Assistant
                </p>
                <p className="text-xs text-restra-text-secondary">
                  Answers to common questions
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-restra-text-secondary transition-colors hover:bg-white/[0.06] hover:text-restra-text"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-restra-yellow text-restra-bg"
                        : "bg-restra-surface text-restra-text-secondary"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-start gap-2 pt-1">
                {suggestedQuestions[language].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendText(q)}
                    className="rounded-full border border-restra-yellow/50 px-3 py-1.5 text-left text-xs font-medium text-restra-yellow transition-colors hover:bg-restra-yellow/10"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-white/[0.06] bg-restra-surface px-3 py-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question..."
                className="flex-1 rounded-lg border border-white/[0.08] bg-restra-card px-3 py-2 text-sm text-restra-text placeholder:text-restra-text-secondary/70 focus:border-restra-yellow/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-restra-yellow text-restra-bg transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </>

      <>
        {!open && teaserVisible && (
          <div
            className="relative flex max-w-[calc(100vw-5rem)] flex-col rounded-2xl rounded-br-sm border border-white/8 bg-restra-card px-3 py-2.5 pr-6 text-xs leading-relaxed text-restra-text shadow-xl sm:max-w-56"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setTeaserDismissed(true);
                setTeaserVisible(false);
              }}
              aria-label="Dismiss greeting"
              className="absolute right-1.5 top-1.5 rounded-md p-1 text-restra-text-secondary transition-colors hover:bg-white/6 hover:text-restra-text"
            >
              <X className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-left"
            >
              {greetingText.en}
            </button>
            <button
              type="button"
              onClick={() => {
                setTeaserDismissed(true);
                setTeaserVisible(false);
              }}
              className="mt-1 self-end text-[10px] font-medium text-restra-text-secondary underline-offset-2 hover:text-restra-text hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-restra-yellow text-restra-bg shadow-lg sm:h-12 sm:w-12"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
