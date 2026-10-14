"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

// Breakpoints follow the reference (Elementor): mobile ≤767px, tablet 768–1024px, desktop ≥1025px.

function CaretDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 512" fill="currentColor" aria-hidden className={className}>
      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
    </svg>
  );
}

const focusRing = "outline-none focus-visible:outline-2 focus-visible:outline-offset-2";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function closeMenu() {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-50 bg-brand">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/icons/background-tile.svg')] bg-repeat opacity-80 mix-blend-overlay"
        aria-hidden
      />

      <div className="boxed relative flex flex-wrap md:flex-nowrap">
        {/* Logo column: the white box is absolutely positioned and overhangs the bar */}
        <div className="relative h-10 w-full md:h-auto md:max-[1025px]:w-[30%] min-[1025px]:w-[20%]">
          <Link
            href="/"
            className={cn(
              "absolute left-0 -top-5 block w-full bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.5)] focus-visible:outline-white",
              focusRing
            )}
          >
            <Image
              src="/images/logo.jpg"
              alt="ZNB Construction"
              width={270}
              height={129}
              sizes="(min-width: 1025px) 212px, (min-width: 768px) 267px, 162px"
              className="mx-auto h-auto w-[162px] md:w-full"
              priority
            />
          </Link>
        </div>

        {/* Nav column */}
        <div className="flex w-full items-center justify-center pt-25 pb-5 md:max-[1025px]:w-[70%] md:justify-end md:p-[15px] min-[1025px]:w-[80%]">
          <nav aria-label="Main" className="mr-5 hidden min-[1025px]:block">
            <ul className="flex items-center">
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <li key={link.label} className="group relative">
                    <button
                      type="button"
                      aria-haspopup="true"
                      className={cn(
                        "relative flex items-center px-3 py-[13px] text-base leading-6 tracking-[0.2px] text-white focus-visible:outline-white",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 group-focus-within:after:opacity-100",
                        link.children.some((c) => isActive(c.href)) && "after:opacity-100",
                        focusRing
                      )}
                    >
                      {link.label}
                      <span className="pl-2.5">
                        <CaretDown className="h-4 w-2.5" />
                      </span>
                    </button>
                    <ul className="invisible absolute left-0 top-full w-max bg-white opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block py-[13px] pr-5 pl-7 text-[13px] font-medium leading-5 text-[#33373d] transition-colors duration-300 hover:bg-[#3f444b] hover:text-white focus-visible:bg-[#3f444b] focus-visible:text-white",
                              isActive(child.href) && "bg-[#3f444b] text-white",
                              "outline-none"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "relative block px-3 py-[13px] text-base leading-6 tracking-[0.2px] text-white focus-visible:outline-white",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
                        isActive(link.href) && "after:opacity-100",
                        focusRing
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "mr-5 bg-black/5 p-[5.5px] text-white md:mr-0 min-[1025px]:hidden focus-visible:outline-white",
              focusRing
            )}
          >
            {menuOpen ? (
              <X className="size-[22px]" strokeWidth={3} aria-hidden />
            ) : (
              <Menu className="size-[22px]" strokeWidth={3} aria-hidden />
            )}
          </button>

          <Link
            href="/services/emergency-response"
            className={cn(
              "shrink-0 border border-white px-6 py-3 text-center text-[15px] font-medium leading-6 tracking-[0.2px] text-white transition-colors duration-300 hover:bg-white hover:text-accent focus-visible:bg-white focus-visible:text-accent focus-visible:outline-white",
              focusRing
            )}
          >
            Emergency Response
            <br />
            <strong>{site.phone}</strong>
          </Link>
        </div>
      </div>

      {/* Tablet / mobile dropdown: full-width panel directly under the bar */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-full bg-white min-[1025px]:hidden"
        >
          <ul>
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className={cn(
                      "flex w-full items-center px-5 py-2.5 text-left text-base leading-6 text-[#33373d] outline-none transition-colors hover:bg-[#3f444b] hover:text-white focus-visible:bg-[#3f444b] focus-visible:text-white",
                      mobileServicesOpen && "bg-[#3f444b] text-white"
                    )}
                  >
                    {link.label}
                    <span className="pl-2.5">
                      <CaretDown className="h-4 w-2.5" />
                    </span>
                  </button>
                  {mobileServicesOpen && (
                    <ul>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={isActive(child.href) ? "page" : undefined}
                            className={cn(
                              "block py-2.5 pr-5 pl-7 text-[11.05px] font-medium leading-5 text-[#33373d] outline-none transition-colors hover:bg-[#3f444b] hover:text-white focus-visible:bg-[#3f444b] focus-visible:text-white",
                              isActive(child.href) && "bg-[#3f444b] text-white"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block px-5 py-2.5 text-base leading-6 text-[#33373d] outline-none transition-colors hover:bg-[#3f444b] hover:text-white focus-visible:bg-[#3f444b] focus-visible:text-white",
                      isActive(link.href) && "bg-[#3f444b] text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
