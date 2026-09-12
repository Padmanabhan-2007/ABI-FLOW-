export type Customer = {
  name: string;
  fullName: string;
  detail: string;
  location: string;
  relationship: string;
  sector: string;
};

// Prominently displaying verified full legal OEM corporate names
export const customers: Customer[] = [
  {
    name: "Flowserve India Controls",
    fullName: "Flowserve India Controls Pvt Ltd.",
    detail: "India Controls Pvt Ltd. · Severe-Service Valve Internals",
    location: "Tamil Nadu & Karnataka, India",
    relationship: "25 Years of Association",
    sector: "Oil & Gas / Severe-Service Flow Control",
  },
  {
    name: "Flowserve Gulf FZE",
    fullName: "Flowserve Gulf FZE, Dubai — UAE",
    detail: "Flowserve Gulf FZE, Dubai — UAE · Global Energy Flow Solutions",
    location: "Jebel Ali, Dubai — UAE",
    relationship: "International Energy OEM Partner",
    sector: "Oil & Gas / Severe-Service Valve Internals",
  },
  {
    name: "Flender Drives India",
    fullName: "Flender Drives India Pvt Ltd",
    detail: "Flender Drives India Pvt Ltd · Wind Turbine Drivetrain Systems",
    location: "Tamil Nadu, India",
    relationship: "Wind Generation Drivetrain Partner",
    sector: "Renewable Energy / Wind Turbine Applications",
  },
  {
    name: "MOGAS Industries India",
    fullName: "MOGAS Industries India Ltd.",
    detail: "MOGAS Industries India Ltd. · Severe Service Isolation Valves",
    location: "Gujarat, India",
    relationship: "Severe Service Component Partner",
    sector: "Critical Heavy-Wall Isolation Valves",
  },
  {
    name: "Bray Controls India",
    fullName: "Bray Controls India Pvt. Ltd.",
    detail: "Bray Controls India Pvt. Ltd. · High-Performance Butterfly Valves",
    location: "Gujarat & Tamil Nadu, India",
    relationship: "Flow Control Specialist Partner",
    sector: "High-Performance Butterfly & Ball Valves",
  },
];

export const clientCredentials = {
  flowserveAssociation: {
    years: 25,
    title: "25 Years of Association with Flowserve",
    subtitle: "Quarter-Century Enterprise Credibility",
    description:
      "Continuous long-term manufacturing partnership supplying critical valve internals, stems, plugs, and severe-service flow-control components with proven zero-defect reliability.",
  },
  partnershipCertificate: {
    years: 15,
    title: "15 Years Partnership Certificate",
    subtitle: "Formal Excellence Recognition",
    description:
      "Formally awarded partnership credential recognizing 15+ years of sustained manufacturing excellence, on-time delivery, and precision engineering adherence.",
  },
};
