import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";
import HeroSection from "@/Components/Hero";
import BooksSection from "@/Components/BooksSection";
import FewThing from "@/Components/FewThing";
import Subscribe from "@/Components/Subscriobe";
import HeroPodcast from "@/Components/HeroPodcast";
import ImpactSection from "@/Components/ImpactSection";
import JoinTheCourse from "@/Components/JoinTheCourse";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FewThing />
      <ImpactSection />
      <BooksSection />
      <HeroPodcast />
      <JoinTheCourse />
      <Subscribe />
    </main>
  );
}
