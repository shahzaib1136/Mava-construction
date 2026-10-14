import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentRows } from "@/components/sections/ContentRows";
import { PageHeader } from "@/components/sections/PageHeader";
import { services, getServiceBySlug } from "@/data/services";

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

  return (
    <>
      <PageHeader title={service.title} crumbs={[{ label: "Services", href: "/services" }]} />
      <ContentRows rows={service.rows} imageAlt={service.title} />
    </>
  );
}
