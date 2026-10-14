import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ZNB Construction.",
};

const mapQuery = encodeURIComponent(
  `${site.address.line1} ${site.address.city} ${site.address.postcode}`
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        aside={
          <iframe
            title={`Map showing ${site.address.line1}, ${site.address.city}`}
            src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=10&output=embed&iwloc=near`}
            loading="lazy"
            className="block h-76 w-full border-2 border-white"
          />
        }
      />
      <section className="boxed my-15 flex flex-col md:flex-row">
        <div className="w-full p-2.5 md:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full p-2.5 leading-6 md:w-1/3 [&_h2]:my-6 [&_h2]:text-2xl [&_h2]:leading-9 [&_h2]:font-bold [&_h2]:text-navy [&_p]:my-2.5">
          <h2>Opening Hours</h2>
          <p>{site.hours}</p>
          <h2>Address</h2>
          <p>
            {site.address.line1}
            <br />
            {site.address.city}
            <br />
            {site.address.postcode}
          </p>
          <p>
            Email:{" "}
            <a
              href={site.emailHref}
              className="text-navy [overflow-wrap:anywhere] outline-none hover:text-accent focus-visible:outline-2 focus-visible:outline-brand"
            >
              {site.email}
            </a>
            <br />
            Office Tel: <a href={site.officeTelHref}>{site.officeTel}</a>
            <br />
            Mob: <a href={site.mobileHref}>{site.mobile}</a>
          </p>
          <p>
            {site.legalName} is registered in England and Wales Company No. {site.companyNumber}
          </p>
          <p>VAT No {site.vatNumber}</p>
        </div>
      </section>
    </>
  );
}
