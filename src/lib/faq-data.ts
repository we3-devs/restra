import type { TranslationKey } from "@/lib/translations";

export type FaqPageSection = {
  heading: string;
  items: { question: string; answer: string }[];
};

type TranslatedFaq = {
  question: TranslationKey;
  answer: TranslationKey;
};

export const pricingFaqs: TranslatedFaq[] = [
  { question: "pfaq.trial.q", answer: "pfaq.trial.a" },
  { question: "pfaq.hidden.q", answer: "pfaq.hidden.a" },
  { question: "pfaq.switch.q", answer: "pfaq.switch.a" },
  { question: "pfaq.training.q", answer: "pfaq.training.a" },
  { question: "pfaq.placeholder.q", answer: "pfaq.placeholder.a" },
];

export const contactFaqs: TranslatedFaq[] = [
  { question: "cfaq.setup.q", answer: "cfaq.setup.a" },
  { question: "cfaq.trial.q", answer: "cfaq.trial.a" },
  { question: "cfaq.devices.q", answer: "cfaq.devices.a" },
  { question: "cfaq.lang.q", answer: "cfaq.lang.a" },
  { question: "cfaq.support.q", answer: "cfaq.support.a" },
];

export const faqPageSections: FaqPageSection[] = [
  {
    heading: "A. About Restra",
    items: [
      {
        question: "What is Restra?",
        answer: "Restra is a restaurant management system built for restaurants, cafés, cloud kitchens, and other food businesses in Nepal. It brings POS, billing, QR ordering, inventory, order tracking, staff permissions, and reports into one connected platform so your team works from the same data instead of five separate tools.",
      },
      {
        question: "What is restaurant management software?",
        answer: "Restaurant management software is a digital system that helps you run day-to-day operations from one place. It usually covers taking orders, billing, stock, staff access, table activity, and reporting. Restra is built as a complete restaurant management system for the Nepal market, not a patchwork of disconnected apps.",
      },
      {
        question: "How can Restra help me manage my restaurant?",
        answer: "Restra helps by giving your front of house, kitchen, and management one shared system. Orders go straight to the kitchen, bills are generated from what was served, stock updates with sales, and managers can see the day's activity without pulling numbers from different places. The result is less manual work and a clearer view of your restaurant.",
      },
      {
        question: "Can Restra help me manage multiple areas of my restaurant from one system?",
        answer: "Yes. Restra is designed as a digital restaurant management system where connected modules share the same data. A single order can touch ordering, billing, kitchen preparation, inventory, and reports without re-entering it in separate tools. If you have specific setup needs, the team can walk through what is practical for your outlet.",
      },
      {
        question: "Why should I choose Restra instead of managing my restaurant manually?",
        answer: "Manual systems usually rely on paper, separate apps, memory, and re-typed numbers. Restra reduces that by keeping orders, billing, stock, and reporting connected. That makes it easier to avoid missed orders, billing mistakes, and blind spots in stock or performance. It is not about replacing good service — it is about removing a lot of behind-the-scenes friction.",
      },
      {
        question: "Can Restra help improve restaurant efficiency?",
        answer: "In practical terms, Restra can improve efficiency by reducing manual re-entry, sending orders directly to the kitchen, generating bills faster, and giving managers clearer visibility during service. It will not run your restaurant for you, but it can remove a lot of the small delays and errors that slow a busy shift down.",
      },
    ],
  },
  {
    heading: "B. POS, Billing & Orders",
    items: [
      {
        question: "Does Restra provide POS and billing?",
        answer: "Yes. Restra includes a restaurant POS workflow for taking sales at the counter, plus billing that turns served orders into accurate bills. That means dine-in, takeaway, and delivery orders can be handled from one point of sale, and the bill matches what was actually ordered and served.",
      },
      {
        question: "Can Restra manage restaurant orders?",
        answer: "Yes. Restra has restaurant order management for dine-in, takeaway, and delivery orders. Orders are tracked from placement through kitchen preparation to completion, so staff can see where each order is without asking around. QR orders and counter orders feed into the same order flow.",
      },
      {
        question: "Can Restra help reduce billing and order errors?",
        answer: "It can help. Because orders, billing, and stock are connected, Restra reduces the kind of mistakes that come from paper tickets, re-typed orders, and manual totals. Accurate billing comes from the same order data the kitchen and front of house are working from, which lowers the chance of mismatched bills and KOT errors during a busy service.",
      },
      {
        question: "How does Restra help reduce manual work?",
        answer: "Restra reduces manual work by connecting the steps that are usually done separately. Once an order is placed, it can move through the kitchen display, billing, and inventory without being copied by hand. Staff spend less time on paper, re-entry, and checking whether numbers match, and more time on serving guests.",
      },
    ],
  },
  {
    heading: "C. QR Ordering & Digital Menu",
    items: [
      {
        question: "Can customers order food using a QR code?",
        answer: "Yes. Restra includes a QR ordering system for restaurants. Customers scan a QR code at the table, open the digital menu on their phone, place an order, and see order status updates. They do not need to download an app, and the order goes straight into your restaurant's workflow.",
      },
      {
        question: "How does Restra's QR ordering work?",
        answer: "A customer scans the QR code at their table, browses the digital menu on their phone, selects items, and submits the order. The order is then sent into the restaurant's order flow and moves through preparation to completion. It is a simple QR food ordering flow for guests, and it saves front-of-house staff from taking every order by hand.",
      },
    ],
  },
  {
    heading: "D. Inventory & Menu Management",
    items: [
      {
        question: "Does Restra provide inventory management?",
        answer: "Yes. Restra includes restaurant inventory management so you can track ingredients, see what is running low, and keep stock movement connected to sales. That helps you notice shortages before service and gives you a clearer picture of what is moving through the kitchen.",
      },
      {
        question: "Can I manage my restaurant menu with Restra?",
        answer: "Yes. Restra supports restaurant menu management as part of the system, so changes to items, prices, and availability can stay connected with ordering and billing. That is useful when your menu changes often, because you update it once and the rest of the restaurant works from the same version.",
      },
    ],
  },
  {
    heading: "E. Staff & Restaurant Operations",
    items: [
      {
        question: "Can I manage my restaurant staff with Restra?",
        answer: "Yes. Restra helps you manage staff accounts and control what they can do. You can give administrators, managers, and workers different levels of access so each person sees the tools their role actually needs.",
      },
      {
        question: "Can I create different staff roles and permissions?",
        answer: "Yes. Restra supports staff roles and permissions for restaurant teams. Typically that means admins have broader control, managers can run day-to-day operations, and workers get access only to the parts of the system they need. This is part of Restra's role-based access, which helps with accountability and reduces accidental access to settings.",
      },
      {
        question: "Is Restra easy to use for restaurant staff?",
        answer: "Restra is built with a busy restaurant in mind, so the interface tries to stay simple enough for staff to learn during a shift. Big touch targets, clear order statuses, and a straightforward flow are the idea. Ease of use will also depend on your setup and training, but it is meant to be learnable on the floor.",
      },
      {
        question: "Can Restra be used for cafes and hotels?",
        answer: "Yes. Restra is suitable for cafes, restaurants, cloud kitchens, hotels with food service, and other food businesses. The same core modules can be used for a small café, a dine-in restaurant, or a takeaway operation with different needs.",
      },
    ],
  },
  {
    heading: "F. Reports & Analytics",
    items: [
      {
        question: "Can Restra track sales and restaurant performance?",
        answer: "Yes. Restra tracks restaurant sales and gives managers a live view of what is happening during service, including orders, stock alerts, and overall activity. It works as a cloud-based dashboard for the people running the floor and the kitchen.",
      },
      {
        question: "Does Restra provide reports and analytics?",
        answer: "Yes. Restra provides sales reports and analytics so managers can review sales, order activity, inventory movement, and general performance. The goal is to help you make decisions based on the day's data instead of guessing from memory.",
      },
    ],
  },
  {
    heading: "G. Pricing, Setup & Support",
    items: [
      {
        question: "Is Restra suitable for small restaurants?",
        answer: "Yes. Restra is suitable for small restaurants, cafés, and single-outlet food businesses because it bundles the basics you actually need — POS, billing, QR ordering, inventory, orders, and reports — without forcing a complicated setup. You can start with the parts that matter most to a smaller operation and grow into the rest.",
      },
      {
        question: "Is Restra suitable for large restaurants?",
        answer: "Yes. Restra can also work for larger restaurants and multi-area food operations where many orders come in across the service. That is where having one restaurant management system for orders, kitchen flow, billing, stock, and reports matters most. For larger or multi-outlet setups, the team can discuss what is practical for your scale.",
      },
      {
        question: "Can I access Restra from different devices?",
        answer: "Yes. Restra can be used on devices with a browser. An existing laptop or desktop at the counter, phones for the kitchen, and customers ordering from their own phones all fit the same system. That makes it practical to use across the devices you already have.",
      },
      {
        question: "Does Restra require special hardware?",
        answer: "No special hardware is required to get started. Restra is designed to work on the devices you already have, so you can use it on a laptop, desktop, tablet, or phone with a browser. The team can help you decide what works best for your setup, but there is no need to buy a locked-in hardware kit just to begin.",
      },
      {
        question: "How much does Restra cost?",
        answer: "Restra pricing is shown on the pricing page, and the team can also put together a quote that fits your restaurant. If you want a custom plan for more than one outlet or a specific setup, contact Restra directly and the team will talk through what makes sense for your business.",
      },
      {
        question: "How can I get started with Restra?",
        answer: "The easiest way is to contact the Restra team through the contact page or the Get Started button on the site. From there, you can request a demo or trial, share some details about your restaurant, and the team can help with setup. Setup usually includes importing your menu, setting up tables and staff accounts, and walking your team through their first orders.",
      },
      {
        question: "Do you provide support after setup?",
        answer: "Yes. Restra provides support after setup. The exact level depends on the plan, but every plan includes support from the team, and higher plans include priority support. If you have a question during service or while setting something up, the team is there to help.",
      },
    ],
  },
  {
    heading: "H. Security & Accessibility",
    items: [
      {
        question: "Is my restaurant data secure?",
        answer: "Restra treats restaurant data as sensitive, including orders, billing, stock, and staff information. As a cloud-based platform, it is built with data access control in mind through role-based permissions and connected records. If you have specific security or data-handling questions, it is best to ask the team directly so they can answer accurately for your setup.",
      },
      {
        question: "Is Restra available for restaurants in Nepal?",
        answer: "Yes. Restra is restaurant software in Nepal for restaurants, cafés, cloud kitchens, and other food businesses. It is positioned for the Nepal restaurant market, including the local needs around POS software for restaurants in Nepal, QR ordering, billing, and staff management.",
      },
      {
        question: "How can I contact Restra?",
        answer: "You can contact Restra through the contact page, where you can use the contact form, WhatsApp, or email. The team usually replies within one business day and can answer questions about features, pricing, setup, and support. If you want a faster response, WhatsApp is often the quickest way to reach them.",
      },
    ],
  },
];

/** Flattened list used for the page FAQ and JSON-LD, generated from the same source. */
export const faqPageItems = faqPageSections.flatMap((section) => section.items);
