import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import {
  services,
  getServiceBySlug,
  type ServiceBlock,
  type ServiceColumn,
  type ServiceRow,
} from "@/data/services";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.cardSummary };
}

// Matches the reference: text beside an image is vertically centred, images sit at
// the top unless flagged, and text-only rows are top-aligned.
function columnAlign(column: ServiceColumn, row: ServiceRow) {
  if (Array.isArray(column)) return row.some((c) => !Array.isArray(c)) ? "justify-center" : "";
  return typeof column !== "string" && column.centered ? "justify-center" : "";
}

// Groups consecutive paragraphs so they share one 10px-margin paragraph stack,
// while headings and plain text runs stand alone (20px apart).
function groupBlocks(blocks: ServiceBlock[]) {
  const groups: ServiceBlock[][] = [];
  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (block.type === "p" && last?.[0].type === "p") last.push(block);
    else groups.push([block]);
  }
  return groups;
}

function Column({ column, title, priority }: { column: ServiceColumn; title: string; priority: boolean }) {
  if (!Array.isArray(column)) {
    return (
      <Image
        src={typeof column === "string" ? column : column.src}
        alt={title}
        width={1000}
        height={800}
        sizes="(min-width: 1025px) 560px, (min-width: 768px) 50vw, 100vw"
        className="h-auto w-full"
        priority={priority}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {groupBlocks(column).map((group, i) => {
        const [first] = group;
        if (first.type === "h2")
          return (
            <h2 key={i} className="text-[32px] leading-8 font-semibold text-navy">
              {first.text}
            </h2>
          );
        if (first.type === "h3")
          return (
            <h3 key={i} className="text-2xl leading-6 font-semibold text-navy">
              {first.text}
            </h3>
          );
        if (first.type === "text")
          return (
            <p key={i} className="leading-6">
              {first.text}
            </p>
          );
        return (
          <div key={i} className="leading-6 [&>p]:my-2.5">
            {group.map((block, j) => (
              <p key={j}>{block.text}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} crumbs={[{ label: "Services", href: "/services" }]} />
      <div className="py-12.5">
        {service.rows.map((row, i) => (
          <section key={i} className="boxed my-10 px-2.5">
            <div className="flex flex-col md:flex-row">
              {row.map((column, j) => (
                <div key={j} className={cn("flex w-full flex-col p-7.5 md:w-1/2", columnAlign(column, row))}>
                  <Column column={column} title={service.title} priority={i === 0} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
