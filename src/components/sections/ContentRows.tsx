import Image from "next/image";
import type { ContentBlock, ContentColumn, ContentRow } from "@/data/content";
import { cn } from "@/lib/utils";

const imageSizes = "(min-width: 1025px) 560px, (min-width: 768px) 50vw, 100vw";

// Matches the reference: text beside an image is vertically centred, images sit at
// the top unless flagged, and rows without a standalone image are top-aligned.
function columnAlign(column: ContentColumn, row: ContentRow) {
  if (Array.isArray(column)) return row.some((c) => !Array.isArray(c)) ? "justify-center" : "";
  return typeof column !== "string" && column.centered ? "justify-center" : "";
}

// Groups consecutive paragraphs so they share one 10px-margin paragraph stack,
// while other blocks stand alone (20px apart).
function groupBlocks(blocks: ContentBlock[]) {
  const groups: ContentBlock[][] = [];
  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (block.type === "p" && last?.[0].type === "p") last.push(block);
    else groups.push([block]);
  }
  return groups;
}

function Block({ group, priority }: { group: ContentBlock[]; priority: boolean }) {
  const [first] = group;
  switch (first.type) {
    case "img":
      return (
        <Image
          src={first.src}
          alt={first.alt}
          width={1000}
          height={800}
          sizes={imageSizes}
          className="h-auto w-full"
          priority={priority}
        />
      );
    case "h2":
      return <h2 className="text-[32px] leading-8 font-semibold text-navy">{first.text}</h2>;
    case "h3":
      return <h3 className="text-2xl leading-6 font-semibold text-navy">{first.text}</h3>;
    case "text":
      return <p className="leading-6">{first.text}</p>;
    default:
      return (
        <div className="leading-6 [&>p]:my-2.5">
          {group.map((block, i) => (
            <p key={i}>{"text" in block ? block.text : null}</p>
          ))}
        </div>
      );
  }
}

function Column({ column, alt, priority }: { column: ContentColumn; alt: string; priority: boolean }) {
  if (!Array.isArray(column)) {
    return (
      <Image
        src={typeof column === "string" ? column : column.src}
        alt={alt}
        width={1000}
        height={800}
        sizes={imageSizes}
        className="h-auto w-full"
        priority={priority}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {groupBlocks(column).map((group, i) => (
        <Block key={i} group={group} priority={priority} />
      ))}
    </div>
  );
}

// Two-column content rows used by the service, About and Team pages.
export function ContentRows({ rows, imageAlt }: { rows: ContentRow[]; imageAlt: string }) {
  return (
    <div className="py-12.5">
      {rows.map((row, i) => (
        <section key={i} className="boxed my-10 px-2.5">
          <div className="flex flex-col md:flex-row">
            {row.map((column, j) => (
              <div key={j} className={cn("flex w-full flex-col p-7.5 md:w-1/2", columnAlign(column, row))}>
                <Column column={column} alt={imageAlt} priority={i === 0} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
