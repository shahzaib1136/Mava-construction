import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/data/caseStudies";

export function FeaturedCaseStudy() {
  const featured = caseStudies[0];

  return (
    <section className="bg-[#f6f7f9] py-16">
      <Container>
        <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[280px] w-full overflow-hidden sm:h-[380px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col px-0 lg:px-10">
            <Link href={`/case-studies/${featured.slug}`} className="group">
              <span className="block text-[1.4rem] font-normal uppercase tracking-wide text-muted">
                Case Studies
              </span>
              <h2 className="mt-2 text-[2.4rem] leading-tight text-navy group-hover:text-accent">
                {featured.title}
              </h2>
            </Link>
            <p className="mt-4 text-[1.6rem] leading-7 text-body">{featured.summary}</p>
            <Link
              href={`/case-studies/${featured.slug}`}
              className="mt-6 inline-flex w-fit items-center bg-brand px-6 py-3 text-[1.5rem] text-white hover:bg-brand-hover"
            >
              Learn more
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
