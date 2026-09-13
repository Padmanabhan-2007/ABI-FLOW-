import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abiflow.com"),
  title:
    "ABI Flow Products (P) Ltd — Precision Components for Oil & Gas and Renewable Energy",
  description:
    "ABI Flow Products (P) Ltd is an ISO 9001:2015 certified precision engineering manufacturer with 44 years of experience, supplying machined valve internals, severe-service flow-control components, and wind turbine drivetrain parts to Flowserve, Flender Drives, Bray Controls, and MOGAS.",
  keywords: [
    "ABI Flow Products",
    "precision machining Chennai",
    "valve internals",
    "oil and gas flow control",
    "wind turbine components",
    "high-nickel alloys",
    "Flowserve partner",
    "Flender wind parts",
    "CNC machining Ambattur",
    "ISO 9001:2015 TÜV NORD",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ABI Flow Products (P) Ltd — Precision Engineering",
    description:
      "Precision machined components for Oil & Gas flow control and Renewable Energy wind generation. 44+ years of manufacturing excellence.",
    type: "website",
    images: [
      {
        url: "/images/abi-flow-logo.png",
        width: 1014,
        height: 725,
        alt: "ABI Flow Products (P) Ltd Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
