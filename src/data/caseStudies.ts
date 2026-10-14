export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  client: string;
  value: string;
  duration: string;
  image: string;
  summary: string;
  // Short teaser shown on listing cards (matches the reference's post excerpt).
  excerpt: string;
  description: string[];
  features: string[];
  // Project name shown before "Location:" in the details table.
  projectName: string;
  featuresHeading: string;
  // The reference formats each case study's copy slightly differently.
  descriptionHeadingBold: boolean;
  featuresAsList: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "x1-media-city-salford-quays-towers-1-2",
    title: "X1 Media City, Salford Quays Towers 1 & 2",
    location: "Salford Quays",
    client: "Vermont",
    value: "Approx £100 million",
    duration: "110 weeks",
    image: "/images/case-studies/x1-media-city.jpg",
    projectName: "X1 Media City, Towers 1 & 2",
    featuresHeading: "ZNB carried out the following concrete works on the scheme",
    descriptionHeadingBold: false,
    featuresAsList: false,
    excerpt:
      "X1 Media City, Towers 1 & 2 Location: Salford Quays Client: Vermont Value: Approx £100 million Duration: 110 weeks Project Description ZNB carried out the",
    summary:
      "ZNB carried out the concrete placing and finishing works for a single storey basement and two 27 storey residential towers within the heart of Media City in Salford Quays.",
    description: [
      "ZNB carried out the concrete placing and finishing works for a single storey basement and two 27 storey residential towers within the heart of Media City in Salford Quays.",
      "The identical towers comprise of 550 apartments offering panoramic views of the city. The project will also have retail space and a basement car park for 100 cars.",
      "The two structures have a combined basement formed by contiguous piled walls, with two independent towers constructed from podium level.",
    ],
    features: [
      "Capping Beam",
      "Basement foundation and slab construction",
      "RC Podium slab",
      "2nr 27 storey slip-formed cores",
      "Insitu column construction",
      "Placing and finishing 7500m3 of post tensioned concrete superstructure slabs",
    ],
  },
  {
    slug: "manchester-engineering-campus-development",
    title: "Manchester Engineering Campus Development",
    location: "Manchester",
    client: "Expanded",
    value: "£35 million",
    duration: "30 months",
    image: "/images/case-studies/mecd.jpg",
    projectName: "MECD, Booth Street, Manchester",
    featuresHeading: "Unique Features",
    descriptionHeadingBold: true,
    featuresAsList: true,
    excerpt:
      "MECD, Booth Street, Manchester Location: Manchester Client: Expanded Value: £35 million Duration: 30 months Project Description Awarded by repeat client Expanded (Laing O’Rourke), ZNB have",
    summary:
      "Awarded by repeat client Expanded (Laing O’Rourke), ZNB have been appointed for the concrete installation works to one of the single largest construction projects undertaken by any higher education institution in the UK.",
    description: [
      "Awarded by repeat client Expanded (Laing O’Rourke), ZNB have been appointed to for the concrete installation works to one of the single largest construction projects undertaken by any higher education institution in the UK.",
      "MECD is a £400+million investment by the University of Manchester with the project spanning over a 7 year period (2014-2021). When complete it will have eight floors and a floor space of over 76,000m² which is approximately 11 football pitches.",
      "The MECD concrete structure comprises of two individual grade three basements formed by contiguous piled walls separated by an existing live culvert.",
      "The eight storey superstructure consists of post tensioned slabs and four large cores. The south end of MECD will be constructed in structural steel, holocore planks and metal decks. In total 36,000m³ of concrete and over 4,500t of reinforcement was installed together with 46,000m² of falsework.",
    ],
    features: [
      "4No Large jump form cores – exposed finish",
      "2No grade 3 basements",
      "36,000 m³ of structural concrete",
      "Floor space 76,000m²",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
