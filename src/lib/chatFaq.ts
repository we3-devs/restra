import type { Language } from "@/lib/translations";

export interface FaqEntry {
  id: string;
  keywords: string[];
  answer: Record<Language, string>;
}

export const faqEntries: FaqEntry[] = [
  {
    id: "what-is-restra",
    keywords: ["what is restra", "about restra", "what does restra do", "restra kind of"],
    answer: {
      en: "Restra is an all-in-one restaurant management system that handles orders, billing, inventory, QR ordering, and staff roles in one platform — no more juggling five disconnected tools.",
      ne: "Restra एउटा सम्पूर्ण रेस्टुरेन्ट व्यवस्थापन प्रणाली हो जसले अर्डर, बिलिङ, इन्भेन्टरी, QR अर्डरिङ र स्टाफ भूमिका एउटै प्लेटफर्ममा सम्हाल्छ।",
    },
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "plan", "subscription"],
    answer: {
      en: "Check out our Pricing section on this page for plan details. You can also click \"Talk to Us\" to get a custom quote for your restaurant.",
      ne: "योजनाहरूको विवरणको लागि यस पृष्ठको मूल्य निर्धारण खण्ड हेर्नुहोस्। आफ्नो रेस्टुरेन्टको लागि अनुकूलित मूल्यको लागि \"हामीसँग कुरा गर्नुहोस्\" मा क्लिक गर्नुहोस्।",
    },
  },
  {
    id: "qr-ordering",
    keywords: ["qr", "qr code", "scan", "digital menu", "order from table"],
    answer: {
      en: "With Restra's QR ordering, customers scan a code at their table to view the menu and place orders directly — no app download needed, and orders go straight to the kitchen.",
      ne: "Restra को QR अर्डरिङमा, ग्राहकहरूले टेबलमा राखिएको कोड स्क्यान गरेर मेनु हेर्न र सिधै अर्डर गर्न सक्छन् — कुनै एप डाउनलोड आवश्यक छैन।",
    },
  },
  {
    id: "inventory",
    keywords: ["inventory", "stock", "ingredients", "supply"],
    answer: {
      en: "Restra tracks inventory in real time, alerts you on low stock, and helps you avoid running out of key ingredients during service.",
      ne: "Restra ले इन्भेन्टरीलाई वास्तविक समयमा ट्र्याक गर्छ, कम स्टकको बारेमा सचेत गराउँछ, र सेवाको समयमा मुख्य सामग्री सकिनबाट जोगाउँछ।",
    },
  },
  {
    id: "roles-staff",
    keywords: ["role", "staff", "permission", "employee", "waiter", "admin access"],
    answer: {
      en: "Restra supports role-based access — owners, managers, waiters, and kitchen staff each get permissions suited to their job, keeping operations controlled and secure.",
      ne: "Restra ले भूमिका-आधारित पहुँच समर्थन गर्छ — मालिक, प्रबन्धक, वेटर र भान्साका स्टाफलाई आ-आफ्नो कामअनुसार अनुमति दिइन्छ।",
    },
  },
  {
    id: "billing",
    keywords: ["bill", "billing", "invoice", "payment", "receipt"],
    answer: {
      en: "Billing in Restra is automatic and accurate — orders flow straight into invoices, cutting out manual calculation errors.",
      ne: "Restra मा बिलिङ स्वचालित र सही हुन्छ — अर्डरहरू सिधै बिलमा जान्छन्, जसले म्यानुअल गणनाको गल्ती हटाउँछ।",
    },
  },
  {
    id: "reports",
    keywords: ["report", "analytics", "insight", "dashboard", "sales data"],
    answer: {
      en: "Restra gives you real operational insight through reports and a live dashboard — sales, inventory, and staff performance at a glance.",
      ne: "Restra ले रिपोर्ट र लाइभ ड्यासबोर्ड मार्फत वास्तविक सञ्चालन जानकारी दिन्छ — बिक्री, इन्भेन्टरी र स्टाफको प्रदर्शन एकैचोटि।",
    },
  },
  {
    id: "contact",
    keywords: ["contact", "email", "support", "help", "reach", "talk to", "demo"],
    answer: {
      en: "You can reach us via the \"Talk to Us\" button on this page, or email we3.techinnovation@gmail.com and we'll get back to you.",
      ne: "तपाईं यस पृष्ठको \"हामीसँग कुरा गर्नुहोस्\" बटन मार्फत, वा we3.techinnovation@gmail.com मा इमेल गरेर हामीलाई सम्पर्क गर्न सक्नुहुन्छ।",
    },
  },
  {
    id: "team",
    keywords: ["team", "who made", "founder", "developer", "creator"],
    answer: {
      en: "Restra is built by a small core team — Sujan Katuwal, Prashanta Guragain, and Ujwal Khatiwada. You can see them in the \"Meet the Team\" section on this page.",
      ne: "Restra एउटा सानो मुख्य टिमले बनाएको हो — सुजन कटुवाल, प्रशान्त गुरागाईं र उज्वल खतिवडा। तपाईं यस पृष्ठको \"टिमसँग परिचय\" खण्डमा तिनीहरूलाई हेर्न सक्नुहुन्छ।",
    },
  },
  {
    id: "free-trial",
    keywords: ["free", "trial", "free of cost", "free version", "no cost"],
    answer: {
      en: "Restra offers a free trial so you can explore the features before committing to a paid plan. Click \"Talk to Us\" to get started with a trial.",
      ne: "Restra ले भुक्तानी योजना अपनाउनु अघि सुविधाहरू अन्वेषण गर्न निःशुल्क ट्रायल प्रदान गर्छ। ट्रायल सुरु गर्न \"हामीसँग कुरा गर्नुहोस्\" मा क्लिक गर्नुहोस्।",
    },
  },
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "namaste"],
    answer: {
      en: "Hey there! 👋 I'm the Restra assistant. Ask me about pricing, features, QR ordering, inventory, or how to get in touch.",
      ne: "नमस्ते! 👋 म Restra सहायक हुँ। मूल्य, सुविधाहरू, QR अर्डरिङ, इन्भेन्टरी, वा सम्पर्कको बारेमा सोध्नुहोस्।",
    },
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "dhanyabad"],
    answer: {
      en: "You're welcome! Let me know if you have any other questions about Restra.",
      ne: "स्वागत छ! Restra को बारेमा अरू कुनै प्रश्न भए सोध्नुहोस्।",
    },
  },
];

export const fallbackAnswer: Record<Language, string> = {
  en: "I'm not totally sure about that one — try asking about pricing, features, QR ordering, inventory, staff roles, or how to contact us. You can also click \"Talk to Us\" for a direct answer from the team.",
  ne: "मलाई त्यसको बारेमा पूर्ण निश्चित छैन — मूल्य, सुविधाहरू, QR अर्डरिङ, इन्भेन्टरी, स्टाफ भूमिका, वा सम्पर्कको बारेमा सोध्ने प्रयास गर्नुहोस्।",
};

export function findAnswer(query: string, lang: Language): string {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return fallbackAnswer[lang];

  let best: { entry: FaqEntry; score: number } | null = null;
  for (const entry of faqEntries) {
    for (const kw of entry.keywords) {
      if (normalized.includes(kw)) {
        const score = kw.length;
        if (!best || score > best.score) {
          best = { entry, score };
        }
      }
    }
  }

  return best ? best.entry.answer[lang] : fallbackAnswer[lang];
}
