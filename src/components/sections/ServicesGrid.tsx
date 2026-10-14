import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="flex flex-col">
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={service.cardImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-[1.6rem] font-bold text-navy">{service.cardTitle}</h2>
              <p className="mt-2 flex-1 text-[1.4rem] leading-6 text-body">
                {service.cardSummary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-[1.4rem] font-medium text-brand hover:text-accent"
              >
                View Service
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
