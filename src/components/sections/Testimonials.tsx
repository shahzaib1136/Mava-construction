"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_MS = 7000;
const PER_PAGE = 2;
const pageCount = Math.ceil(testimonials.length / PER_PAGE);

export function Testimonials() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const current = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-16">
      <Container>
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
            className="hidden shrink-0 text-muted hover:text-brand sm:block"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2">
            {current.map((t) => (
              <div key={t.name} className="text-center">
                <p className="text-[1.6rem] leading-8 text-body">{t.quote}</p>
                <p className="mt-5 text-[1.5rem] font-bold text-brand">{t.name}</p>
                <p className="text-[1.3rem] text-muted">{t.role}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => setPage((p) => (p + 1) % pageCount)}
            className="hidden shrink-0 text-muted hover:text-brand sm:block"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonials page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`size-2.5 rounded-full transition-colors ${
                i === page ? "bg-brand" : "bg-border"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
