import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

const focusRing =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function FeaturedCaseStudy() {
  const featured = caseStudies[0];
  const href = `/case-studies/${featured.slug}`;

  return (
    <section className="py-10">
      <div className="boxed p-2.5">
        <article className="flex flex-col md:flex-row">
          <Link
            href={href}
            tabIndex={-1}
            className="relative block aspect-2/1 w-full shrink-0 overflow-hidden md:mr-5 md:aspect-10/7 md:w-[53%]"
          >
            <Image
              src={featured.image}
              alt=""
              fill
              sizes="(min-width: 1025px) 657px, (min-width: 768px) 53vw, 100vw"
              className="object-cover"
            />
          </Link>
          <div className="mt-5 min-w-0 md:mt-0 md:flex-1">
            <h3 className="text-lg leading-6.75 font-semibold text-navy">
              <Link href={href} className={focusRing}>
                {featured.title}
              </Link>
            </h3>
            <p className="mb-2.5 text-sm leading-5.25 text-[#777]">{featured.excerpt}</p>
            <Link
              href={href}
              aria-label={`Read more about ${featured.title}`}
              className={`text-xs leading-4.5 font-medium text-navy ${focusRing}`}
            >
              Learn more
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
