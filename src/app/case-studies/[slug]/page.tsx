import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const facts = [
    { label: "Location", value: study.location },
    { label: "Client", value: study.client },
    { label: "Value", value: study.value },
    { label: "Duration", value: study.duration },
  ];

  return (
    <>
      <PageHeader title={study.title} />
      <section className="py-16">
        <Container>
          <div className="relative h-[280px] w-full overflow-hidden sm:h-[420px]">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-[2rem] font-bold text-navy">Project Description</h2>
              <div className="mt-4 flex flex-col gap-4 text-[1.6rem] leading-8 text-body">
                {study.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <h2 className="mt-10 text-[2rem] font-bold text-navy">Unique Features</h2>
              <ul className="mt-4 flex flex-col gap-2 text-[1.6rem] leading-8 text-body">
                {study.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-brand">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="flex flex-col gap-4 border border-border p-6 h-fit">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <h3 className="text-[1.3rem] font-normal uppercase tracking-wide text-muted">
                    {fact.label}
                  </h3>
                  <p className="text-[1.7rem] font-bold text-navy">{fact.value}</p>
                </div>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
