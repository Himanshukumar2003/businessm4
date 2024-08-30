"use client";
import React from "react";
import { Container, Grid } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Subtitles } from "@mui/icons-material";

const BusinessNews = () => {
  return (
    <>
      <Container maxWidth="xl" className="">
        <h2 className="font-[400] text-[28px] mb-4">Business News</h2>
        <p className="mb-6 text-[#8d97ad] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque
          laboriosam quam, <br /> consequuntur vero officiis molestias,
          inventore repellendus.
        </p>
        <div
          className="grid justify-center items-center grid-col-1 md:grid-cols-3 "
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <img src="https://mobirise.com/extensions/businessm4/assets/images/06.jpg" />

          <div className="p-5 flex flex-col gap-3 items-center justify-center ">
            <p className="text-[#8d97ad]  font-[400]text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              ullam expedita ex eos qui autem.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
          <img src="https://mobirise.com/extensions/businessm4/assets/images/07.jpg" />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <div className="p-5 flex flex-col gap-3 items-center justify-center">
            <p className="text-[#8d97ad]  font-[400]text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              ullam expedita ex eos qui autem.
            </p>
            <a
              href="#"
              className=" text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
          <img src="https://mobirise.com/extensions/businessm4/assets/images/05.jpg" />
          <div className="p-5 flex flex-col gap-3 items-center justify-center">
            <p className="text-[#8d97ad] font-[400] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              ullam expedita ex eos qui autem.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
          ={" "}
        </div>
      </Container>

      <div className="py-10">
        <div className="header relative">
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://png.pngtree.com/background/20230528/original/pngtree-8-best-free-mountain-background-images-4k-wallpapers-picture-image_2783525.jpg",
                speed: 30,
              },
            ]}
            className="Paralla bg-cover bg-center -z-1 absolute top-0 left-0 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 h-full p-4 md:p-10">
            <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-center  justify-center">
              <img
                src="https://mobirise.com/extensions/businessm4/assets/images/01.jpg"
                alt="Business News"
                className="rounded-lg shadow-lg w-full  max-w-md"
              />
              <div className="lg:ml-[-10rem] p-6 md:p-10 bg-white rounded-lg shadow-lg w-full lg:w-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center lg:text-left">
                  Our Journal
                </h1>
                <p className="text-gray-600 mb-4 text-sm md:text-base lg:text-[18px] font-[400] max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium, eveniet, magni possimus reiciendis Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Laudantium,
                  eveniet, magni possimus reiciendis Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Laudantium, eveniet, magni
                  possimus reiciendis Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Laudantium, eveniet, magni possimus
                  reiciendis
                </p>
                <a
                  href="https://mobirise.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessNews;
