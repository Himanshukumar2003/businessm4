"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import MainFotter from "../Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";

export default function Articles(params) {
  return (
    <>
      <Navbar />
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background9-1920x1175.jpg",
              speed: 30,
            },
          ]}
          className="aspect-[1/1] lg:aspect-[4/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Articles</h1>
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className="bg-white py-10 px-5 lg:px-20">
          <h1 className="text-xl lg:text-3xl text-center font-light text-gray-800">
            Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
          </h1>

          <p className="text-center text-lg lg:text-xl text-gray-500 mt-2">
            Articles Template for Business Website
          </p>

          <p className="text-gray-600 text-center mt-8 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quam et quasi, dignissimos culpa rerum non corporis neque fuga
            nihil? Illo iure, nesciunt sunt fugiat vero tempora aspernatur iste,
            repudiandae? Molestias qui commodi, ut rerum recusandae, fugit
            cumque suscipit dolorem tenetur dolore, cupiditate voluptatibus.
            Mollitia dolor, quae, doloribus, itaque dignissimos veritatis a amet
            aliquid cum veniam minus. Repudiandae, facilis, delectus?
          </p>

          <ul className="text-gray-600 mt-8 space-y-4 lg:text-lg">
            <li className="flex items-start">
              <span className="mr-2 text-[#188ef4] text-gradient-to-br from-[#188ef4] to-[#5eeebb] text-3xl leading-none">
                &#8226;
              </span>
              <p>
                <strong>Articles Business Website Template</strong> sit amet,
                consectetur adipisicing elit. Quisquam sapiente dolor,
                consectetur accusantium tempora beatae at ea rem optio, ratione
                voluptatibus itaque consequuntur.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#188ef4] text-gradient-to-br from-[#188ef4] to-[#5eeebb] text-3xl leading-none">
                &#8226;
              </span>
              <p>
                <strong>Lorem ipsum dolor</strong> sit amet, consectetur
                adipisicing elit. Quisquam sapiente dolor, consectetur
                accusantium tempora beatae at ea rem optio, ratione voluptatibus
                itaque consequuntur.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#188ef4] text-gradient-to-br from-[#188ef4] to-[#5eeebb] text-3xl leading-none">
                &#8226;
              </span>
              <p>
                <strong>Lorem ipsum dolor</strong> sit amet, consectetur
                adipisicing elit. Quisquam sapiente dolor, consectetur
                accusantium tempora beatae at ea rem optio, ratione voluptatibus
                itaque consequuntur.
              </p>
            </li>
          </ul>

          <div className="mt-8 lg:mt-16 text-gray-600 lg:text-lg">
            <blockquote className="italic border-l-4 border-gray-400 pl-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              facilis expedita cum iste voluptate itaque doloribus molestias
              numquam natus voluptates, molestiae tempora praesentium ratione
              dicta laudantium, excepturi voluptatibus, assumenda repellendus!
            </blockquote>
            <p className="mt-4 text-right">Amanda Adams</p>
          </div>

          <div className="mt-10 text-center flex justify-center gap-5">
            <button className="btn">LEARN MORE</button>
            <button className="btnTwo">LIVE DEMO</button>
          </div>
        </div>
      </Container>
      <Blog />
      <MainFotter />
    </>
  );
}
