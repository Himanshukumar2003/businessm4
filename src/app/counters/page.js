"use client";
"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import MainFotter from "../Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";

import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Search, Mail, TrendingUp, Settings } from "@mui/icons-material";

const counters = [
  {
    icon: <Search fontSize="large" />,
    label: "LOREM IPSUM",
    increment: 0,
    incrementTwo: 0,
  },
  {
    icon: <Mail fontSize="large" />,
    label: "LOREM IPSUM",
    increment: 100,
  },
  {
    icon: <TrendingUp fontSize="large" />,
    label: "LOREM IPSUM",
    increment: 200,
  },
  {
    icon: <Settings fontSize="large" />,
    label: "LOREM IPSUM",
    increment: 300,
  },
];

function CounterAnimation() {
  const [counterValue, setCounterValue] = useState(1);
  const [counterValueTwo, setCounterValueTwo] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValue((prevCounterValue) => {
        if (prevCounterValue < 100) {
          return prevCounterValue + 1;
        } else {
          clearInterval(interval);
          return prevCounterValue;
        }
      });
    }, 2);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValueTwo((pre) => {
        if (pre < 300) {
          return pre + 1;
        } else {
          clearInterval(interval);
          return pre;
        }
      });
    }, 2);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=600",
              speed: 30,
            },
          ]}
          className=" aspect-[1/1] lg:aspect-[5/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading">Counters</h1>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="bg-[#f4f8fa] py-10">
          <div className=" max-w-5xl mx-auto ">
            <h4 className="text-4xl font-bold text-center  mb-4">
              Our Success
            </h4>
            <p className="text-center mb-8">
              Counters Template for Business Website, a beautiful tool to show
              your progress voluptatum consequatur delectus iusto quas,
              asperiores quasi excepturi cumque numquam.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
              {counters.map(({ icon, label, increment }, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <p className="text-blue-600">{icon}</p>
                  <h5 className="text-xl font-semibold mb-2">
                    <span
                      style={{
                        transition: "all 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "500",
                      }}
                    >
                      {counterValueTwo + increment}
                    </span>
                  </h5>
                  <p className="text-lg mb-2 ">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10">
          <Container maxWidth="lg">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 py-10">
              {counters.map(({ icon, label, increment }, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  {icon}
                  <h5 className="text-xl font-semibold mb-2">
                    <span
                      style={{
                        transition: "all 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "500",
                      }}
                    >
                      {counterValue + increment}
                    </span>
                  </h5>
                  <p className="text-lg mb-2 ">{label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      <Blog />
      <MainFotter />
    </>
  );
}

export default CounterAnimation;
