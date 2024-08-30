"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Blog } from "../Header";
import Fotter from "../Footer";
import Navbar from "../Navbar";

export default function Testimonials(params) {
  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[{ image: "/download.jpg", speed: 10 }]}
          className=" aspect-[1/1] lg:aspect-[4/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading">Testimonials</h1>
          </div>
        </div>
      </div>
      <EmblaCarousel />
      <div>
        <h1 className=" text-[28px] text-center font-[400] pt-10">
          What Our Clients Say
        </h1>
        <TrantionCard />
      </div>

      <Blog />
      <Fotter />
    </>
  );
}
import React from "react";
import { TrantionCard } from "../about/Achievments";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="relative  bg-gradient-to-r from-teal-400 to-blue-500 py-10">
      <Container maxWidth="lg">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="conatanier mx-auto embla__slide flex-shrink-0 w-full ">
              <div className="flex flex-col items-center w-full justify-center py-12 px-6 text-white text-center">
                <p className="mb-8 text-lg font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae nostrum, quos voluptas fugiat blanditiis, temporibus
                  expedita cumque doloribus ea, officiis consequuntur repellat
                  minus ad veritatis? Testimonials Business Website Template!
                </p>
                <img
                  src="https://mobirise.com/extensions/businessm4/assets/images/face1.jpg"
                  alt="John Smith"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <div className="font-medium text-xl">John Smith</div>
                <div className="text-sm font-light">Project Client</div>
              </div>
            </div>
            <div className="embla__slide flex-shrink-0 w-full ">
              <div className="flex flex-col items-center w-full justify-center py-12 px-6  text-white text-center ">
                <p className="mb-8 text-lg font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae nostrum, quos voluptas fugiat blanditiis, temporibus
                  expedita cumque doloribus ea, officiis consequuntur repellat
                  minus ad veritatis? Testimonials Business Website Template!
                </p>
                <img
                  src="https://mobirise.com/extensions/businessm4/assets/images/face1.jpg"
                  alt="John Smith"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <div className="font-medium text-xl">John Smith</div>
                <div className="text-sm font-light">Project Client</div>
              </div>
            </div>
            <div className="embla__slide flex-shrink-0 w-full ">
              <div className="flex flex-col items-center w-full justify-center py-12 px-6 text-white text-center ">
                <p className="mb-8 text-lg font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae nostrum, quos voluptas fugiat blanditiis, temporibus
                  expedita cumque doloribus ea, officiis consequuntur repellat
                  minus ad veritatis? Testimonials Business Website Template!
                </p>
                <img
                  src="https://mobirise.com/extensions/businessm4/assets/images/face1.jpg"
                  alt="John Smith"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <div className="font-medium text-xl">John Smith</div>
                <div className="text-sm font-light">Project Client</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
