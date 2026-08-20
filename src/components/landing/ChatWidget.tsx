"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { findAnswer } from "@/lib/chatFaq";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

const suggestedQuestions: Record<"en" | "ne", string[]> = {
  en: [
    "Tell me more about Restra",
    "Price to start this software",
    "Can I use this software free of cost?",
    "How does QR ordering work?",
  ],
  ne: [
    "Restra को बारेमा थप बताउनुहोस्",
    "यो सफ्टवेयर सुरु गर्न मूल्य कति हो?",
    "के म यो सफ्टवेयर निःशुल्क प्रयोग गर्न सक्छु?",
    "QR अर्डरिङ कसरी काम गर्छ?",
  ],
};

const greetingText: Record<"en" | "ne", string> = {
  en: "🙏 Namaste!! Welcome to Restra Chat. Have a question? Ask away!",
  ne: "🙏 नमस्ते!! Restra Chat मा यहाँलाइ स्वागत छ। कुनै प्रश्न छ? सोध्नुहोस्!",
};

export default function ChatWidget() {
  const { language } = useI18n();
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text:
        language === "ne"
          ? "🙏 नमस्ते!! Restra Chat मा यहाँलाइ स्वागत छ। म तपाईंलाई कसरी सहयोग गर्न सक्छु?"
          : "🙏 Namaste!! Welcome to Restra Chat. How can I help you today?",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex h-[min(28rem,calc(100vh-6rem))] w-[calc(100vw-2rem)] max-w-88 flex-col overflow-hidden rounded-2xl border border-white/8 bg-restra-card shadow-2xl sm:w-88"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-restra-text">
                  Restra Assistant
                </p>
                <p className="text-xs text-restra-text-secondary">
                  {language === "ne" ? "सामान्य प्रश्नहरूको जवाफ" : "Answers to common questions"}
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
                placeholder={language === "ne" ? "प्रश्न टाइप गर्नुहोस्..." : "Type a question..."}
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
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && teaserVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[calc(100vw-5rem)] rounded-2xl rounded-br-sm border border-white/8 bg-restra-card px-4 py-3 pr-7 text-sm leading-relaxed text-restra-text shadow-xl sm:max-w-64"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
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
              {greetingText[language]}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileTap={{ scale: 0.92 }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-restra-yellow text-restra-bg shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
