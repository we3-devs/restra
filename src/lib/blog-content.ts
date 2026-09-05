import { createClient } from "@supabase/supabase-js";
import { format } from "date-fns";
import { siteConfig } from "./site-config";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Used verbatim for the meta description and card excerpt. */
  description: string;
  category: string;
  tags: string[];
  authorName: string;
  authorRole?: string;
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
