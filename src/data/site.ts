export const site = {
  name: "ZNB Construction",
  legalName: "ZNB Construction Limited",
  tagline: "Local concrete service experts",
  phone: "+44 7733113812",
  phoneHref: "tel:+447733113812",
  officeTel: "0161 9146621",
  officeTelHref: "tel:01619146621",
  mobile: "07376798089",
  mobileHref: "tel:07376798089",
  email: "enquiries@znbconstruction.co.uk",
  emailHref: "mailto:enquiries@znbconstruction.co.uk",
  address: {
    line1: "32 Mersey Bank Avenue",
    city: "Manchester",
    postcode: "M21 7NN",
  },
  hours: "Monday – Friday: 08:00 – 17:30",
  companyNumber: "08684166",
  vatNumber: "210622464",
  foundedYear: 2013,
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    pinterest: "https://www.pinterest.co.uk/",
  },
} as const;

export const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Concrete Installation", href: "/services/concrete-installation" },
      { label: "Concrete Finishing", href: "/services/concrete-finishing" },
      { label: "Emergency Response", href: "/services/emergency-response" },
      { label: "Site Operative Supply", href: "/services/site-operative-supply" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
] as const;
