import {
  Armchair,
  BarChart3,
  Boxes,
  ChefHat,
  ClipboardList,
  LayoutGrid,
  Monitor,
  QrCode,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** Keys understood by the product-mockup renderer. */
export type MockKey =
  | "pos"
  | "billing"
  | "qr"
  | "orders"
  | "kitchen"
  | "tables"
  | "inventory"
  | "staff"
  | "analytics";

/** Icon per SEO feature slug (single source used by FeatureIcon too). */
export const featureIconMap: Record<string, LucideIcon> = {
  pos: Monitor,
  billing: Receipt,
  "order-management": ClipboardList,
  inventory: Boxes,
  "kitchen-display-system": ChefHat,
  "table-management": Armchair,
  "staff-permissions": ShieldCheck,
  "qr-ordering": QrCode,
  analytics: BarChart3,
};

export type FeatureGroup = {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: string[];
  mock: MockKey;
  /** SEO slugs covered by this group (1–2 pages each). */
  pages: string[];
  /** Primary destination page. */
  href: string;
};

/**
 * The eight RESTRA capability groups. Each maps to one or two crawlable
 * feature pages in src/lib/seo-content.ts and one product mockup.
 */
export const featureGroups: FeatureGroup[] = [
  {
    id: "pos-billing",
    name: "POS & Billing",
    icon: Monitor,
    tagline: "Counter-fast sales and accurate bills",
    description:
      "Take dine-in, takeaway, and delivery orders from one point of sale. Bills generate from what was actually served — no manual totals, no mismatched receipts.",
    benefits: [
      "Order entry for every service style",
      "Bills generated automatically from orders",
      "Bill printing for dine-in receipts",
      "Every sale reflected across the system",
    ],
    mock: "pos",
    pages: ["pos", "billing"],
    href: "/features/pos",
  },
  {
    id: "qr-ordering",
    name: "QR Ordering",
    icon: QrCode,
    tagline: "Guests order from their own phone",
    description:
      "Customers scan the table QR code, browse the digital menu, and place orders — no app download. Orders land straight in the kitchen workflow.",
    benefits: [
      "Scan-to-order, no app required",
      "Digital menu always up to date",
      "Real-time order status for guests",
      "Fewer misheard, miswritten orders",
    ],
    mock: "qr",
    pages: ["qr-ordering"],
    href: "/features/qr-ordering",
  },
  {
    id: "order-management",
    name: "Order Management",
    icon: ClipboardList,
    tagline: "Every order, one live screen",
    description:
      "Track dine-in, takeaway, and delivery orders through a clear lifecycle — new, confirmed, preparing, ready, served — with history for reconciliation.",
    benefits: [
      "Live view of all active orders",
      "Clear status transitions managed by staff",
      "Orders sent directly to the kitchen",
      "Order history for end-of-day reporting",
    ],
    mock: "orders",
    pages: ["order-management"],
    href: "/features/order-management",
  },
  {
    id: "kitchen-workflow",
    name: "Kitchen Workflow",
    icon: ChefHat,
    tagline: "A quieter, faster kitchen display",
    description:
      "Orders arrive on a shared kitchen display instead of paper tickets. Confirm, prepare, and mark ready — front of house sees every change instantly.",
    benefits: [
      "Orders routed straight to the kitchen",
      "New → confirmed → preparing → ready → served",
      "Live preparation visibility for both sides",
      "No more guessing what's next",
    ],
    mock: "kitchen",
    pages: ["kitchen-display-system"],
    href: "/features/kitchen-display-system",
  },
  {
    id: "inventory",
    name: "Inventory",
    icon: Boxes,
    tagline: "Know stock before it runs out",
    description:
      "Track ingredients with minimum levels, log new stock as it arrives, and get low-stock alerts before service is affected — all connected to sales.",
    benefits: [
      "Ingredient-level stock tracking",
      "Low-stock alerts before service",
      "Movement in and out of the kitchen",
      "Stock adjusts as orders are billed",
    ],
    mock: "inventory",
    pages: ["inventory"],
    href: "/features/inventory",
  },
  {
    id: "table-management",
    name: "Table Management",
    icon: Armchair,
    tagline: "The whole floor at a glance",
    description:
      "See occupancy, table-linked orders, kitchen status, and open bills as one connected flow — so busy floors stay fast during peak hours.",
    benefits: [
      "Table occupancy and activity visibility",
      "Orders linked to tables from QR and staff",
      "Connected kitchen and billing context",
      "Know which bills are still open",
    ],
    mock: "tables",
    pages: ["table-management"],
    href: "/features/table-management",
  },
  {
    id: "staff-roles",
    name: "Staff & Roles",
    icon: ShieldCheck,
    tagline: "The right access for every role",
    description:
      "Admins get full control, managers run daily operations, and workers see only the tools their job needs — permissions applied across every module.",
    benefits: [
      "Admin, manager, and worker roles",
      "Permissions across all modules",
      "Task-specific worker access",
      "Sensitive settings stay protected",
    ],
    mock: "staff",
    pages: ["staff-permissions"],
    href: "/features/staff-permissions",
  },
  {
    id: "analytics",
    name: "Analytics & Reports",
    icon: BarChart3,
    tagline: "Decisions based on the day's data",
    description:
      "Today's sales, active orders, occupied tables, and inventory alerts in one live view — with reports that show what sold, what moved, and what to restock.",
    benefits: [
      "Live dashboard of the day",
      "Sales and order volume visibility",
      "Inventory movement and alerts",
      "Reports managers actually use",
    ],
    mock: "analytics",
    pages: ["analytics"],
    href: "/features/analytics",
  },
];

/** Lookup helper for pages that render a single group. */
export function getFeatureGroup(id: string): FeatureGroup | undefined {
  return featureGroups.find((group) => group.id === id);
}

/** Slugs of the home-page showcase modules, in render order. */
export const homeShowcaseIds = [
  "pos-billing",
  "qr-ordering",
  "inventory",
  "staff-roles",
  "analytics",
] as const;

export function getFeatureGroupBySlug(slug: string): FeatureGroup | undefined {
  return featureGroups.find((group) => group.pages.includes(slug));
}

export { LayoutGrid as fallbackFeatureIcon };
