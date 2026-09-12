import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Customers } from "@/components/sections/Customers";
import { Certificate } from "@/components/sections/Certificate";
import { Products } from "@/components/sections/Products";
import { Industries } from "@/components/sections/Industries";
import { Facility } from "@/components/sections/Facility";
import { Quality } from "@/components/sections/Quality";
import { VisionMission } from "@/components/sections/VisionMission";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Customers />
        <Certificate />
        <Products />
        <Industries />
        <Facility />
        <Quality />
        <VisionMission />
        <Contact />
      </main>
    </>
  );
}
