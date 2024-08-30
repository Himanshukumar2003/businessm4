"use client";
import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import MainFotter from "../Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordionData = [
  {
    title: "Accordions HTML Template",
    content:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Illum sed exercitationem reiciendis suscipit sunt enim, accordions business website ex debitis fuga dolorum aliquid ea libero atque optio. Molestiae ullam at, quasi alias.",
  },
  {
    title: "Accordions Business Website",
    content:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Illum sed exercitationem reiciendis suscipit sunt enim, accordions business website ex debitis fuga dolorum aliquid ea libero atque optio. Molestiae ullam at, quasi alias.",
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Illum sed exercitationem reiciendis suscipit sunt enim, accordions business website ex debitis fuga dolorum aliquid ea libero atque optio. Molestiae ullam at, quasi alias.",
  },
  {
    title: "Another Ipsum",
    content:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Illum sed exercitationem reiciendis suscipit sunt enim, accordions business website ex debitis fuga dolorum aliquid ea libero atque optio. Molestiae ullam at, quasi alias.",
  },
];

const AccordionFAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1546074340-daca667ee128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
              speed: 30,
            },
          ]}
          className=" aspect-[5/1] bg-cover object-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Accordion</h1>
          </div>
        </div>
      </div>
      <Navbar />
      <Container maxWidth="lg">
        <div className="py-10">
          <h2 className="text-4xl font-[400] text-center mb-2">
            Accordion FAQ
          </h2>
          <p className="text-center text-gray-500 m text-xl mb-10">
            Lorem Ipsum Dolor Sit Amet
          </p>

          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="mb-2  transition-all duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] outline-none  rounded-[10px]    border-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                className={`font-[500] text-gray-400  transition-all duration-300 p-1  ${
                  expanded === index ? "bg-blue-500 text-white" : ""
                }`}
              >
                <Typography className="display-5p pl-2 text-[21px]">
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="bg-white text-black">
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
      <CardWithTabs />
      <Blog />

      <MainFotter />
    </>
  );
};

export default AccordionFAQ;

export const CardWithTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const tabContent = [
    {
      title: "Tabs Business Website",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem laudantium in adipisci ipsa optio quas id excepturi non, eos cupiditate, necessitatibus sapiente illo error. Vero adipisci quidem aut itaque labore.",
      imageUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tabs Template",
      content:
        "Content for Tabs Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laudantium in adipisci ipsa optio quas id excepturi non, eos cupiditate, necessitatibus sapiente illo error. Vero adipisci quidem aut itaque labore.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/assets/images/06.jpg",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Content for Lorem Ipsum. Vero adipisci quidem aut itaque labore, eos cupiditate, necessitatibus sapiente illo error.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laudantium in adipisci ipsa optio quas id excepturi non, eos cupiditate, necessitatibus sapiente illo error. Vero adipisci quidem aut itaque labore.",
      imageUrl:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Another Tab",
      content:
        "Content for Another Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laudantium in adipisci ipsa optio quas id excepturi non, eos cupiditate, necessitatibus sapiente illo error. Vero adipisci quidem aut itaque labore.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/assets/images/01.jpg",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" className="py-10">
        <div className="bg-white  rounded-lg">
          <div className="mb-4 p-2 border-b-[2px] border-[#dee2e6]">
            <nav className="flex flex-wrap  justify-center lg:justify-start gap-2 lg:gap-0">
              {tabContent.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`text-lg px-6 py-4   border-[1px] border-[#dee2e6] hover:bg-[#f3f8fa] ${
                    selectedTab === index
                      ? " bg-[#f4f8fa] border-b-[0px]"
                      : "text-gray-600"
                  }`}
                >
                  Tab {index + 1}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-5 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div>
                <h3 className="font-[400] text-gray-800 text-3xl mb-6">
                  {tabContent[selectedTab].title}
                </h3>
                <p className="text-gray-600 mb-6 font-[400] text-[18px]">
                  {tabContent[selectedTab].content}
                </p>
                <p className="text-pink-500 font-medium mt-6 cursor-pointer hover:underline">
                  Read More →
                </p>
              </div>

              <img
                src={tabContent[selectedTab].imageUrl}
                alt={tabContent[selectedTab].title}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
