import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A selection of major concrete installation projects delivered by ZNB Construction.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="Case Studies" />
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-12">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="grid grid-cols-1 items-center gap-8 border-b border-border pb-12 last:border-0 lg:grid-cols-2"
              >
                <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-[2.2rem] font-bold text-navy">{study.title}</h2>
                  <p className="mt-3 text-[1.5rem] leading-7 text-body">{study.summary}</p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-5 inline-flex items-center bg-brand px-6 py-3 text-[1.5rem] text-white hover:bg-brand-hover"
                  >
                    Read More »
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
