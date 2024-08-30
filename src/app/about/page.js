import { ClassNames } from "@emotion/react";
import HeaderAbout, { MainConteant } from "./Header";
import Navbar from "./Navbar";
import Achievements, {
  CarouselWithParallax,
  TrantionCard,
} from "./Achievments";
import ContactSection from "./Contact";
import Footer from "./Footer";

export default function Page() {
  return (
    <div className="bg-[#f4f8fa]">
      <Navbar />
      <HeaderAbout />
      <MainConteant />
      <Achievements />
      <TrantionCard />
      <CarouselWithParallax />
      <ContactSection />
      <Footer />
    </div>
  );
}
