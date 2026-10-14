import type { Metadata } from "next";
import { ContentRows } from "@/components/sections/ContentRows";
import { PageHeader } from "@/components/sections/PageHeader";
import { p, type ContentRow } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in 2013, ZNB Construction offer the very best in concrete expertise, labour and finishing techniques across the UK.",
};

const rows: ContentRow[] = [
  [
    [
      p(`Established in ${site.foundedYear}, ${site.name} offer the very best in concrete expertise, labour and finishing techniques across the UK. Drawing on decades of specialist know-how and excellence in concrete services, we offer tailor made solutions to the Construction, Manufacturing and Infrastructure sectors. We are proud to be a family run business and consider that to be at the heart of everything we do. The safety of both our operatives and clients is also foremost in how we approach each job. We like to work smarter, not harder.`),
      p("Having successfully delivered many projects in the Manchester area in our early years, we began working further afield and quickly gained clients working on projects throughout the UK. We have ongoing relationships with Heyrod, Laing O’Rourke, Morrisroe and many more well known construction companies."),
    ],
    "/images/about/about-1.jpg",
  ],
  [
    "/images/about/about-2.jpg",
    [
      p("We take great pride in understanding the needs of our clients. We know that they need us to be reactive and precise. The material that we work with does not allow for us to make major adjustments after it is installed. Corrections after installation carry heavy costs and so we understand that we have to get it right first time. Our ability to deliver first time is what has earned us a strong reputation for reliability and afforded us the chance to work with the top construction companies in the country."),
      p("We have also garnered a strong reputation for our quick response time to “save a slab” emergency situations. Where concrete hasn’t been poured correctly, with honeycombing or imperfections in the finish, we can deliver swift, effective corrections saving you time and money."),
    ],
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <ContentRows rows={rows} imageAlt="ZNB Construction team on site" />
    </>
  );
}
