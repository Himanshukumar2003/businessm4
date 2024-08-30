"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import MainFotter from "../Footer";
import Footer from "../travel/Footer";
import AboutFooter from "../about/Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";
import { FistFooter, SndFooter } from "./otherFooter";
import "./Footer.css";
export default function AllFotter(params) {
  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background3-1920x1080.jpg",
              speed: 30,
            },
          ]}
          className=" aspect-[5/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Footers</h1>
          </div>
        </div>
      </div>

      <FistFooter />
      <Footer />
      <SndFooter />
      <AboutFooter />
      <Blog />
      <MainFotter />
    </>
  );
}
