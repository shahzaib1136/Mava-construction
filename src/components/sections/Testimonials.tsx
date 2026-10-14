import { Carousel } from "@/components/ui/Carousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="mt-2.5 mb-15 pt-2.5">
      <div className="boxed p-2.5">
        <Carousel
          label="Testimonials"
          perViewClassName="[--n:1] min-[1025px]:[--n:2]"
          gap={10}
          viewportClassName="mx-auto w-[95%]"
          arrowClassName="top-1/2"
          prevClassName="left-2.5"
          nextClassName="right-2.5"
          arrowIconClassName="size-5"
          items={testimonials.map((t) => (
            <figure key={t.name} className="h-full px-5 pt-11.25 pb-5 text-center">
              <blockquote className="leading-6">{t.quote}</blockquote>
              <figcaption className="mt-6.25 leading-6">
                <span className="block font-semibold text-brand">{t.name}</span>
                <span className="block">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        />
      </div>
    </section>
  );
}
