import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatPostDate, type BlogPost } from "@/lib/blog-content";
import BlogMedia from "./BlogMedia";

type BlogCardProps = {
  post: BlogPost;
  priority?: boolean;
};

export function blogPath(slug: string): string {
  return `/blog/${slug}`;
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <Link
      href={blogPath(post.slug)}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-restra-card transition-colors hover:border-restra-yellow/50"
    >
      <BlogMedia post={post} priority={priority} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em]">
          <span className="text-restra-cyan">{post.category}</span>
          <span className="text-restra-text-muted">·</span>
          <time dateTime={post.publishedAt} className="text-restra-text-muted">
            {formatPostDate(post.publishedAt)}
          </time>
        </div>

        <h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-restra-text transition-colors group-hover:text-restra-yellow">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-restra-text-secondary">
          {post.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-restra-text-muted">
            <Clock className="h-3.5 w-3.5" />
            {post.readMinutes} min read
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-restra-yellow">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
