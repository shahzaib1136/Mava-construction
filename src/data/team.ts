export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Surinder Pal Singh (Lucky)",
    role: "Project Manager",
    image: "/images/team/surinder-pal-singh.jpg",
    bio:
      "Surinder Pal Singh, AKA“Lucky” is the Project Manager of ZNB Construction Ltd. He has been working in the construction Industry for the past 15 years. Starting out as a basic concrete labourer, he quickly became a site supervisor. Owing to all his experience and hard work, he was given an opportunity to handle a major project in Manchester. While doing so he came up with the idea of opening his own company. Surinder and his wife set up ZNB Construction Ltd in 2013 and have been managing it ever since. Today they successfully handle many projects nationwide.",
  },
  {
    name: "Zobe Naheed",
    role: "Director",
    image: "/images/team/zobe-naheed.jpg",
    bio:
      "Zobe Naheed is the Director of ZNB Construction Ltd and has been working in the construction industry for the past 6 years. She holds a BSc Honours Degree in the computing field and using her qualifications has set up her own company in the construction industry along with her Husband Surinder Pal Singh. They now successfully undertake many projects for major well-known companies around the UK.",
  },
];
