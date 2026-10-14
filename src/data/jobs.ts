export type Job = {
  slug: string;
  title: string;
  type: string;
  salary: string;
  training: string;
  requirements: string[];
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    slug: "brick-layers-and-masons",
    title: "Brick Layers and Masons",
    type: "Full-Time",
    salary: "£31,000 per annum",
    training: "Training provided",
    requirements: [
      "Must have a minimum of 1 year experience in the construction industry",
      "Ability to work with manual or power tools and operate motorised vehicles",
      "English language must be spoken",
    ],
    responsibilities: [
      "Laying bricks and concrete",
      "Sealing any required foundations",
      "Using spirit levels and plumb lines to check building alignment",
      "Using hand and power tools",
      "Repairing and maintaining any required building blocks",
      "Working outdoors on construction sites in all weathers and height",
    ],
  },
  {
    slug: "air-conditioning-ac-fitter",
    title: "Air Conditioning (AC) Fitter",
    type: "Full-Time",
    salary: "£35K-42K per annum",
    training: "Training Provided",
    requirements: [
      "Must have a minimum of 2 year experience in ac fitting",
      "Must hold a diploma in ac fitting",
      "Ability to work with manual or power tools",
      "Ability to bend, stoop, kneel or stand for long stretches of time",
      "English language must be spoken",
    ],
    responsibilities: [
      "Installing domestic and commercial air conditioning",
      "Carry out maintenance checks",
      "Repairing air conditioning systems",
      "Working in all weather conditions and height",
      "Lifting heavy tools and objects",
    ],
  },
  {
    slug: "sales-administrator",
    title: "Sales Administrator",
    type: "Full-Time",
    salary: "£31,000 per annum",
    training: "Training provided",
    requirements: [
      "Minimum 1 year experience as Sales Administrator",
      "Degree Level qualification",
      "Must be fluent in English language",
    ],
    responsibilities: [
      "Receiving and processing purchase orders",
      "Issuing sales transaction invoices",
      "Dealing customer queries via phone/email and obtain any missing information",
      "Maintaining and updating records",
      "Compiling monthly sales reports",
      "Expediting orders through internal liaison",
      "Directing feedback from customers to relevant departments",
      "Supporting the sales department with other administrative tasks",
    ],
  },
];
