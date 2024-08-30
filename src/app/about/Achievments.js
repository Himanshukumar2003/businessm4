"use client";

import React from "react";
import { Container, Grid } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { ParallaxBanner } from "react-scroll-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/public/download4.jpeg";
const Achievements = () => {
  return (
    <Container className="py-10">
      <h1 className="header mb-10 text-center">Our Achievments</h1>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        className="text-center"
      >
        <Grid item xs={6} md={3} className="flex justify-center">
          <div className="flex items-center gap-4">
            <ThumbUpAltIcon
              className="text-blue-500"
              style={{ fontSize: 80 }}
            />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">46</span>
              <span className="text-gray-600">Completed projects</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} md={3} className="flex justify-center">
          <div className="flex items-center gap-4">
            <GroupIcon className="text-blue-500" style={{ fontSize: 80 }} />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">4</span>
              <span className="text-gray-600">Professional Workers</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} md={3} className="flex justify-center">
          <div className="flex items-center gap-4">
            <AccessTimeIcon
              className="text-blue-500"
              style={{ fontSize: 80 }}
            />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-gray-600">Hours of Work</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} md={3} className="flex justify-center">
          <div className="flex items-center gap-4">
            <SentimentSatisfiedAltIcon
              className="text-blue-500"
              style={{ fontSize: 80 }}
            />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">400</span>
              <span className="text-gray-600">Satisfied Clients</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Achievements;

export function CarouselWithParallax() {
  const images = [
    "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/1.png",
    "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/2.png",
    "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/3.png",
    "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/4.png",
    "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/5.png",
  ];

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };

  return (
    <>
      <div className=" relative">
        <div className="bg-gradient-to-r from-teal-400 to-blue-500  flex items-center justify-center z-10 absolute inset-0 opacity-70"></div>

        <ParallaxBanner
          layers={[{ image: "download4.jpeg", speed: 20 }]}
          className="aspect-[2/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full h-[400px] object-fit-cover"
        />
        <div className="absolute container mx-auto inset-0 z-10 h-full top-[25%]">
          <div className="contanier mx-auto">
            <h1 className="header mb-5 text-center text-white">
              Our Amazing Partners
            </h1>
            <div className="contanier mx-auto flex justify-between items-center flex-wrap">
              {images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt={`Slide ${index}`}
                  style={{ borderRadius: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function TrantionCard(params) {
  const testimonials = [
    {
      name: "John Smith",
      image:
        "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face1.jpg",
      title: "Managing Director",
      text: "Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.",
    },
    {
      name: "Amanda Adams",
      image:
        "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face3.jpg",
      title: "Managing Director",
      text: "Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.",
    },
    {
      name: "John Smith",
      image:
        "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face2-500x500.jpg",
      title: "Managing Director",
      text: "Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.",
    },
    {
      name: "Amanda Adams",
      image:
        "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face4-500x500.jpg",
      title: "Managing Director",
      text: "Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.",
    },
  ];
  return (
    <>
      <div className="py-10">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1  md:grid-cols-2  gap-5">
            {testimonials.map((item, index) => (
              <div className="bg-white shadow-sm rounded-lg p-5">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full w-16 h-16 object-cover z-50"
                  />
                  <span
                    className="
     text-lg
    py-2 pr-4 pl-[6.5rem] 
    ml-[-5.1rem] mb-0
    bg-gradient-to-r from-[#5eeebb] to-[#51aafa]
    rounded-tr-md rounded-br-md
    z-40 font-medium
    text-white
  "
                  >
                    {item.name}
                  </span>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <p className="text-[#8d97ad] text-[18px] font-medium">
                    {item.text}
                  </p>
                  <h3 className="font-semibold text-gray-600">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
