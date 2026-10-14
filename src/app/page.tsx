import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedCaseStudy />
      <PartnerLogos />
      <Testimonials />
    </>
  );
}
