"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Infinite sliding carousel modelled on the reference's Swiper setup: moves one
// slide at a time, autoplays, pauses on hover and stops after manual interaction.
// Slides per view is driven by the CSS variable --n so it can change per breakpoint
// (pass e.g. "[--n:2] min-[1025px]:[--n:5]" as perViewClassName).
export function Carousel({
  items,
  label,
  perViewClassName,
  gap = 0,
  autoplayMs = 5000,
  speedMs = 500,
  showDots = false,
  className,
  viewportClassName,
  arrowClassName,
  prevClassName = "left-0",
  nextClassName = "right-0",
  arrowIconClassName,
  dotsClassName,
}: {
  items: ReactNode[];
  label: string;
  perViewClassName: string;
  gap?: number;
  autoplayMs?: number;
  speedMs?: number;
  showDots?: boolean;
  className?: string;
  viewportClassName?: string;
  arrowClassName?: string;
  prevClassName?: string;
  nextClassName?: string;
  arrowIconClassName?: string;
  dotsClassName?: string;
}) {
  const count = items.length;
  // The track holds the slides twice so the loop can wrap seamlessly.
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [rewinding, setRewinding] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [interacted, setInteracted] = useState(false);

  function next() {
    setAnimate(true);
    setIndex((i) => Math.min(i + 1, count));
  }

  function prev() {
    if (index === 0) {
      // Jump to the cloned copy without animating, then slide back one.
      setAnimate(false);
      setIndex(count);
      setRewinding(true);
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  }

  useEffect(() => {
    if (!rewinding) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setAnimate(true);
        setIndex((i) => i - 1);
        setRewinding(false);
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [rewinding]);

  useEffect(() => {
    if (hovered || interacted) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, interacted, autoplayMs]);

  function handleTransitionEnd() {
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
    }
  }

  function interact(action: () => void) {
    setInteracted(true);
    action();
  }

  const active = index % count;
  const slides = [...items, ...items];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={cn("relative", perViewClassName, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={cn("overflow-hidden", viewportClassName)}>
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(${index} * -1 * (100% + ${gap}px) / var(--n)))`,
            transition: animate ? `transform ${speedMs}ms ease` : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-hidden={i >= count}
              className="shrink-0 grow-0"
              style={{ flexBasis: `calc((100% - (var(--n) - 1) * ${gap}px) / var(--n))` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => interact(prev)}
        className={cn(
          "absolute z-10 -translate-y-1/2 text-[rgba(237,237,237,0.9)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
          arrowClassName,
          prevClassName
        )}
      >
        <ChevronLeft className={arrowIconClassName} strokeWidth={1.5} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => interact(next)}
        className={cn(
          "absolute z-10 -translate-y-1/2 text-[rgba(237,237,237,0.9)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
          arrowClassName,
          nextClassName
        )}
      >
        <ChevronRight className={arrowIconClassName} strokeWidth={1.5} aria-hidden />
      </button>

      {showDots && (
        <div className={cn("absolute inset-x-0 flex justify-center", dotsClassName)}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() =>
                interact(() => {
                  setAnimate(true);
                  setIndex(i);
                })
              }
              className="flex size-4.5 items-center justify-center outline-none focus-visible:outline-2 focus-visible:outline-white"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full bg-black transition-opacity",
                  i === active ? "opacity-100" : "opacity-20"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
