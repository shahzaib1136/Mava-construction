import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in 2013, ZNB Construction offer the very best in concrete expertise, labour and finishing techniques across the UK.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="flex flex-col gap-6 text-[1.6rem] leading-8 text-body">
                <p>
                  Established in {site.foundedYear}, {site.name} offer the very best in concrete
                  expertise, labour and finishing techniques across the UK. Drawing on decades of
                  specialist know-how and excellence in concrete services, we offer tailor made
                  solutions to the Construction, Manufacturing and Infrastructure sectors. We are
                  proud to be a family run business and consider that to be at the heart of
                  everything we do. The safety of both our operatives and clients is also foremost
                  in how we approach each job. We like to work smarter, not harder.
                </p>
                <p>
                  Having successfully delivered many projects in the Manchester area in our early
                  years, we began working further afield and quickly gained clients working on
                  projects throughout the UK. We have ongoing relationships with Heyrod, Laing
                  O&rsquo;Rourke, Morrisroe and many more well known construction companies.
                </p>
              </div>
              <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px]">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="ZNB Construction operatives on site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="relative order-2 h-[280px] w-full overflow-hidden sm:h-[360px] lg:order-1">
                <Image
                  src="/images/about/about-2.jpg"
                  alt="ZNB Construction concrete finishing work"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="order-1 flex flex-col gap-6 text-[1.6rem] leading-8 text-body lg:order-2">
                <p>
                  We take great pride in understanding the needs of our clients. We know that
                  they need us to be reactive and precise. The material that we work with does
                  not allow for us to make major adjustments after it is installed. Corrections
                  after installation carry heavy costs and so we understand that we have to get
                  it right first time. Our ability to deliver first time is what has earned us a
                  strong reputation for reliability and afforded us the chance to work with the
                  top construction companies in the country.
                </p>
                <p>
                  We have also garnered a strong reputation for our quick response time to
                  &ldquo;save a slab&rdquo; emergency situations. Where concrete hasn&rsquo;t been
                  poured correctly, with honeycombing or imperfections in the finish, we can
                  deliver swift, effective corrections saving you time and money.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
