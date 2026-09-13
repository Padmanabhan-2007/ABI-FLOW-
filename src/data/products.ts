export type Component = {
  name: string;
  size: string;
  material: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  customer: string;
  sector: "Oil & Gas" | "Renewable";
  blurb: string;
  image?: string;
  imageAlt?: string;
  components: Component[];
};

export type WindSubcategory = {
  id: string;
  title: string;
  description: string;
  components: Component[];
};

export type WindGenerationVertical = {
  title: string;
  subtitle: string;
  customer: string;
  capacityRange: string;
  capacities: string[];
  applicationLabel: string;
  blurb: string;
  categories: WindSubcategory[];
};

// ==========================================
// VERTICAL 1: OIL & GAS / FLOW CONTROL
// ==========================================
export const oilAndGasProducts: ProductCategory[] = [
  {
    id: "plug-valve",
    title: "Plug Valve (Nordstrom)",
    customer: "Flowserve India Controls Pvt Ltd.",
    sector: "Oil & Gas",
    image: "/images/products/plug-valve-nordstrom.png",
    imageAlt: "Plug Valve (Nordstrom) precision-machined components",
    blurb:
      "Precision-machined plug valve internals for severe-service Nordstrom valves subjected to extreme pressures and sour gas environments.",
    components: [
      { name: "Plug Stem", size: '2" to 30"', material: "ASTM A322 Gr.4140" },
      { name: "Plug", size: '½" to 30"', material: "ASTM A322 Gr.4140" },
      { name: "Equalizer Ring", size: '2" to 30"', material: "ASTM A668 Gr.4140" },
      { name: "Cover", size: '2" to 30"', material: "ASTM A516 Gr.70" },
      { name: "Junk Ring", size: '2" to 30"', material: "ASTM A322 Gr.4140" },
    ],
  },
  {
    id: "slab-gate",
    title: "Slab Gate Valve",
    customer: "Flowserve India Controls Pvt Ltd.",
    sector: "Oil & Gas",
    image: "/images/products/slab-gate-valve.png",
    imageAlt: "Slab Gate Valve components",
    blurb:
      "Slab gate valve components finished to sub-micron tolerances with electroless nickel plating (ENP) for maximum abrasion and corrosion resistance.",
    components: [
      { name: "Slab Gate", size: '2" to 30"', material: "ASTM A516 Gr.70 + 0.003” ENP" },
      { name: "Seat Ring", size: '2" to 30"', material: "ASTM A105N + 0.003” ENP" },
      { name: "Bearing", size: '2" to 30"', material: "AISI SS316 + 0.003” ENP" },
      { name: "Bonnet", size: '2" to 30"', material: "ASTM A516 Gr.70" },
      { name: "Assy. Wedge", size: '2" to 30"', material: "ASTM A516 Gr.70 + 0.001” ENP" },
    ],
  },
  {
    id: "butterfly-valve",
    title: "High-Performance Butterfly Valve",
    customer: "Bray Controls India Pvt. Ltd. / Flowserve",
    sector: "Oil & Gas",
    image: "/images/products/butterfly-valve.png",
    imageAlt: "High-Performance Butterfly Valve components",
    blurb:
      "Critical valve internals manufactured from precipitation-hardened martensitic stainless steel and austenitic grades for zero-leakage flow isolation.",
    components: [
      { name: "Upper & Lower Stem", size: '2" to 24"', material: "ASTM A564 (17-4PH) Cond. H1075" },
      { name: "Backup Ring", size: '2" to 24"', material: "ASTM A276 — UNS S30400" },
      { name: "Gland", size: '2" to 24"', material: "AISI SS316" },
      { name: "Bearing", size: '2" to 24"', material: "AISI SS316 + Nitriding" },
    ],
  },
  {
    id: "gate-globe-check",
    title: "Gate, Globe & Check Valve",
    customer: "Flowserve India Controls Pvt Ltd.",
    sector: "Oil & Gas",
    image: "/images/products/gate-globe-check-valve.png",
    imageAlt: "Gate, Globe & Check Valve components",
    blurb:
      "Trim and body components engineered for high-pressure pipeline and manifold isolation across petrochemical installations.",
    components: [
      { name: "Disc", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Disc Nut", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Gland", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Back Seat", size: '2" to 30"', material: "Material as specified by customer" },
    ],
  },
  {
    id: "ball-valve",
    title: "Trunnion Ball Valve",
    customer: "Flowserve India Controls / MOGAS Industries India Ltd.",
    sector: "Oil & Gas",
    image: "/images/products/trunnion-ball-valve.png",
    imageAlt: "Trunnion Ball Valve components",
    blurb:
      "Precision heavy-wall trunnion-mounted ball valve structural components designed for high-stress pipeline transportation networks.",
    components: [
      { name: "Top Flange", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Trunnion", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Trunnion Plates", size: '2" to 30"', material: "Material as specified by customer" },
      { name: "Cover Flange", size: '2" to 30"', material: "Material as specified by customer" },
    ],
  },
];

// ==========================================
// VERTICAL 2: RENEWABLE ENERGY / WIND GENERATION
// ==========================================
export const windGenerationData: WindGenerationVertical = {
  title: "Wind Generation",
  subtitle: "Renewable Energy Component Manufacturing",
  customer: "Flender Drives India Pvt Ltd",
  capacityRange: "0.5 MW – 3 MW",
  capacities: ["0.5 MW", "2 MW", "3 MW"],
  applicationLabel: "Wind Turbine Applications",
  blurb:
    "Precision-machined gearbox, generator, and mechanical drive components for utility-scale wind turbine power generation across 0.5 MW to 3 MW platforms.",
  categories: [
    {
      id: "wind-parts",
      title: "Wind Parts",
      description:
        "Structural housing, dynamic bearing interfaces, and gearbox adaptor components manufactured to exact geometric concentricity.",
      components: [
        { name: "Bearing Cover", size: "Custom Ø per drawing", material: "Material as specified by customer" },
        { name: "Adapter Flange", size: "Custom Ø per drawing", material: "Material as specified by customer" },
        { name: "End Flange", size: "Custom Ø per drawing", material: "Material as specified by customer" },
      ],
    },
    {
      id: "generator-parts",
      title: "Generator Parts",
      description:
        "High-accuracy alignment rings and internal lubrication distribution guides for utility-scale nacelle generators.",
      components: [
        { name: "Oil Guide Ring", size: "Custom Ø per drawing", material: "Material as specified by customer" },
        { name: "Centring Ring", size: "Custom Ø per drawing", material: "Material as specified by customer" },
      ],
    },
    {
      id: "coupling-parts",
      title: "Coupling Parts",
      description:
        "Torque transmission locking rings and heavy-duty mechanical interfaces engineered for high torsional fatigue resistance.",
      components: [
        { name: "Two-Piece Locking Ring", size: "Custom Ø per drawing", material: "Material as specified by customer" },
        { name: "Torque Drive Rings", size: "Custom Ø per drawing", material: "Material as specified by customer" },
      ],
    },
  ],
};

// Consolidated categories for any generic category iteration
export const productCategories: ProductCategory[] = [
  ...oilAndGasProducts,
  {
    id: "wind-generation",
    title: "Wind Generation",
    customer: "Flender Drives India Pvt Ltd",
    sector: "Renewable",
    blurb:
      "Gearbox, generator, and drive components for utility-scale wind turbine power generation (0.5 MW – 3 MW).",
    components: [
      { name: "Bearing Cover", size: "Custom", material: "Material as specified by customer" },
      { name: "Adapter & End Flange", size: "Custom", material: "Material as specified by customer" },
      { name: "Two-Piece Locking Ring", size: "Custom", material: "Material as specified by customer" },
      { name: "Oil Guide & Centring Ring", size: "Custom", material: "Material as specified by customer" },
    ],
  },
];

// ==========================================
// MATERIAL CAPABILITY
// ==========================================
export const materialCapabilities = {
  headline: "Strong in High-Nickel Alloy Materials",
  lead:
    "Capable of handling a wide range of materials based on customer drawings and specifications — with proven expertise in severe-service alloys, stainless steels, and coated structural grades.",
  alloys: [
    {
      name: "High-Nickel & Super Alloys",
      grades: "Inconel 625 / 718, Monel 400 / K500, Hastelloy C-276",
      note: "Extreme corrosion & high-temperature resistance for sour-gas and aggressive chemical flow.",
    },
    {
      name: "Precipitation-Hardening Steels",
      grades: "ASTM A564 (17-4PH Cond. H1075 / H1150)",
      note: "Superior yield strength and stress corrosion resistance for high-load valve stems and shafts.",
    },
    {
      name: "Austenitic & Duplex Stainless Steels",
      grades: "AISI SS316 / 316L, SS304, Duplex 2205, Super Duplex 2507",
      note: "Marine, offshore, and corrosive process isolation valve components.",
    },
    {
      name: "High-Strength Alloy & Carbon Steels",
      grades: "ASTM A322 Gr. 4140, ASTM A668 Gr. 4140, ASTM A516 Gr. 70, ASTM A105N",
      note: "Heavy-duty structural integrity for severe-service plug valves, slab gates, and flanges.",
    },
  ],
  surfaceTreatments: [
    "Electroless Nickel Plating (ENP 0.001” to 0.003”)",
    "Plasma / Gas Nitriding for enhanced surface hardness",
    "Customer-specified protective coatings and heat treatments",
  ],
};
