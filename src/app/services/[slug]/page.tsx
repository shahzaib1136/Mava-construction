import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { services, getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.cardSummary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader title={service.title} />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="relative h-[260px] w-full overflow-hidden sm:h-[380px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {service.intro.length > 0 && (
                <div className="mt-8 flex flex-col gap-4 text-[1.6rem] leading-8 text-body">
                  {service.intro.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}

              {service.sections.map((section) => (
                <div key={section.heading} className="mt-10">
                  <h2 className="text-[2rem] font-bold text-navy">{section.heading}</h2>
                  <div className="mt-4 flex flex-col gap-4 text-[1.6rem] leading-8 text-body">
                    {section.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center bg-brand px-6 py-3 text-[1.5rem] text-white hover:bg-brand-hover"
                >
                  Call us on {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-brand px-6 py-3 text-[1.5rem] text-brand hover:bg-brand hover:text-white"
                >
                  Contact us today
                </Link>
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <h3 className="text-[1.6rem] font-bold text-navy">Other Services</h3>
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="border border-border p-4 text-[1.5rem] text-navy hover:border-brand hover:text-brand"
                >
                  {other.title}
                </Link>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
