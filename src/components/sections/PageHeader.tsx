import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href: string };

// Title band used at the top of inner pages: heading plus breadcrumb trail
// (Home / ...crumbs / current page) over the textured background. An optional
// aside (e.g. the contact page map) fills the right-hand column.
export function PageHeader({
  title,
  crumbs = [],
  aside,
}: {
  title: string;
  crumbs?: Crumb[];
  aside?: ReactNode;
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section
      className={cn(
        "border-b border-border bg-[url('/images/hero/hero-bg-texture.png')] bg-center",
        aside ? "pt-10 pb-15" : "pt-15 pb-10"
      )}
    >
      <div
        className={cn(
          "boxed flex flex-col md:flex-row md:items-center",
          aside ? "min-h-56.25" : "min-h-33.75"
        )}
      >
        <div className="w-full p-2.5 md:w-[42.68%]">
          <h1 className="text-[40px] leading-10 font-semibold text-navy">{title}</h1>
          <nav aria-label="Breadcrumb" className="mt-7.5 text-[13.6px] leading-[20.4px]">
            {trail.map((crumb) => (
              <Fragment key={crumb.href}>
                <Link
                  href={crumb.href}
                  className="text-navy outline-none hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {crumb.label}
                </Link>
                {" / "}
              </Fragment>
            ))}
            <span aria-current="page">{title}</span>
          </nav>
        </div>
        {aside ? (
          <>
            <div className="h-px md:h-auto md:w-[2.857%]" aria-hidden />
            <div className="w-full p-2.5 md:w-[53.795%]">{aside}</div>
          </>
        ) : (
          <div className="h-0.5 md:hidden" aria-hidden />
        )}
      </div>
    </section>
  );
}
