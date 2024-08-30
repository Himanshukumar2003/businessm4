"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import MainFotter from "../Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";
import { CarouselWithParallax } from "../about/Achievments";
import { Container } from "@mui/material";

export default function Clients(params) {
  const images = [
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/3.png",
      name: "Patner 3",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/4.png",
      name: "Patner 4",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/5.png",
      name: "Patner 5",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/1.png",
      name: "Patner 1",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/2.png",
      name: "Patner 2",
    },

    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/1.png",
      name: "Patner 1",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/2.png",
      name: "Patner 2",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/3.png",
      name: "Patner 3",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/4.png",
      name: "Patner 4",
    },
    {
      img: "https://mobirise.com/extensions/businessm4/assets/images/5.png",
      name: "Patner 5",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background15.jpg",
              speed: 30,
            },
          ]}
          className="aspect-[1/1] lg:aspect-[4/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Clients</h1>
          </div>
        </div>
      </div>
      <Container maxWidth="lg" className="">
        <div className="grid grid-col-12 lg:grid-cols-5">
          {images.map((item, index) => (
            <div
              key={index}
              className="p-5 flex flex-col gap-3 justify-center items-center text-gray-500 font-[500] text-[18px]"
            >
              <img
                className="text-black"
                src={item.img}
                alt={`Image ${index}`}
              />
              <p className="">{item.name}</p>
            </div>
          ))}
        </div>
      </Container>

      <CarouselWithParallax />
      <Blog />
      <MainFotter />
    </>
  );
}
