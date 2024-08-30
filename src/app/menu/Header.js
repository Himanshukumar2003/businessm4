"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Blog } from "../Header";
import Fotter from "../Footer";
export default function Header(params) {
  return (
    <>
      <div className="header relative">
        <ParallaxBanner
          layers={[{ image: "/download.jpg", speed: 10 }]}
          className=" aspect-[1/1] lg:aspect-[4/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading">
              Menu Template 1 for Business Website
            </h1>
          </div>
        </div>
      </div>
      <section className="card py-10 container mx-auto">
        <h1 className="menuHeading text-center">BusinessM4 menu blocks</h1>
        <div className=" grid  grid-cols-1 lg:grid-cols-2  gap-10 p-5">
          <div className="shadow-md">
            <img
              src="https://mobirise.com/extensions/businessm4/assets/images/menu2-1200x250.jpg"
              className="rounded-t-lg"
            />
            <div className="p-[2rem] flex gap-2 items-center justify-center   transition-all-.5 text-blue-500 font-medium hover:text-blue-700 hover:opacity-45">
              <p>Know more </p>
              <EastIcon />
            </div>
          </div>
          <div className="shadow-md">
            <img
              src="https://mobirise.com/extensions/businessm4/assets/images/menu1-1200x250.jpg"
              className="rounded-t-lg"
            />
            <div className="p-[2rem] flex gap-2 items-center justify-center   transition-all-.5 text-blue-500 font-medium hover:text-blue-700 hover:opacity-45">
              <p>Know more </p>
              <EastIcon />
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Fotter />
    </>
  );
}
