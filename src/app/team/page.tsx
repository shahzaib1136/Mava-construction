import type { Metadata } from "next";
import { ContentRows } from "@/components/sections/ContentRows";
import { PageHeader } from "@/components/sections/PageHeader";
import { h2, img, text, type ContentColumn, type ContentRow } from "@/data/content";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind ZNB Construction.",
};

const [first, second] = team.map(
  (member): ContentColumn => [
    img(member.image, `${member.name}, ${member.role}`),
    h2(member.name),
    text(member.bio),
  ]
);
const rows: ContentRow[] = [[first, second]];

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Team" />
      <ContentRows rows={rows} imageAlt="" />
    </>
  );
}
