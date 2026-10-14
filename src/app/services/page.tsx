import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Concrete installation, finishing, emergency response and site operative supply services from ZNB Construction.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <ServicesGrid />
    </>
  );
}
