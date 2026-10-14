import { Fragment } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { jobs } from "@/data/jobs";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Current vacancies at ZNB Construction.",
};

// Renders lines separated by <br>, as the reference does for job details.
function Lines({ items, prefix = "" }: { items: string[]; prefix?: string }) {
  return items.map((item, i) => (
    <Fragment key={item}>
      {i > 0 && <br />}
      {prefix}
      {item}
    </Fragment>
  ));
}

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-lg leading-4.5 font-semibold text-navy">{heading}</h4>
      <p className="mt-3 mb-2.5 leading-6">
        <Lines items={items} prefix="– " />
      </p>
    </div>
  );
}

export default function JobsPage() {
  return (
    <>
      <PageHeader title="Jobs" />
      <div className="boxed my-10 p-2.5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {jobs.map((job) => (
            <article key={job.slug} className="flex flex-col gap-5 p-7.5">
              <h2 className="text-[32px] leading-8 font-semibold text-navy">{job.title}</h2>
              <p className="mb-2.5 leading-6">
                <Lines items={[job.type, job.salary, job.training]} />
              </p>
              <ListBlock heading="Requirements" items={job.requirements} />
              <ListBlock heading="Main Responsibilities:" items={job.responsibilities} />
              <h3 className="text-2xl leading-6 font-semibold text-navy">Apply below:</h3>
              <JobApplicationForm jobTitle={job.title} />
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
