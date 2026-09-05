import Image from "next/image";
import type { BlogPost } from "@/lib/blog-content";

type BlogMediaProps = {
  post: Pick<BlogPost, "imageUrl" | "videoUrl" | "imageAlt" | "title" | "category">;
  /** Aspect-ratio class for the media container, e.g. "aspect-[16/10]". */
  className?: string;
  priority?: boolean;
};

/**
 * Renders a post's hero media: video when available, otherwise the image.
 * Falls back to a branded gradient panel when neither is set, so every card
 * looks intentional even before Supabase media is added.
 */
export default function BlogMedia({ post, className, priority = false }: BlogMediaProps) {
  const containerClass =
    className ??
    "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08]";

  const { videoUrl, imageUrl, imageAlt, title } = post;

  if (videoUrl) {
    return (
      <div className={containerClass}>
        <video
          src={videoUrl}
          poster={imageUrl}
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          aria-label={imageAlt ?? title}
        />
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className={containerClass}>
        <Image
          src={imageUrl}
          alt={imageAlt ?? title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 640px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>
    );
  }

  return (
    <div
      className={`${containerClass} flex items-center justify-center bg-[radial-gradient(ellipse_120%_90%_at_20%_0%,rgba(255,212,59,0.12),transparent_60%),radial-gradient(ellipse_100%_80%_at_90%_100%,rgba(34,211,238,0.08),transparent_60%),var(--restra-surface)]`}
    >
      <span className="font-display text-3xl font-semibold text-restra-text/20">
        RESTRA
      </span>
    </div>
  );
}
