export type MachineSpec = {
  label: string;
  value: string;
};

export type Machine = {
  id: string;
  make: string;
  model?: string;
  machine: string;
  capacity: string;
  qty: string;
  category: "CNC Multi-Tasking" | "Horizontal Machining" | "Vertical Turning" | "VMC 4th-Axis" | "Precision Grinding" | "Conventional & Tooling" | "Metrology & CMM";
  specs?: MachineSpec[];
  description?: string;
  image?: string;
};

export type Highlight = {
  id: string;
  name: string;
  model: string;
  type: string;
  manufacturer?: string;
  specs: MachineSpec[];
  capacity?: string;
  description?: string;
  image?: string;
};

// Bento Highlight Machines & Metrology (Featured Units)
export const machineHighlights: Highlight[] = [
  {
    id: "mazak-integrex-i350h",
    name: "MAZAK Integrex",
    model: "i-350H",
    type: "Multi-Tasking CNC Machining Center",
    specs: [
      { label: "Max. Machining Dia", value: "670 mm" },
      { label: "Max. Machining Length", value: "1011 mm" },
      { label: "Main Spindle Speed", value: "4000 rpm" },
      { label: "Milling Spindle", value: "12000 rpm · B-Axis 240°" },
    ],
    description:
      "Advanced 5-axis multi-tasking facility integrating turning and C-axis/B-axis milling for high-nickel severe-service valve internals in a single chucking operation.",
    image: "/images/machinery/mazak-integrex.jpg",
  },
  {
    id: "mazak-hmc-hcn6800l",
    name: "MAZAK HCN-6800L",
    model: "HCN-6800L",
    type: "Horizontal Machining Centre (HMC)",
    manufacturer: "Yamazaki Mazak",
    specs: [
      { label: "Pallet Size", value: "630 × 630 mm" },
      { label: "Tool Shank", value: "BT50" },
      { label: "Maximum Spindle Speed", value: "10,000 rpm" },
      { label: "X-Axis Travel", value: "1,050 mm" },
      { label: "Y-Axis Travel", value: "900 mm" },
      { label: "Z-Axis Travel", value: "980 mm" },
      { label: "Maximum Workpiece Size", value: "Ø1050 × 1300 mm" },
      { label: "Pallet Changer", value: "2 pallet changer" },
      { label: "Standard Spindle", value: "37 kW / 50 HP, 30-minute rating" },
      { label: "Maximum Torque", value: "350 N·m" },
    ],
    description:
      "High-rigidity horizontal machining centre for precision machining of large and demanding components.",
    image: "/images/machinery/mazak-hcn-8800l.png",
  },
  {
    id: "cmm-accurate-cordimesur",
    name: "CMM — Accurate",
    model: "Cordimesur CNC",
    type: "Coordinate Measuring Machine (CNC Metrology)",
    specs: [
      { label: "Measuring Range", value: "1000 × 2000 × 800 mm" },
      { label: "Accuracy", value: "2.5 + L/350 µm" },
      { label: "Repeatability", value: "0.002 mm (2 µm)" },
      { label: "Mode", value: "Fully CNC controlled" },
    ],
    description:
      "Precision climate-controlled CNC Coordinate Measuring Machine providing automated geometric validation and sub-micron inspection for all critical dimensions before dispatch.",
    image: "/images/machinery/cmm-metrology.jpg",
  },
];

// Complete verified machinery fleet
export const machinery: Machine[] = [
  {
    id: "bfw-pl-500",
    make: "BFW — PL 500",
    model: "PL 500",
    machine: "CNC Horizontal Turning Centre",
    capacity: "Max. Turning Dia 500mm × 600mm",
    qty: "2",
    category: "CNC Multi-Tasking",
    specs: [
      { label: "Max Turning Diameter", value: "500 mm" },
      { label: "Turning Length", value: "600 mm" },
      { label: "Machine Type", value: "Horizontal CNC Turning" },
    ],
    description: "High-precision horizontal turning for valve stems, plugs, and flow-control rings.",
    image: "/images/machinery/cnc-turning.webp",
  },
  {
    id: "bfw-pl-500-ex",
    make: "BFW — PL 500 EX",
    model: "PL 500 EX",
    machine: "CNC Horizontal Turning Centre",
    capacity: "Max. Turning Dia 750mm × 600mm",
    qty: "1",
    category: "CNC Multi-Tasking",
    specs: [
      { label: "Max Turning Diameter", value: "750 mm" },
      { label: "Turning Length", value: "600 mm" },
      { label: "Machine Type", value: "Extended Turning Center" },
    ],
    description: "Extended-diameter CNC horizontal turning for large-bore valve trims and covers.",
    image: "/images/machinery/cnc-turning.webp",
  },
  {
    id: "bfw-bvl-800h",
    make: "BFW — BVL 800H",
    model: "BVL 800H",
    machine: "CNC Vertical Turning Lathe",
    capacity: "Max. Turning Dia 800mm × 850mm",
    qty: "1",
    category: "Vertical Turning",
    specs: [
      { label: "Max Turning Diameter", value: "800 mm" },
      { label: "Turning Height", value: "850 mm" },
      { label: "Configuration", value: "Vertical Turning Lathe (VTL)" },
    ],
    description: "Heavy-duty vertical turning lathe for large flanges, trunnion covers, and wind bearing rings.",
    image: "/images/machinery/cnc-turning.webp",
  },
  {
    id: "lmw-jv-kraft",
    make: "LMW — JV Kraft",
    model: "JV Kraft (4th Axis)",
    machine: "Vertical Machining Centre (4th Axis)",
    capacity: "X-800, Y-450, Z-600 mm",
    qty: "3",
    category: "VMC 4th-Axis",
    specs: [
      { label: "X-Axis Travel", value: "800 mm" },
      { label: "Y-Axis Travel", value: "450 mm" },
      { label: "Z-Axis Travel", value: "600 mm" },
      { label: "Axis Configuration", value: "4-Axis CNC Rotary Table" },
    ],
    description: "High-speed 4th-axis VMC for intricate milling of valve wedges, lock rings, and contoured flow cavities.",
    image: "/images/machinery/vmc-machining.webp",
  },
  {
    id: "bfw-65-plus",
    make: "BFW — 65+",
    model: "65+ (4th Axis)",
    machine: "Vertical Machining Centre (4th Axis)",
    capacity: "X-1280, Y-700, Z-650 mm",
    qty: "2",
    category: "VMC 4th-Axis",
    specs: [
      { label: "X-Axis Travel", value: "1280 mm" },
      { label: "Y-Axis Travel", value: "700 mm" },
      { label: "Z-Axis Travel", value: "650 mm" },
      { label: "Axis Configuration", value: "Heavy-Duty 4-Axis VMC" },
    ],
    description: "Large-envelope 4th-axis machining centre handling high-nickel alloy components and turbine adapters.",
    image: "/images/machinery/vmc-machining.webp",
  },
  {
    id: "kent-surface-grinding",
    make: "Kent",
    model: "Precision Surface Grinder",
    machine: "Surface Grinding",
    capacity: "X-1700, Y-600, Z-500 mm",
    qty: "1",
    category: "Precision Grinding",
    specs: [
      { label: "Working Envelope", value: "1700 × 600 × 500 mm" },
      { label: "Operation", value: "High-Flatness Surface Finishing" },
    ],
    description: "Flatness grinding for valve bonnet mating surfaces, slab gate faces, and precision spacer plates.",
    image: "/images/machinery/precision-grinding.webp",
  },
  {
    id: "wendt-rotary-grinding",
    make: "Wendt",
    model: "Rotary Surface Grinder",
    machine: "Rotary Grinding",
    capacity: "X-1200, Y-600, Z-600 mm",
    qty: "1",
    category: "Precision Grinding",
    specs: [
      { label: "Working Envelope", value: "1200 × 600 × 600 mm" },
      { label: "Operation", value: "Rotary Table High-Finish Grinding" },
    ],
    description: "Rotary surface grinding for parallel face finishing of sealing rings, disc seats, and thrust collars.",
    image: "/images/machinery/precision-grinding.webp",
  },
  {
    id: "wmw-cylindrical-grinding",
    make: "WMW",
    model: "External Cylindrical Grinder",
    machine: "Cylindrical Grinding",
    capacity: "Max Grinding Dia 350mm × 1000mm",
    qty: "1",
    category: "Precision Grinding",
    specs: [
      { label: "Max Grinding Diameter", value: "350 mm" },
      { label: "Max Grinding Length", value: "1000 mm" },
      { label: "Operation", value: "High-Precision OD Cylindrical" },
    ],
    description: "Sub-micron cylindrical finishing for valve stems, shafts, and bearing diameters.",
    image: "/images/machinery/precision-grinding.webp",
  },
  {
    id: "eifco-pillar-drilling",
    make: "EIFCO",
    model: "Heavy-Duty Pillar",
    machine: "Pillar Drilling",
    capacity: '1½" Capacity',
    qty: "2",
    category: "Conventional & Tooling",
    specs: [
      { label: "Drilling Capacity", value: '1½" (38 mm)' },
      { label: "Operation", value: "Precision Tapping & Heavy Drilling" },
    ],
    description: "Tooling and pre-machining drilling operations for auxiliary hardware.",
    image: "/images/machinery/tooling.webp",
  },
  {
    id: "turner-lathe",
    make: "Turner",
    model: "Heavy-Duty Center Lathe",
    machine: "Lathe",
    capacity: "7½ ft Lathe",
    qty: "1",
    category: "Conventional & Tooling",
    specs: [
      { label: "Bed Length", value: "7½ ft (2286 mm)" },
      { label: "Operation", value: "Rough Turning & Facing" },
    ],
    description: "Heavy conventional center lathe for initial billet preparation and stock turning.",
    image: "/images/machinery/tooling.webp",
  },
];
