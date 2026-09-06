import Link from "next/link";
import type { BlogBlock } from "@/lib/blog-content";

/**
 * Server-side renderer for blog content blocks.
 * Hand-rolled typography that matches the RESTRA theme (no markdown dependency).
 */
export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "richParagraph":
            return (
              <p key={index} className="text-base leading-8 text-restra-text-secondary">
                {block.segments.map((segment, segmentIndex) =>
                  segment.href ? (
                    <Link
                      key={`${segment.href}-${segmentIndex}`}
                      href={segment.href}
                      className="font-medium text-restra-yellow underline decoration-restra-yellow/40 underline-offset-4 hover:decoration-restra-yellow"
                    >
                      {segment.text}
                    </Link>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            );
          case "heading": {
            const level = block.level ?? 2;
            if (level === 3) {
              return (
                <h3
                  key={index}
                  id={block.id}
                  className="pt-2 font-display text-2xl font-semibold tracking-tight text-restra-text"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h2
                key={index}
                id={block.id}
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
          case "toc": {
            return (
              <nav
                key={index}
                aria-label="Table of contents"
                className="rounded-xl border border-white/[0.08] bg-restra-card p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                  In this guide
                </p>
                <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                  {block.items.map((item, itemIndex) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex gap-3 text-sm leading-6 text-restra-text-secondary transition-colors hover:text-restra-yellow"
                      >
                        <span className="font-semibold text-restra-yellow">{itemIndex + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            );
          }
          case "table": {
            return (
              <div key={index} id="comparison" className="overflow-hidden rounded-xl border border-white/[0.08] bg-restra-card">
                <div className="overflow-x-auto">
                  <table className="min-w-[760px] w-full text-left text-sm">
                    <caption className="border-b border-white/[0.08] px-5 py-4 text-left text-sm leading-6 text-restra-text-secondary">
                      {block.caption}
                    </caption>
                    <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.08em] text-restra-text-muted">
                      <tr>
                        {block.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-semibold">{header}</th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {block.rows.map((row) => (
                        <tr key={row[0]} className="align-top">
                          {row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`} className="px-4 py-3 leading-6 text-restra-text-secondary">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
          case "faq":
            return (
              <div key={index} id="rms-faq" className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-restra-card">
                {block.items.map((item) => (
                  <details key={item.question} className="group px-5">
                    <summary className="cursor-pointer list-none py-5 pr-8 font-semibold text-restra-text marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="relative block after:absolute after:right-0 after:top-1/2 after:text-xl after:text-restra-yellow after:content-['+'] group-open:after:content-['-']">{item.question}</span>
                    </summary>
                    <p className="pb-5 leading-7 text-restra-text-secondary">{item.answer}</p>
                  </details>
                ))}
              </div>
            );
          case "imagePlaceholder":
            return (
              <figure key={index} className="overflow-hidden rounded-xl border border-dashed border-restra-yellow/30 bg-restra-card/60">
                <div className="flex aspect-[16/7] items-center justify-center px-6 text-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-restra-yellow">Company image placeholder</p>
                    <p className="mt-2 text-sm text-restra-text-muted">{block.label ?? "Add a product or company image here"}</p>
                  </div>
                </div>
                <figcaption className="sr-only">{block.alt}</figcaption>
              </figure>
            );
          case "externalLink":
            return (
              <a
                key={index}
                href={block.href}
                target={block.href.startsWith("http") ? "_blank" : undefined}
                rel={block.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-semibold text-restra-yellow underline decoration-restra-yellow/40 underline-offset-4 transition-colors hover:decoration-restra-yellow"
              >
                {block.label}
                <span aria-hidden="true">-&gt;</span>
              </a>
            );
          case "cta":
            return (
              <aside key={index} className="rounded-xl border border-restra-yellow/20 bg-restra-yellow/[0.08] p-6 sm:p-8">
                <p className="leading-7 text-restra-text-secondary">{block.text}</p>
                <Link href={block.href} className="mt-5 inline-flex rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg transition-colors hover:bg-restra-yellow/90">
                  {block.label}
                </Link>
              </aside>
            );
          default: {
            return (
              <p
                key={index}
                className="text-base leading-8 text-restra-text-secondary"
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
