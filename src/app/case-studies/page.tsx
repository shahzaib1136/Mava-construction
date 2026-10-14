import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A selection of major concrete installation projects delivered by ZNB Construction.",
};

const focusRing =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="Case Studies" />
      <section className="boxed my-20 p-2.5">
        <div className="grid grid-cols-1 gap-x-7.5 gap-y-8.75 md:max-[1025px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {caseStudies.map((study) => {
            const href = `/case-studies/${study.slug}`;
            return (
              <article
                key={study.slug}
                className="flex flex-col overflow-hidden rounded-[3px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
              >
                <Link href={href} tabIndex={-1} className="relative mb-5 block pb-[50%] md:pb-[66%]">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(min-width: 1025px) 393px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className="mt-5 flex grow flex-col px-7.5">
                  <h3 className="mb-6.25 text-[21px] leading-[31.5px] font-semibold text-navy">
                    <Link href={href} className={focusRing}>
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mb-6.25 text-sm leading-5.25 text-[#777]">{study.excerpt}</p>
                  <Link
                    href={href}
                    aria-label={`Read more about ${study.title}`}
                    className={`mt-1 mb-5 self-start text-xs leading-4.5 font-medium text-navy uppercase ${focusRing}`}
                  >
                    Read More »
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
