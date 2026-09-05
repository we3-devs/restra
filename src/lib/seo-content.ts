import { siteConfig } from "./site-config";

/**
 * Content model for RESTRA's crawlable marketing pages.
 *
 * Each page is fully static so it can be generated at build time with
 * `generateStaticParams`. Feature pages intentionally link to one another
 * (hub page, related cards, and the "Explore RESTRA" sidebar) so the whole
 * feature cluster shares internal backlinks.
 */
export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
  faqs?: { question: string; answer: string }[];
};

/** Feature pages listed on /features and cross-linked between pages. */
export const featureSlugs = [
  "pos",
  "billing",
  "order-management",
  "inventory",
  "kitchen-display-system",
  "table-management",
  "staff-permissions",
  "qr-ordering",
  "analytics",
] as const;

/** The overview page lives at its own route and is not part of the feature cluster. */
const overviewSlug = "restaurant-management-system";

/* ------------------------------------------------------------------ */
/*  Pages                                                              */
/* ------------------------------------------------------------------ */

const pages: SeoPage[] = [
  {
    slug: overviewSlug,
    title: "Restaurant Management System",
    description:
      "RESTRA is a restaurant management system for restaurants, cafés, and cloud kitchens in Nepal, with POS, billing, ordering, inventory, kitchen workflows, staff permissions, and reporting in one platform.",
    intro:
      "RESTRA brings POS, billing, order management, QR ordering, inventory, kitchen workflows, staff permissions, table management, and reporting into one connected restaurant management system.",
    sections: [
      {
        heading: "Who RESTRA is for",
        body:
          "RESTRA is built for restaurants, cafés, and cloud kitchens that want one connected system for their day-to-day operations — from a single dining outlet to a busy takeaway counter.",
      },
      {
        heading: "What RESTRA helps manage",
        body:
          "The platform connects the full flow of a restaurant: a customer order reaches the kitchen, preparation is tracked, a bill is generated, inventory is updated, and managers get a clear view of the day.",
        bullets: [
          "Restaurant POS and billing",
          "Dine-in and table workflows",
          "QR code ordering",
          "Order tracking through the kitchen",
          "Inventory and ingredient monitoring",
          "Staff roles and permissions",
          "Reports and analytics",
        ],
      },
      {
        heading: "How RESTRA works",
        body:
          "A typical RESTRA workflow starts with an order, sends it into the kitchen, tracks preparation status, generates an accurate bill, updates operational records, and gives managers a live view of restaurant activity.",
      },
    ],
    faqs: [
      {
        question: "What is RESTRA?",
        answer:
          "RESTRA is a Restaurant Management System for restaurants, cafés, and cloud kitchens. It combines POS, billing, ordering, QR ordering, inventory, kitchen workflows, staff permissions, table management, and reporting in one platform.",
      },
      {
        question: "What is RESTRA used for?",
        answer:
          "RESTRA is used to manage restaurant sales, orders, billing, QR ordering, kitchen preparation, inventory, staff access, table activity, and operational reporting in one platform.",
      },
      {
        question: "Is RESTRA available in Nepal?",
        answer:
          "RESTRA's public website positions the product for the Nepal restaurant market. Contact the RESTRA team to confirm current availability and onboarding details.",
      },
      {
        question: "Which features does RESTRA include?",
        answer:
          "RESTRA includes a restaurant POS, billing and invoicing, order management, QR ordering, inventory management, a kitchen display workflow, table management, staff roles and permissions, and analytics. Each capability has its own page in the features section.",
      },
    ],
  },
  {
    slug: "pos",
    title: "Restaurant POS System",
    description:
      "Use RESTRA as a restaurant POS system for Nepal — handle sales, order entry, and billing from one point of sale connected to the kitchen, inventory, and reports.",
    intro:
      "RESTRA's point-of-sale workflow brings restaurant sales and billing into the same system as orders, kitchen preparation, inventory, and operational reporting.",
    sections: [
      {
        heading: "What the RESTRA POS covers",
        body:
          "Restaurant staff can handle sales and transactions from a centralized point of sale, then follow each order through preparation and completion without switching tools.",
        bullets: [
          "Centralized restaurant sales and transactions",
          "Order entry for dine-in, takeaway, and delivery",
          "Accurate bill generation and printing",
          "Order status visibility from placement to completion",
        ],
      },
      {
        heading: "How the POS connects to the rest of the system",
        body:
          "Because the POS shares data with billing, the kitchen display, inventory, and analytics, a sale made at the counter is reflected everywhere at once. Orders sent to the kitchen update preparation status, stock levels adjust as items are sold, and managers see the day's sales in reports.",
      },
    ],
  },
  {
    slug: "billing",
    title: "Restaurant Billing and Invoicing Software",
    description:
      "Generate accurate restaurant bills and invoices in seconds with RESTRA billing software — no manual totals, no mismatched orders, and kitchen-to-bill consistency.",
    intro:
      "RESTRA turns restaurant orders into accurate bills in seconds. Billing is connected to the order flow, so the totals customers see always match what was ordered and served.",
    sections: [
      {
        heading: "Fast, accurate restaurant billing",
        body:
          "When an order is complete, RESTRA generates the bill from the items that were actually served — no manual re-entry, no arithmetic mistakes, and no mismatched totals at the end of a busy service.",
        bullets: [
          "Bills generated automatically from orders",
          "Bill printing for dine-in receipts",
          "Consistent totals across orders and invoices",
          "Fewer KOT and billing errors during service",
        ],
      },
      {
        heading: "Why connected billing matters",
        body:
          "Standalone billing tools force staff to re-enter orders that already exist elsewhere. RESTRA's billing reads from the same order data used by the POS, the kitchen display, and table management, which keeps the bill accurate and the records consistent.",
      },
    ],
  },
  {
    slug: "order-management",
    title: "Restaurant Order Management",
    description:
      "Track every dine-in, takeaway, and delivery order in real time with RESTRA order management — from placement to kitchen preparation to served.",
    intro:
      "RESTRA gives restaurant teams one screen for every order — dine-in, takeaway, or delivery — with live status from the moment the order is placed until it is served.",
    sections: [
      {
        heading: "Real-time order tracking",
        body:
          "Every order moves through a clear lifecycle — new, confirmed, preparing, ready, and served — and staff can see where each one stands without asking around.",
        bullets: [
          "Live view of all active orders",
          "Orders sent directly to the kitchen",
          "Clear status transitions managed by staff",
          "Order history for reconciliation and reporting",
        ],
      },
      {
        heading: "Connected to the kitchen and the bill",
        body:
          "Order management is the center of the RESTRA workflow. Orders placed at the POS or through QR ordering reach the kitchen display automatically, and the same order data feeds billing, inventory updates, and end-of-day reports.",
      },
    ],
  },
  {
    slug: "inventory",
    title: "Restaurant Inventory Management",
    description:
      "Track restaurant ingredients and stock in Nepal with RESTRA inventory management — monitor levels, log items, and catch low-stock before service runs out.",
    intro:
      "RESTRA helps restaurant teams monitor ingredients, record stock movement, and identify low-stock items before service is affected.",
    sections: [
      {
        heading: "What inventory management covers",
        body:
          "The inventory workflow gives teams visibility into what is moving in and out of the kitchen and highlights items that need attention.",
        bullets: [
          "Track ingredient stock levels",
          "Log new inventory items",
          "Receive low-stock alerts",
          "See inventory movement alongside orders and billing",
        ],
      },
      {
        heading: "Why inventory should be connected",
        body:
          "When inventory records are separate from orders, stock levels drift from reality. RESTRA keeps inventory in the same system as sales and billing, so teams maintain a clearer operational picture instead of relying on disconnected spreadsheets.",
      },
    ],
  },
  {
    slug: "kitchen-display-system",
    title: "Kitchen Display System Workflow",
    description:
      "Connect restaurant orders to the kitchen with RESTRA's kitchen display workflow — staff see orders as new, confirmed, preparing, ready, and served.",
    intro:
      "RESTRA connects incoming restaurant orders to kitchen preparation so kitchen and front-of-house staff share the same live order status.",
    sections: [
      {
        heading: "From order to kitchen",
        body:
          "Orders placed at the POS or through QR ordering are sent directly to the kitchen and tracked through a defined lifecycle, helping both sides of the restaurant stay in sync.",
        bullets: [
          "Orders sent directly to the kitchen",
          "New, confirmed, preparing, ready, and served statuses",
          "Live preparation visibility for staff",
          "Order lifecycle visibility for managers",
        ],
      },
      {
        heading: "A quieter, faster kitchen",
        body:
          "With orders on a shared display instead of paper tickets, the kitchen no longer has to guess what is next. Staff confirm, prepare, and mark orders ready, and the front of house is notified the moment food is ready to be served.",
      },
    ],
  },
  {
    slug: "table-management",
    title: "Restaurant Table Management",
    description:
      "Manage dine-in table activity with RESTRA table management — occupancy, table-linked orders, kitchen status, and billing in one flow.",
    intro:
      "RESTRA includes table management for dine-in operations, with table activity connected to ordering, kitchen status, and billing workflows.",
    sections: [
      {
        heading: "Dine-in operations in one flow",
        body:
          "Restaurant staff can use table activity as part of the wider order lifecycle, from a customer's order at the table through kitchen preparation and billing.",
        bullets: [
          "Dine-in order workflows",
          "Table occupancy and activity visibility",
          "Table-linked orders from QR ordering and staff",
          "Connected order and billing context",
        ],
      },
      {
        heading: "Managing busy floors",
        body:
          "During peak hours staff need to know which tables are occupied, which orders are still preparing, and which bills are open. RESTRA keeps that state visible and connected so service stays fast.",
      },
    ],
  },
  {
    slug: "staff-permissions",
    title: "Restaurant Staff Roles and Permissions",
    description:
      "Control who sees what in your restaurant software with RESTRA staff roles — admin, manager, and worker permissions matched to each job.",
    intro:
      "RESTRA gives administrators, managers, and workers different levels of access, so staff see only the tools their job actually needs.",
    sections: [
      {
        heading: "Role-based access for restaurant teams",
        body:
          "Every restaurant has owners, managers, and floor staff with different responsibilities. RESTRA maps access to those roles instead of giving everyone full control.",
        bullets: [
          "Admin: full control over users, settings, and reports",
          "Manager: daily operations — orders, inventory, and staff",
          "Worker: task-specific access to assigned tools only",
        ],
      },
      {
        heading: "What permissions cover",
        body:
          "Role permissions apply across the system, including user management, billing and orders, inventory settings and management, table management, staff roles, and reports and analytics. This keeps sensitive settings with the right people and reduces mistakes from accidental access.",
      },
    ],
  },
  {
    slug: "qr-ordering",
    title: "QR Ordering for Restaurants",
    description:
      "Let customers scan a QR code at the table, browse the digital menu, and order from their phone with RESTRA QR ordering — no app required.",
    intro:
      "RESTRA's QR ordering flow lets customers scan a code at the table, open a digital menu, place an order, and receive order status updates — without downloading an app.",
    sections: [
      {
        heading: "How QR ordering works",
        body:
          "The customer scans the table QR code, browses the digital menu, selects items, and submits the order. The order is sent straight into the restaurant's workflow.",
        bullets: [
          "Scan a QR code at the table",
          "Browse the digital menu on a phone",
          "Place an order without an app download",
          "Send the order to the kitchen",
          "View real-time order status updates",
        ],
      },
      {
        heading: "Why restaurants adopt QR ordering",
        body:
          "QR ordering removes the paper menu and cuts ordering friction. Orders reach the kitchen instantly, and because they are digital, they flow into billing and inventory without manual re-entry.",
      },
    ],
  },
  {
    slug: "analytics",
    title: "Restaurant Analytics and Reporting",
    description:
      "Understand restaurant sales, orders, and inventory movement with RESTRA reporting and analytics for Nepal restaurants — live dashboard and reports.",
    intro:
      "RESTRA gives restaurant teams an operational view of sales, orders, inventory movement, and overall activity through reports and a live dashboard.",
    sections: [
      {
        heading: "What RESTRA reporting covers",
        body:
          "Reports and analytics help managers review the activity that keeps a restaurant running day to day.",
        bullets: [
          "Sales visibility across the day",
          "Order activity and volume",
          "Inventory movement and low-stock alerts",
          "Overall restaurant activity",
          "Live dashboard insight",
        ],
      },
      {
        heading: "Decisions based on the day's data",
        body:
          "Managers can see today's sales, active orders, occupied tables, and inventory alerts in one view, and use reports to understand what sold, what moved, and what needs restocking.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Lookups                                                            */
/* ------------------------------------------------------------------ */

export const seoPages = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
) as Record<string, SeoPage>;

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages[slug];
}

/** Titles of the feature cluster for nav lists. */
export const featurePages = featureSlugs.map((slug) => seoPages[slug]);

/** Absolute URLs (used for canonical links, sitemaps, and JSON-LD). */
export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path}`;
}

/** Full page path for a feature slug, e.g. /features/qr-ordering. */
export function featurePath(slug: string): string {
  return `/features/${slug}`;
}

/** Cross-link helper: the feature slugs every feature page should point to. */
export function relatedFeatureSlugs(currentSlug: string): string[] {
  return featureSlugs.filter((slug) => slug !== currentSlug);
}
