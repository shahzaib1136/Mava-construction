import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ZNB Construction.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm />

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="flex items-center gap-2 text-[1.8rem] font-bold text-navy">
                  <Clock className="size-5" />
                  Opening Hours
                </h2>
                <p className="mt-2 text-[1.5rem] text-body">{site.hours}</p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-[1.8rem] font-bold text-navy">
                  <MapPin className="size-5" />
                  Address
                </h2>
                <p className="mt-2 text-[1.5rem] text-body">
                  {site.address.line1}
                  <br />
                  {site.address.city}
                  <br />
                  {site.address.postcode}
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-[1.8rem] font-bold text-navy">
                  <Mail className="size-5" />
                  Contact Details
                </h2>
                <ul className="mt-2 flex flex-col gap-1 text-[1.5rem] text-body">
                  <li className="break-all">
                    Email:{" "}
                    <a href={site.emailHref} className="text-brand hover:text-accent">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4" />
                    Office Tel:{" "}
                    <a href={site.officeTelHref} className="text-brand hover:text-accent">
                      {site.officeTel}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4" />
                    Mob:{" "}
                    <a href={site.mobileHref} className="text-brand hover:text-accent">
                      {site.mobile}
                    </a>
                  </li>
                </ul>
              </div>

              <p className="text-[1.3rem] text-muted">
                {site.legalName} is registered in England and Wales. Company No.{" "}
                {site.companyNumber}. VAT No {site.vatNumber}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
