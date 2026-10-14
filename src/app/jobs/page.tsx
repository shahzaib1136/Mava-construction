import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { jobs } from "@/data/jobs";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Current vacancies at ZNB Construction.",
};

export default function JobsPage() {
  return (
    <>
      <PageHeader title="Jobs" />
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-16">
            {jobs.map((job) => (
              <article key={job.slug} className="border-b border-border pb-16 last:border-0">
                <h2 className="text-[2.4rem] font-bold text-navy">{job.title}</h2>
                <div className="mt-2 flex flex-wrap gap-4 text-[1.4rem] font-medium text-brand">
                  <span>{job.type}</span>
                  <span>{job.salary}</span>
                  <span>{job.training}</span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[1.6rem] font-bold text-navy">Requirements</h3>
                    <ul className="mt-3 flex flex-col gap-2 text-[1.5rem] leading-7 text-body">
                      {job.requirements.map((item) => (
                        <li key={item}>– {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[1.6rem] font-bold text-navy">Main Responsibilities</h3>
                    <ul className="mt-3 flex flex-col gap-2 text-[1.5rem] leading-7 text-body">
                      {job.responsibilities.map((item) => (
                        <li key={item}>– {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="mt-8 text-[1.6rem] font-bold text-navy">Apply below:</h3>
                <div className="mt-4">
                  <JobApplicationForm jobTitle={job.title} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
