import Image from "next/image";
import Link from "next/link";
import { ChevronRightSolidIcon } from "@/components/icons/Icons";
import { services } from "@/data/services";

const focusRing =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function ServicesGrid() {
  return (
    <section className="my-15">
      <div className="boxed flex flex-wrap">
        {services.map((service) => {
          const href = `/services/${service.slug}`;
          return (
            <div key={service.slug} className="w-full p-2.5 md:w-1/4">
              <Image
                src={service.cardImage}
                alt={service.title}
                width={560}
                height={450}
                sizes="(min-width: 1025px) 295px, (min-width: 768px) 25vw, 100vw"
                className="h-auto w-full"
              />
              <h2 className="mt-5 text-[32px] leading-8 font-semibold text-navy">
                <Link href={href} className={focusRing}>
                  {service.cardTitle}
                </Link>
              </h2>
              <p className="mt-7.5 leading-6">{service.cardSummary}</p>
              <Link
                href={href}
                className={`mt-7.5 inline-flex items-center gap-1.25 leading-6 font-medium tracking-[0.2px] text-brand transition-colors duration-500 hover:text-accent ${focusRing}`}
              >
                View Service
                <ChevronRightSolidIcon className="h-4 w-2.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
