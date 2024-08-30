"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";

import { Blog } from "../Header";
import Fotter from "../Footer";
import Navbar from "../Navbar";
export default function Actions(params) {
  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background2.jpg",
              speed: 10,
            },
          ]}
          className=" aspect-[1/1] lg:aspect-[4/1] -z-1 absolute top-0 left-0 w-full  object-contain"
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white text-center">
              Call to Actions
            </h1>
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className=" flex flex-col items-center justify-center px-4   text-center bg-[#ffff] py-10">
          <h2 className="text-3xl font-[400] text-gray-800 mb-4">
            Save time and money, focus on development.
            <br />
            Professional templates that are easy to use.
          </h2>
          <p className="text-gray-500 mb-6  text-[18px]  font-[400]">
            Use call to action template blocks to draw your users' attention.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, qui
            nisi suscipit! Nesciunt, accusantium explicabo id totam quas rem
            pariatur quis temporibus porro ad tenetur qui, officiis libero.
            Alias, quis.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-400 transition ease-in-out delay-100 text-white font-medium py-[0.7rem] px-[1.2rem] rounded hover:bg-green-900">
              Join Us
            </button>
            <button className="border-gray-900 border-2   transition ease-in-out delay-100  text-gray-800 font-medium py-2 px-6 rounded hover:bg-gray-600 ">
              About Us
            </button>
          </div>
        </div>
      </Container>
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background8.jpg",
              speed: 10,
            },
          ]}
          className=" aspect-[1/1] lg:aspect-[4/1] -z-1 absolute top-0 left-0 w-full  object-contain"
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="flex flex-col  gap-5  items-center justify-center">
            <h1 className="menuHeading  text-center">
              Raise the level of your small business right now.
            </h1>
            <p className="text-[18px] font-400 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, qui
              nisi suscipit! Nesciunt,
              <br /> accusantium explicabo id totam quas rem pariatur quis
              temporibus porro ad tenetur qui, officiis libero. Alias, quis.
            </p>
            <p className="btn">Jion us</p>
          </div>
        </div>
      </div>
      <Container maxWidth="lg" className="py-10 justify-center">
        <div className="grid grid-cols-2 justify-center">
          <div className="flex flex-col  items-center gap-5">
            <h1 className=" ">
              Start today. Discover a new approach to doing busines
            </h1>
            <p className="text-gray-600 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              tempore maxime id, dicta ex.
            </p>
          </div>
          <div className="flex items-center">
            <button className="btnTwo">See More</button>
          </div>
        </div>
      </Container>
      <Blog />
      <Fotter />
    </>
  );
}
