'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronRightSolidIcon } from '@/components/icons/Icons';
import { heroSlides } from '@/data/hero';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

// Matches the reference slider: fade 500ms, autoplay 5s, pauses on hover and
// stops after the first manual interaction; Ken Burns zooms 1 → 1.3 over 20s.
const AUTOPLAY_MS = 5000;

const focusRing =
  'outline-none focus-visible:outline-2 focus-visible:outline-offset-2';

export function Hero() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [interacted, setInteracted] = useState(false);
  // Start the Ken Burns zoom after the first paint so it animates from scale 1.
  const [zoomReady, setZoomReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setZoomReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (hovered || interacted) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovered, interacted]);

  function goTo(i: number) {
    setInteracted(true);
    setIndex((i + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="border-b border-border bg-[url('/images/hero/hero-bg-texture.png')] bg-center py-12.5">
      <div className="boxed flex min-h-[50vh] flex-col md:flex-row md:items-center">
        <div className="w-full p-2.5 md:w-[37.359%]">
          <h1 className="text-[40px] leading-10 font-semibold text-navy">
            {site.tagline}
          </h1>
          <p className="mt-7.5 leading-6">
            Established in {site.foundedYear}, {site.name} offer the very best
            in concrete expertise, labour and finishing techniques across the
            UK. Drawing on decades of specialist know-how and excellence in
            concrete services, we offer tailor made solutions to the
            Construction, Manufacturing and Infrastructure sectors. We are
            proud to be a family run business and consider that to be at the
            heart of everything we do.
          </p>
          <Link
            href="/about"
            className={cn(
              'mt-7.5 inline-flex items-center gap-1.25 leading-6 font-medium tracking-[0.2px] text-brand focus-visible:outline-brand',
              focusRing
            )}
          >
            Learn more
            <ChevronRightSolidIcon className="h-4 w-2.5" />
          </Link>
        </div>

        <div className="h-px md:h-auto md:w-[2.063%]" aria-hidden />

        <div className="w-full p-2.5 md:w-[59.91%]">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Slides"
            className="relative h-125 overflow-hidden bg-social"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {heroSlides.map((src, i) => {
              const active = i === index;
              return (
                <div
                  key={src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${heroSlides.length}`}
                  aria-hidden={!active}
                  className={cn(
                    'absolute inset-0 overflow-hidden transition-opacity duration-500',
                    active ? 'z-10 opacity-100' : 'opacity-0'
                  )}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className={cn(
                      'object-cover transition-transform ease-linear motion-reduce:transition-none',
                      active && zoomReady
                        ? 'scale-130 duration-[20s] motion-reduce:scale-100'
                        : 'scale-100 duration-[10s]'
                    )}
                    priority={i === 0}
                  />
                </div>
              );
            })}

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className={cn(
                'absolute left-2.5 top-1/2 z-20 -translate-y-1/2 text-[rgba(237,237,237,0.9)] focus-visible:outline-white',
                focusRing
              )}
            >
              <ChevronLeft className="size-6.25" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className={cn(
                'absolute right-2.5 top-1/2 z-20 -translate-y-1/2 text-[rgba(237,237,237,0.9)] focus-visible:outline-white',
                focusRing
              )}
            >
              <ChevronRight className="size-6.25" strokeWidth={1.5} aria-hidden />
            </button>

            <div className="absolute inset-x-0 bottom-1.5 z-20 flex justify-center">
              {heroSlides.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={cn(
                    'group flex size-4.5 items-center justify-center focus-visible:outline-white',
                    focusRing
                  )}
                >
                  <span
                    className={cn(
                      'size-1.5 rounded-full bg-black transition-opacity',
                      i === index ? 'opacity-100' : 'opacity-20'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
