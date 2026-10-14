"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/partners";

const AUTOPLAY_MS = 4000;
const PER_PAGE = 5;
const pageCount = Math.ceil(partnerLogos.length / PER_PAGE);

export function PartnerLogos() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const current = partnerLogos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="bg-brand bg-[url('/images/icons/background-tile.svg')] bg-cover py-10">
      <Container>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous partners"
            onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
            className="shrink-0 text-white/70 hover:text-white"
          >
            <ChevronLeft className="size-6" />
          </button>
          <div className="grid flex-1 grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {current.map((src) => (
              <div key={src} className="relative h-10 w-full">
                <Image
                  src={src}
                  alt="ZNB Construction partner"
                  fill
                  sizes="200px"
                  className="object-contain opacity-90"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next partners"
            onClick={() => setPage((p) => (p + 1) % pageCount)}
            className="shrink-0 text-white/70 hover:text-white"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </Container>
    </section>
  );
}
