import Image from "next/image";
import { Carousel } from "@/components/ui/Carousel";
import { partnerLogos } from "@/data/partners";

export function PartnerLogos() {
  return (
    <section className="relative my-15 bg-brand py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/icons/background-tile.svg')] bg-repeat opacity-80 mix-blend-overlay"
        aria-hidden
      />
      <div className="boxed relative p-2.5">
        <Carousel
          label="Our partners"
          perViewClassName="[--n:2] min-[1025px]:[--n:5]"
          showDots
          viewportClassName="mx-7.5 pb-7.5"
          arrowClassName="top-[calc((100%-30px)/2)]"
          arrowIconClassName="size-6.25"
          dotsClassName="bottom-1.5"
          items={partnerLogos.map((src) => (
            <div key={src} className="text-center leading-6">
              <Image
                src={src}
                alt="ZNB Construction partner"
                width={300}
                height={120}
                sizes="(min-width: 1025px) 236px, (min-width: 768px) 300px, 155px"
                className="inline h-auto max-w-full align-baseline"
              />
            </div>
          ))}
        />
      </div>
    </section>
  );
}
