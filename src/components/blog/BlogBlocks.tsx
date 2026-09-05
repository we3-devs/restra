import type { BlogBlock } from "@/lib/blog-content";

/**
 * Server-side renderer for blog content blocks (paragraph, heading, list, quote).
 * Hand-rolled typography that matches the RESTRA theme (no markdown dependency).
 */
export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const level = block.level ?? 2;
            if (level === 3) {
              return (
                <h3
                  key={index}
                  className="pt-2 font-display text-2xl font-semibold tracking-tight text-restra-text"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h2
                key={index}
                className="pt-2 font-display text-3xl font-semibold tracking-tight text-restra-text"
              >
                {block.text}
              </h2>
            );
          }
          case "list": {
            const items = block.items;
            return block.ordered ? (
              <ol key={index} className="space-y-2.5 pl-1">
                {items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-3 leading-7 text-restra-text-secondary">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-restra-yellow/10 text-xs font-semibold text-restra-yellow">
                      {itemIndex + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="space-y-2.5 pl-1">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-restra-text-secondary">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-restra-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          case "quote": {
            return (
              <blockquote
                key={index}
                className="border-l-2 border-restra-yellow pl-6 font-display text-xl italic leading-relaxed text-restra-text"
              >
                {block.text}
              </blockquote>
            );
          }
          default: {
            return (
              <p
                key={index}
                className="text-[17px] leading-8 text-restra-text-secondary"
              >
                {block.text}
              </p>
            );
          }
        }
      })}
    </div>
  );
}
