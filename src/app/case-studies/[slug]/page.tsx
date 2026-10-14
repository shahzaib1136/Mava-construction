import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

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
    { label: `${study.projectName} Location:`, value: study.location },
    { label: "Client:", value: study.client },
    { label: "Value:", value: study.value },
    { label: "Duration:", value: study.duration },
  ];

  return (
    <>
      <PageHeader title={study.title} crumbs={[{ label: "Case Studies", href: "/case-studies" }]} />
      <section className="boxed my-10 p-2.5 leading-6 [&_p]:my-2.5">
        <table className="w-full border-collapse border-t border-l border-border">
          <tbody>
            {facts.map((fact) => (
              <tr key={fact.label}>
                <td className="border-r border-b border-border p-2.5 align-top">
                  <p>{fact.label}</p>
                </td>
                <td className="border-r border-b border-border p-2.5 align-top">
                  <p>{fact.value}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={cn(study.descriptionHeadingBold && "font-bold")}>Project Description</p>
        {study.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <p className="font-bold">{study.featuresHeading}</p>
        {study.featuresAsList ? (
          <ul className="list-disc pl-10">
            {study.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : (
          study.features.map((feature) => <p key={feature}>• {feature}</p>)
        )}
      </section>
    </>
  );
}
