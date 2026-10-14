import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind ZNB Construction.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Team" />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="relative h-[320px] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-6 text-[2rem] font-bold text-navy">{member.name}</h2>
                <p className="mt-1 text-[1.5rem] font-medium text-brand">{member.role}</p>
                <p className="mt-4 text-[1.5rem] leading-7 text-body">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
