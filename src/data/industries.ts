import {
  Factory,
  Wind,
  Droplets,
  Flame,
  FlaskConical,
  Fan,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  vertical: string;
  icon: LucideIcon;
  blurb: string;
  link: string;
};

export const industries: Industry[] = [
  {
    name: "Oil & Gas",
    vertical: "Flow Control Vertical",
    icon: Flame,
    blurb: "Severe-service valve internals, high-nickel stems, and pipeline flow-control components.",
    link: "#products",
  },
  {
    name: "Wind Energy / Wind Turbine",
    vertical: "Renewable Energy Vertical",
    icon: Wind,
    blurb: "Gearbox, generator, and mechanical drive components for 0.5 MW – 3 MW turbines.",
    link: "#products",
  },
  {
    name: "Power Plant",
    vertical: "Energy Generation",
    icon: Factory,
    blurb: "High-pressure boiler and turbine stream isolation parts engineered for extreme duty cycles.",
    link: "#products",
  },
  {
    name: "Water Treatment",
    vertical: "Fluid Infrastructure",
    icon: Droplets,
    blurb: "Corrosion-resistant stainless and coated components for municipal and industrial water networks.",
    link: "#products",
  },
  {
    name: "Chemical & Petrochemical",
    vertical: "Aggressive Media",
    icon: FlaskConical,
    blurb: "Components engineered for sour gas, corrosive acids, and high-temperature hydrocarbon processing.",
    link: "#products",
  },
  {
    name: "HVAC & Thermal Systems",
    vertical: "Industrial Climate",
    icon: Fan,
    blurb: "Precision balancing and flow-regulation hardware for heavy commercial HVAC infrastructure.",
    link: "#products",
  },
];
