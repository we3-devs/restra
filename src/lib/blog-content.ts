import { createClient } from "@supabase/supabase-js";
import { format } from "date-fns";
import { siteConfig } from "./site-config";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | {
      type: "richParagraph";
      segments: { text: string; href?: string }[];
    }
  | { type: "heading"; text: string; level?: 2 | 3; id?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string }
  | { type: "toc"; items: { label: string; href: string }[] }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      caption: string;
    }
  | {
      type: "faq";
      items: { question: string; answer: string }[];
    }
  | { type: "imagePlaceholder"; alt: string; label?: string }
  | { type: "externalLink"; label: string; href: string }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Used verbatim for the meta description and card excerpt. */
  description: string;
  category: string;
  tags: string[];
  authorName: string;
  authorRole?: string;
  authorSocials?: { label: string; href: string }[];
  /** ISO date, e.g. "2026-08-20" or a full timestamp. */
  publishedAt: string;
  updatedAt?: string;
  readMinutes: number;
  content: BlogBlock[];
  /**
   * Optional hero media. Any absolute http(s) URL works — including a Supabase
   * Storage public URL. When omitted the page falls back to a branded panel.
   */
  imageUrl?: string;
  /** Optional mp4/webm hero video (e.g. from Supabase Storage). */
  videoUrl?: string;
  imageAlt?: string;
  /** Links to other blog slugs or to "/features/<slug>" feature pages. */
  relatedSlugs?: string[];
  /** Optional feature page slug shown as a closing call-to-action. */
  featureCta?: string;
};

/** Shape of a row in the Supabase `posts` table (see docs/blog-supabase.md). */
type BlogPostRow = {
  slug: string;
  title: string;
  description: string;
  category: string | null;
  author_name: string | null;
  published_at: string;
  updated_at: string | null;
  read_minutes: number | null;
  tags: string[] | null;
  content: BlogBlock[] | null;
  image_url: string | null;
  video_url: string | null;
  related_slugs: string[] | null;
};

/* ------------------------------------------------------------------ */
/*  Static seed posts (used when Supabase is not configured)           */
/* ------------------------------------------------------------------ */

export const seedPosts: BlogPost[] = [
  {
    slug: "top-10-best-restaurant-management-software-nepal",
    title: "Top 10 Best Restaurant Management Software (RMS) in Nepal",
    description:
      "Compare 10 restaurant management software and POS platforms for Nepalese restaurants, with features, limitations, pricing guidance, and practical buying advice.",
    category: "Restaurant Software",
    tags: [
      "restaurant management software Nepal",
      "restaurant POS software Nepal",
      "restaurant inventory management",
      "restaurant ordering software Nepal",
    ],
    authorName: "Prashanta Guragain",
    authorRole: "Author and product team member at RESTRA",
    authorSocials: [
      { label: "Facebook", href: "https://www.facebook.com/prashanta.93/" },
      { label: "GitHub", href: "https://github.com/prashantaguragain" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/prashanta-guragain-0a24bb335/" },
      { label: "Portfolio", href: "https://www.prashantaguragain.com.np/" },
    ],
    publishedAt: "2026-09-06",
    readMinutes: 14,
    imageUrl: "/features/analytics-reports.png",
    imageAlt: "Restaurant sales analytics dashboard for comparing restaurant management software",
    relatedSlugs: [
      "restaurant-management-system-features-explained",
      "restaurant-inventory-low-stock-alerts",
      "/features/pos",
      "/features/qr-ordering",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Restaurants in Nepal are moving from notebooks, spreadsheets, and standalone billing machines to connected digital systems. The reason is practical: a busy restaurant needs the same order to be visible at the counter, in the kitchen, on the bill, and in the manager's report. Manual processes make that difficult. A handwritten order can be misread, stock counts can fall behind sales, and end-of-day reporting can take longer than the service itself.",
      },
      {
        type: "paragraph",
        text:
          "Restaurant management software (RMS), often called restaurant POS software, brings those daily tasks into one workflow. Depending on the product, it can handle billing, dine-in and takeaway orders, tables, QR ordering, inventory, staff access, analytics, and customer records. The best choice depends on your restaurant's size, service style, internet setup, budget, and need for local support. This comparison is an editorial guide, not a claim of market share or an independently audited ranking. Confirm current Nepal availability, tax requirements, payment integrations, and pricing with each provider before buying.",
      },
      {
        type: "toc",
        items: [
          { label: "What is Restaurant Management Software?", href: "#what-is-rms" },
          { label: "How we selected these platforms", href: "#selection-criteria" },
          { label: "Top 10 RMS in Nepal", href: "#top-10-rms" },
          { label: "Comparison table", href: "#comparison" },
          { label: "Which software is right for you?", href: "#which-rms" },
          { label: "Frequently asked questions", href: "#rms-faq" },
        ],
      },
      { type: "heading", text: "What is Restaurant Management Software (RMS)?", level: 2, id: "what-is-rms" },
      {
        type: "paragraph",
        text:
          "An RMS is the operating system for a restaurant. It is a collection of connected tools that helps staff take an order, send it to the right preparation area, create a bill, record the sale, and give the owner useful information afterwards. You do not need to be technical to use one: staff typically work from a POS screen, tablet, phone, or browser, while the system keeps the underlying records connected.",
      },
      {
        type: "list",
        items: [
          "POS and billing: take orders, apply the right items or discounts, and produce bills and receipts.",
          "Order management: track dine-in, takeaway, delivery, and kitchen status in one place.",
          "Table management: see occupied, available, and active tables and connect them to orders.",
          "QR ordering: let diners open a digital menu and place an order from their phone where the workflow supports it.",
          "Inventory management: record stock, monitor ingredients, and identify low-stock items before service is affected.",
          "Staff and roles: give owners, managers, cashiers, and servers only the access they need.",
          "Analytics and reports: review sales, order volume, popular items, stock movement, and staff activity.",
          "Customer management: retain customer details or order history when the product supports it and the restaurant has a clear privacy process.",
          "Multi-device and cloud access: use more than one terminal or check operations remotely, subject to the provider's connectivity model.",
        ],
      },
      {
        type: "richParagraph",
        segments: [
          { text: "Before comparing tools, it helps to understand the workflow you want to improve. Our guide to " },
          { text: "restaurant management system features", href: "/blog/restaurant-management-system-features-explained" },
          { text: " explains how POS, kitchen workflows, inventory, staff permissions, and reporting fit together." },
        ],
      },
      { type: "heading", text: "How We Selected These RMS Platforms", level: 2, id: "selection-criteria" },
      {
        type: "paragraph",
        text:
          "The platforms below are legitimate products with published restaurant, POS, ERP, or ordering capabilities and are relevant to a Nepalese restaurant owner evaluating software. They are not ranked from verified sales data. We compared the areas that matter most in a real purchase: core features, ease of use, POS and billing, inventory, reports, QR or digital ordering, staff management, scalability, value, suitability for Nepal, and customer support. Availability and integrations can differ by country, plan, reseller, and payment provider, so treat the list as a shortlist for demos rather than a substitute for checking the contract.",
      },
      { type: "heading", text: "Top 10 Best RMS in Nepal", level: 2, id: "top-10-rms" },
      {
        type: "paragraph",
        text:
          "There is no universal winner. A large hotel restaurant may need enterprise controls and integrations, while a small cafe may value a quick setup and a simple bill more. The order below reflects a practical editorial comparison for restaurant owners, with limitations included so the list remains useful even when a platform is not the right fit.",
      },
      { type: "heading", text: "1. RestroX", level: 3 },
      { type: "imagePlaceholder", alt: "RestroX restaurant POS and management software image placeholder", label: "Add a RestroX product image here" },
      { type: "externalLink", label: "Visit the RestroX website", href: "https://www.restrox.com/np" },
      { type: "list", items: ["Best for: Restaurants and cafes looking for a Nepal-focused POS and operations platform.", "Key features: Order and table management, invoice billing, inventory, finance, staff permissions, delivery menus, QR orders, and reporting, according to its Nepal product pages.", "Main advantages: Restaurant-specific workflows and support for common front-of-house and back-office tasks.", "Limitations: Confirm current plan limits, payment and tax setup, offline behavior, onboarding, and support terms before purchase.", "Ideal restaurant type: Independent restaurants, cafes, and growing outlets.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: RestroX is a practical Nepal-focused option to include in a live demo shortlist. Test the billing flow, stock records, device support, and reporting with your own menu before deciding." },
      { type: "heading", text: "2. NRestro", level: 3 },
      { type: "imagePlaceholder", alt: "NRestro restaurant management software image placeholder", label: "Add an NRestro product image here" },
      { type: "externalLink", label: "Visit the NRestro website", href: "https://www.nrestro.com/" },
      { type: "list", items: ["Best for: Restaurants wanting a broad restaurant management platform with POS and back-office tools.", "Key features: POS ordering, KOT, Fonepay QR, digital menus, inventory, accounting, and staff attendance, as described on its official website.", "Main advantages: Covers several operational areas in one product and is presented for Nepalese restaurants.", "Limitations: Confirm the exact accounting, QR payment, attendance, hardware, and support coverage for your outlet.", "Ideal restaurant type: Restaurants that want connected billing, kitchen, stock, and staff workflows.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: NRestro is worth comparing when you want more than a basic billing screen. Ask for a demonstration using your actual KOT flow and daily closing process." },
      { type: "heading", text: "3. RestroHub", level: 3 },
      { type: "imagePlaceholder", alt: "RestroHub restaurant management software image placeholder", label: "Add a RestroHub product image here" },
      { type: "externalLink", label: "Visit the RestroHub website", href: "https://restrohub.com.np/" },
      { type: "list", items: ["Best for: Restaurants looking for a Nepal-focused all-in-one platform with operational and analytics features.", "Key features: POS, QR-code menu ordering, inventory, tables, reservations, attendance, analytics, and an AI assistant, based on the provider's published feature information.", "Main advantages: Brings front-of-house, staff, and reporting functions into one restaurant-oriented system.", "Limitations: Verify which features are included in each plan, how the AI features work in practice, and what support and data controls are provided.", "Ideal restaurant type: Cafes, restaurants, and operators managing more than one outlet.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: RestroHub may suit owners who want a wide feature set and centralized visibility. A hands-on trial is important because the usefulness of a broad platform depends on staff adoption." },
      { type: "heading", text: "4. Restra", level: 3 },
      { type: "imagePlaceholder", alt: "Restra restaurant management software image placeholder", label: "Add a Restra product image here" },
      { type: "externalLink", label: "Explore the Restra restaurant management system", href: "/restaurant-management-system" },
      { type: "paragraph", text: "Restra is designed as an all-in-one restaurant management solution for restaurants that want to manage daily operations from one platform. Its capabilities include POS, restaurant billing, QR ordering, order status management, inventory management, staff roles and permissions, analytics and reports, multi-device access, and restaurant operations management. Staff attendance and working-hour tracking are available where enabled in the product workflow." },
      { type: "list", items: ["Best for: Restaurants, cafes, and cloud kitchens looking for a connected daily operations platform.", "Key features: POS, billing, order flows, QR ordering, order status tracking, inventory, staff roles, analytics, reports, and multi-device access.", "Main advantages: Focuses on the restaurant workflow and lets owners evaluate billing, ordering, stock, staff, and reporting together.", "Limitations: Confirm the exact plan, device support, offline behavior, integrations, attendance scope, and onboarding process before purchase.", "Ideal restaurant type: Nepalese restaurants and cafes evaluating an all-in-one restaurant management system.", "Pricing: See the current pricing page or contact the Restra team for an outlet-specific quote."] },
      { type: "richParagraph", segments: [{ text: "Our take: Restra is a sensible shortlist candidate when you want one system for restaurant operations rather than separate billing, ordering, and stock tools. Explore the " }, { text: "Restra restaurant management system", href: "/restaurant-management-system" }, { text: " and compare the workflow with your staff's daily routine. Looking for an all-in-one RMS for your restaurant? Explore Restra to see how it can simplify billing, ordering, inventory, staff management, and restaurant operations." }] },
      { type: "heading", text: "5. RestroMandu", level: 3 },
      { type: "imagePlaceholder", alt: "RestroMandu restaurant ERP and POS image placeholder", label: "Add a RestroMandu product image here" },
      { type: "externalLink", label: "Visit the RestroMandu website", href: "https://restromandu.com/" },
      { type: "list", items: ["Best for: Restaurants and hospitality businesses seeking an ERP-style restaurant platform.", "Key features: Billing, kitchen workflows, inventory, procurement, HR, finance, and administration, with cloud or on-premise options described by the provider.", "Main advantages: Broad operational coverage for businesses that need more than front-counter billing.", "Limitations: ERP-style implementation may require more planning, training, and configuration than a simple POS.", "Ideal restaurant type: Growing restaurants, QSRs, and restaurant groups with wider back-office needs.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: RestroMandu deserves consideration when finance, procurement, HR, and restaurant operations need to connect. Ask for a phased rollout plan and a clear implementation cost." },
      { type: "heading", text: "6. Yummy POS", level: 3 },
      { type: "imagePlaceholder", alt: "Yummy POS restaurant software image placeholder", label: "Add a Yummy POS product image here" },
      { type: "externalLink", label: "Visit the Yummy POS website", href: "https://www.yummyever.com/" },
      { type: "list", items: ["Best for: Restaurants wanting a fast restaurant POS with kitchen and stock visibility.", "Key features: POS, smart inventory, real-time analytics, and kitchen synchronization, according to the provider's published product information.", "Main advantages: A focused feature set around ordering, kitchen coordination, and operational visibility.", "Limitations: Confirm table management, QR ordering, staff permissions, offline access, support, and plan limits.", "Ideal restaurant type: Cafes, quick-service restaurants, and independent restaurants.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: Yummy POS is worth a closer look if fast service and kitchen coordination are your main priorities. Validate the stock and reporting workflows before expanding beyond one outlet." },
      { type: "heading", text: "7. KingSoft Tech", level: 3 },
      { type: "imagePlaceholder", alt: "KingSoft Tech restaurant POS and ERP image placeholder", label: "Add a KingSoft Tech product image here" },
      { type: "externalLink", label: "Visit the KingSoft Tech website", href: "https://kingsoft.com.np/" },
      { type: "list", items: ["Best for: Restaurants, bakeries, marts, and cafes wanting POS plus broader business management.", "Key features: Touchscreen POS, ERP functions, inventory alerts, and business insights, based on the provider's published product information.", "Main advantages: Can be relevant to food businesses that also need retail or wider operational controls.", "Limitations: Confirm which restaurant-specific features, integrations, hardware, and support are included for your use case.", "Ideal restaurant type: Food businesses with restaurant and retail-style operations.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: KingSoft Tech may be a useful option when restaurant operations sit alongside bakery, mart, or other retail workflows. Compare the restaurant experience separately from the general ERP feature list." },
      { type: "heading", text: "8. HimalayanOS", level: 3 },
      { type: "imagePlaceholder", alt: "HimalayanOS restaurant POS software image placeholder", label: "Add a HimalayanOS product image here" },
      { type: "externalLink", label: "Visit the HimalayanOS website", href: "https://www.himalayanos.com/" },
      { type: "list", items: ["Best for: Restaurants wanting POS, digital ordering, and multi-branch operating features.", "Key features: QR ordering, kitchen display, waiter apps, inventory, loyalty, and multi-branch reporting, according to the provider's published product information.", "Main advantages: Covers both customer ordering and internal restaurant workflows.", "Limitations: Confirm current availability, plan pricing, payment connections, reporting depth, and support response times.", "Ideal restaurant type: Dine-in restaurants and groups with digital ordering needs.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: HimalayanOS is worth evaluating when QR ordering and multi-branch visibility are important. Test how customer orders move to the kitchen and how managers review each branch." },
      { type: "heading", text: "9. Restronp", level: 3 },
      { type: "imagePlaceholder", alt: "Restronp restaurant management software image placeholder", label: "Add a Restronp product image here" },
      { type: "externalLink", label: "Visit the Restronp website", href: "https://www.restronp.com/" },
      { type: "list", items: ["Best for: Restaurants, cafes, bars, and food businesses seeking a Nepal-focused POS system.", "Key features: Billing, orders, inventory, tables, staff controls, sales reports, and cash-drawer workflows described in its public product information.", "Main advantages: Focuses on the practical needs of food businesses and restaurant checkout.", "Limitations: Confirm QR ordering, multi-device access, offline operation, integrations, and the current support model.", "Ideal restaurant type: Independent restaurants and cafes digitizing daily sales operations.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: Restronp can be included in a comparison for owners who want local restaurant POS workflows. Ask to see a complete busy-hour process from order entry to reconciliation." },
      { type: "heading", text: "10. SajhaServe", level: 3 },
      { type: "imagePlaceholder", alt: "SajhaServe restaurant POS software image placeholder", label: "Add a SajhaServe product image here" },
      { type: "externalLink", label: "Visit the SajhaServe restaurant POS page", href: "https://sajhaserve.com/restaurant-pos-nepal" },
      { type: "list", items: ["Best for: Restaurants looking for a Nepal-based restaurant POS and billing provider to evaluate.", "Key features: Restaurant POS and billing capabilities described on its restaurant software page; confirm the current module list directly with the provider.", "Main advantages: A local provider may be easier to discuss for Nepal-specific onboarding and support needs.", "Limitations: Publicly available feature and pricing details should be confirmed before relying on it for inventory, QR ordering, analytics, or multi-branch operations.", "Ideal restaurant type: Small and medium-sized restaurants comparing local providers.", "Pricing: Contact the provider for current pricing."] },
      { type: "paragraph", text: "Our take: SajhaServe is best treated as a provider to contact and evaluate rather than a product to select from a feature checklist alone. Request a live demo, written scope, and support terms for your restaurant." },
      { type: "heading", text: "Comparison Table", level: 2 },
      {
        type: "table",
        caption: "High-level editorial comparison. Confirm exact features, plan limits, and Nepal availability with each provider.",
        headers: ["RMS", "POS / Billing", "QR Ordering", "Inventory", "Staff Management", "Analytics", "Best For"],
        rows: [
          ["RestroX", "Yes", "Yes", "Yes", "Yes", "Yes", "Nepal-focused POS"],
          ["NRestro", "Yes", "Yes", "Yes", "Yes", "Yes", "Connected restaurant operations"],
          ["RestroHub", "Yes", "Yes", "Yes", "Yes", "Yes", "All-in-one restaurant platform"],
          ["Restra", "Yes", "Yes", "Yes", "Yes", "Yes", "All-in-one restaurant operations"],
          ["RestroMandu", "Yes", "Varies", "Yes", "Yes", "Yes", "Restaurant ERP"],
          ["Yummy POS", "Yes", "Varies", "Yes", "Yes", "Yes", "Fast service and kitchen sync"],
          ["KingSoft Tech", "Yes", "Varies", "Yes", "Yes", "Yes", "Food and retail businesses"],
          ["HimalayanOS", "Yes", "Yes", "Yes", "Yes", "Yes", "QR and multi-branch workflows"],
          ["Restronp", "Yes", "Varies", "Yes", "Yes", "Yes", "Local restaurant POS"],
          ["SajhaServe", "Yes", "Confirm", "Confirm", "Confirm", "Confirm", "Local provider evaluation"],
        ],
      },
      { type: "heading", text: "Which Restaurant Management Software Is Best for Your Restaurant?", level: 2, id: "which-rms" },
      {
        type: "paragraph",
        text:
          "The best RMS in Nepal is the one your team can use consistently and your business can support financially. A long feature list is less valuable than accurate bills, clear orders, dependable stock records, useful reports, and help when something goes wrong. Ask every provider to demonstrate your real menu, tax and receipt needs, table layout, staff roles, and a typical busy-hour order before you decide.",
      },
      {
        type: "list",
        items: [
          "Small restaurant or cafe: Start with a simple POS and billing flow that staff can learn quickly. Restra, RestroX, Yummy POS, or another locally supported option may be worth comparing.",
          "Medium-sized restaurant: Look for connected order status, table management, inventory, staff permissions, and reports. Compare Restra, NRestro, RestroHub, and other Nepal-focused platforms through a live demo.",
          "Large restaurant: Prioritize implementation, integrations, roles, auditability, uptime, support, and multi-terminal workflows. RestroMandu, RestroHub, NRestro, and Restra may belong in the evaluation.",
          "Multi-branch restaurant: Ask about branch-level reporting, shared menus, permissions, stock transfers, and consolidated views before choosing a system.",
          "Restaurant focused on QR ordering: Test the customer menu, order routing, table identification, order status, and fallback process. Compare Restra and platforms with QR or online ordering support.",
          "Restaurant looking for inventory control: Test ingredient-level tracking, stock adjustments, purchase records, low-stock alerts, and reports against your real menu. Restra, RestroX, NRestro, and RestroMandu are candidates to investigate.",
          "Restaurant looking for an affordable all-in-one system: Compare the total cost of hardware, setup, subscription, support, add-ons, and training. A focused system such as Restra may be easier to evaluate than assembling several disconnected tools.",
        ],
      },
      {
        type: "richParagraph",
        segments: [
          { text: "Use the " },
          { text: "Restra pricing page", href: "/pricing" },
          { text: " to understand the public offer, browse the " },
          { text: "restaurant features", href: "/features" },
          { text: ", or " },
          { text: "contact the Restra team", href: "/contact" },
          { text: " with your outlet size and workflow so you can ask focused questions." },
        ],
      },
      { type: "heading", text: "Frequently Asked Questions", level: 2 },
      {
        type: "faq",
        items: [
          { question: "What is restaurant management software?", answer: "Restaurant management software connects daily restaurant work such as POS billing, orders, tables, kitchen status, inventory, staff access, customer records, and reports. The exact modules differ by provider." },
          { question: "What is the best RMS in Nepal?", answer: "There is no single best RMS for every restaurant in Nepal. The right choice depends on outlet size, service style, local billing and payment needs, internet reliability, inventory complexity, budget, and support. Use this list as a shortlist and test each finalist with your real workflow." },
          { question: "How much does restaurant management software cost in Nepal?", answer: "Pricing varies by provider, number of users or outlets, hardware, setup, support, payment processing, and add-ons. Some tools publish free or entry plans, while others require a quote. Ask for the total first-year cost, not only the monthly subscription." },
          { question: "What features should a restaurant POS system have?", answer: "At minimum, evaluate order entry, accurate billing, menu and tax setup, receipts, order status, user permissions, sales reports, and a reliable backup or recovery process. Restaurants with more complex operations should also test tables, QR ordering, inventory, kitchen workflows, and multi-branch reporting." },
          { question: "Is RMS better than traditional billing software?", answer: "An RMS can be more useful than standalone billing when the restaurant needs connected orders, inventory, staff roles, kitchen status, and analytics. A simple billing tool may still be enough for a small operation with limited service complexity." },
          { question: "Can restaurant management software manage inventory?", answer: "Many RMS products can track stock, purchases, adjustments, and low-stock levels. Ingredient-level or recipe-based tracking is not universal, so ask the provider to demonstrate the exact ingredients and dishes your restaurant sells." },
          { question: "Can restaurants use QR ordering with RMS?", answer: "Yes, some RMS products include QR or digital ordering. Confirm whether the QR menu sends orders directly to the POS or kitchen, identifies the correct table, updates order status, and supports a staff fallback when a customer needs help." },
          { question: "Is Restra suitable for small restaurants?", answer: "Restra is designed for restaurants, cafes, and cloud kitchens, including teams evaluating an all-in-one workflow. A small restaurant should still compare the available plan, setup, devices, support, and the features it will actually use before deciding." },
        ],
      },
      { type: "cta", text: "Looking for an all-in-one RMS for your restaurant? Explore Restra to see how it can simplify billing, ordering, inventory, staff management, and restaurant operations.", href: "/restaurant-management-system", label: "Explore Restra" },
    ],
  },
  {
    slug: "qr-ordering-for-restaurants-in-nepal",
    title: "How QR Ordering Works for Restaurants in Nepal",
    description:
      "QR code ordering lets customers scan a code at the table, open a digital menu, and order from their phone. Here is how it works and why restaurants in Nepal are adopting it.",
    category: "QR Ordering",
    tags: ["qr ordering", "digital menu", "restaurant technology"],
    authorName: "RESTRA Team",
    authorRole: "We-3: tech & innovation",
    publishedAt: "2026-08-24",
    readMinutes: 4,
    imageUrl: "/features/qr-menu.png",
    imageAlt: "RESTRA QR menu on a phone",
    featureCta: "qr-ordering",
    relatedSlugs: ["/features/order-management", "/features/table-management"],
    content: [
      {
        type: "paragraph",
        text:
          "QR ordering replaces the paper menu with a code on the table. The customer scans it, the digital menu opens on their own phone, and they can browse, choose, and place an order without waiting for a waiter.",
      },
      { type: "heading", text: "The customer flow", level: 2 },
      {
        type: "list",
        items: [
          "Customer scans the QR code printed or displayed at the table",
          "The digital menu opens in the phone browser — no app download",
          "The customer selects items and submits the order",
          "The order is sent straight into the restaurant's system",
          "The customer sees the order status update in real time",
        ],
      },
      { type: "heading", text: "What changes for the restaurant", level: 2 },
      {
        type: "paragraph",
        text:
          "The biggest change is that orders stop living on paper. A digital order goes to the kitchen the moment it is placed, and the same order data later feeds billing and inventory, so nothing has to be re-entered by hand.",
      },
      {
        type: "paragraph",
        text:
          "For restaurants in Nepal, where busy service often mixes dine-in, takeaway, and delivery, QR ordering removes one more point where an order can be misheard, miswritten, or lost between the floor and the kitchen.",
      },
      { type: "quote", text: "The menu is always up to date, and the order is never lost in translation." },
      { type: "heading", text: "Is QR ordering right for every restaurant?", level: 3 },
      {
        type: "paragraph",
        text:
          "QR ordering works best for restaurants that already want customers to browse and order digitally — typically dine-in restaurants and cafés with table service. Staff can still take orders the traditional way; the QR flow is an addition, not a replacement.",
      },
    ],
  },
  {
    slug: "restaurant-inventory-low-stock-alerts",
    title: "Restaurant Inventory Management: Stop Running Out of Stock",
    description:
      "Low-stock alerts, ingredient tracking, and a clear view of what is moving in and out of the kitchen — how connected inventory management protects restaurant service.",
    category: "Inventory",
    tags: ["inventory", "low stock", "ingredients"],
    authorName: "RESTRA Team",
    authorRole: "We-3: tech & innovation",
    publishedAt: "2026-08-18",
    readMinutes: 5,
    imageUrl: "/features/analytics-reports.png",
    imageAlt: "RESTRA inventory and reports dashboard",
    featureCta: "inventory",
    relatedSlugs: ["/features/order-management", "/features/analytics"],
    content: [
      {
        type: "paragraph",
        text:
          "The most expensive problem in a restaurant kitchen is not the price of ingredients — it is discovering, in the middle of service, that an ingredient is finished. Inventory management exists to make that moment rare.",
      },
      { type: "heading", text: "Track ingredients, not just boxes", level: 2 },
      {
        type: "paragraph",
        text:
          "A simple stock count tells you what is on the shelf today. Ingredient-level tracking tells you what is moving: which dishes use each ingredient, how much remains, and what will run out soon. That is the difference between reacting to shortages and seeing them coming.",
      },
      { type: "heading", text: "Low-stock alerts before service is affected", level: 2 },
      {
        type: "paragraph",
        text:
          "Set a minimum level for each ingredient. When stock drops below it, the restaurant gets an alert while there is still time to order more — instead of learning about the problem from a waiter at the pass.",
      },
      {
        type: "list",
        items: [
          "Monitor every tracked ingredient from one screen",
          "See current stock against each item's minimum",
          "Log new inventory items as they arrive",
          "Review what has moved in and out of the kitchen",
        ],
      },
      { type: "heading", text: "Keep inventory connected to orders", level: 3 },
      {
        type: "paragraph",
        text:
          "Inventory is most useful when it lives in the same system as sales. When an order is billed, the ingredients behind it can be reflected in stock records automatically — giving the manager a true picture instead of a spreadsheet that slowly drifts from reality.",
      },
      { type: "quote", text: "Know your stock before it runs out — not after." },
    ],
  },
  {
    slug: "restaurant-management-system-features-explained",
    title: "What a Restaurant Management System Should Include",
    description:
      "From POS and billing to QR ordering, kitchen workflows, staff permissions, and analytics — the modules a restaurant management system needs to run as one connected platform.",
    category: "RESTRA",
    tags: ["restaurant management system", "POS", "restaurant software"],
    authorName: "RESTRA Team",
    authorRole: "We-3: tech & innovation",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-30",
    readMinutes: 7,
    imageUrl: "/features/manage-orders.png",
    imageAlt: "RESTRA order management dashboard",
    featureCta: "order-management",
    relatedSlugs: [
      "/features/pos",
      "/features/billing",
      "/features/staff-permissions",
      "/features/kitchen-display-system",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Most restaurants do not start out with a single software problem. They start with several: a billing tool that does not know about the kitchen, orders written on paper, inventory kept in a notebook, and no clear view of the day. A restaurant management system exists to pull those pieces into one connected platform.",
      },
      { type: "heading", text: "POS and billing", level: 2 },
      {
        type: "paragraph",
        text:
          "Sales and billing are the heart of the operation. A restaurant POS handles orders and transactions at the counter, and connected billing turns served orders into accurate bills without manual totals.",
      },
      { type: "heading", text: "Ordering — including QR", level: 2 },
      {
        type: "paragraph",
        text:
          "Customers order at the table, at the counter, or remotely. A complete system tracks every dine-in, takeaway, and delivery order in real time, and QR ordering lets customers place their own orders from a digital menu on their phone.",
      },
      { type: "heading", text: "Kitchen workflows", level: 2 },
      {
        type: "paragraph",
        text:
          "Orders only matter if the kitchen acts on them. A kitchen display workflow routes orders directly to the kitchen and tracks them as confirmed, preparing, ready, and served — so front of house and kitchen share one status.",
      },
      { type: "heading", text: "Inventory", level: 2 },
      {
        type: "paragraph",
        text:
          "Connected inventory management monitors ingredients, flags low stock, and reflects what actually sold — protecting service from running out mid-shift.",
      },
      { type: "heading", text: "Staff permissions", level: 2 },
      {
        type: "paragraph",
        text:
          "Not every employee should see every setting. Role-based access gives owners and managers control while letting floor staff work with exactly the tools they need.",
      },
      { type: "heading", text: "Analytics and reporting", level: 2 },
      {
        type: "paragraph",
        text:
          "At the end of service, the same data that ran the floor becomes the day's report: sales, orders, stock movement, and activity, in one view managers can actually use.",
      },
      {
        type: "quote",
        text:
          "A restaurant management system should feel like one system — because the restaurant already is one.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Supabase-backed loader                                             */
/* ------------------------------------------------------------------ */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

function estimateReadMinutes(content: BlogBlock[]): number {
  const words = content.reduce((count, block) => {
    if (block.type === "list") return count + block.items.join(" ").split(/\s+/).length;
    if (block.type === "richParagraph") {
      return count + block.segments.map((segment) => segment.text).join(" ").split(/\s+/).length;
    }
    if (block.type === "table") {
      return count + block.rows.flat().join(" ").split(/\s+/).length;
    }
    if (block.type === "faq") {
      return count + block.items.map((item) => `${item.question} ${item.answer}`).join(" ").split(/\s+/).length;
    }
    if (block.type === "toc") return count + block.items.map((item) => item.label).join(" ").split(/\s+/).length;
    if (block.type === "cta") return count + `${block.text} ${block.label}`.split(/\s+/).length;
    if (block.type === "imagePlaceholder") return count;
    if (block.type === "externalLink") return count;
    return count + block.text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

function mapRow(row: BlogPostRow): BlogPost {
  const content = row.content ?? [];
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category ?? "RESTRA",
    authorName: row.author_name ?? siteConfig.name,
    publishedAt: new Date(row.published_at).toISOString(),
    updatedAt: row.updated_at ? new Date(row.updated_at).toISOString() : undefined,
    readMinutes: row.read_minutes ?? estimateReadMinutes(content),
    tags: row.tags ?? [],
    content,
    imageUrl: row.image_url ?? undefined,
    videoUrl: row.video_url ?? undefined,
    relatedSlugs: row.related_slugs ?? undefined,
  };
}

async function loadFromSupabase(): Promise<BlogPost[]> {
  const client = createClient(supabaseUrl as string, supabaseAnonKey as string);

  const { data, error } = await client
    .from("posts")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Supabase blog query failed: ${error.message}`);
  }

  const rows = (data ?? []) as unknown as BlogPostRow[];
  if (rows.length === 0) return [];

  return rows.map(mapRow);
}

async function resolvePosts(): Promise<BlogPost[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.info("[blog] Supabase not configured — using static seed posts.");
    return seedPosts;
  }

  try {
    const posts = await loadFromSupabase();
    if (posts.length === 0) {
      console.info("[blog] Supabase returned no posts — using static seed posts.");
      return seedPosts;
    }
    console.info(`[blog] Loaded ${posts.length} posts from Supabase.`);
    return posts;
  } catch (error) {
    console.warn("[blog] Falling back to static seed posts:", error);
    return seedPosts;
  }
}

let postsPromise: Promise<BlogPost[]> | null = null;

/** Loads posts once per build/render; Supabase when configured, seeds otherwise. */
export function getAllPosts(): Promise<BlogPost[]> {
  if (!postsPromise) {
    postsPromise = resolvePosts();
  }
  return postsPromise;
}

/** Date-only-safe formatter for cards and article headers. */
export function formatPostDate(iso: string): string {
  const day = new Date(`${iso.slice(0, 10)}T00:00:00`);
  return format(day, "MMMM d, yyyy");
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
