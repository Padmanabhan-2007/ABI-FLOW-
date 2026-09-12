export type Instrument = {
  description: string;
  make: string;
  range: string;
  lc: string;
};

export const instruments: Instrument[] = [
  { description: "Precision Height Master", make: "Trimos", range: "0–600 mm", lc: "0.0001 mm" },
  { description: "Vernier Caliper", make: "Aerospace", range: "0–300 mm", lc: "0.01 mm" },
  { description: "Vernier Caliper", make: "Mitutoyo", range: "0–1000 mm", lc: "0.02 mm" },
  { description: "Digital Vernier Caliper", make: "Mitutoyo", range: "0–300 mm", lc: "0.02 mm" },
  { description: "Depth Micrometer", make: "Mitutoyo", range: "0–25 mm", lc: "0.01 mm" },
  { description: "External Micrometer", make: "Mitutoyo", range: "0–250 mm", lc: "0.01 mm" },
  { description: "External Micrometer", make: "Mitutoyo", range: "250–1000 mm", lc: "0.01 mm" },
  { description: "Granite Surface Plate", make: "Granite", range: "1000 × 1000 mm", lc: "Grade ‘0’" },
  { description: "Roughness Tester (Digital)", make: "Mitutoyo", range: "Surface finish", lc: "—" },
];
