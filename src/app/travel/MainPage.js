"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";

export default function FeacherHeader(params) {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
  };
  return (
    <>
      <div className="header relative bg-[#eeeeee] z-5 h-full">
        <div
          className=" h-[full] absolute z-10 mt-10"
          style={{ opacity: "0.7", backgroundColor: "rgb(255, 255, 255)" }}
        />
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/artiom-vallat-558027-unsplash-1519757244-94.181.200.62-1920x1280.jpg",
              speed: 30,
            },
          ]}
          className=" bg-cover bg-center -z-1 absolute top-0 left-0 h-screen"
        />

        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="contanier">
            <div className="mb-4 container">
              <div className="text-center container">
                <h1 className="align-center font-bold display-1 text-[45px] text-gray-700 pb-2">
                  Travel With Us
                </h1>
                <p className="text-[#8d97ad] text-[18px] font-medium  mbr-text pb-3 mbr-fonts-style p-descr   display-5 ">
                  Explore the world in any direction
                </p>
                <div className="flex space-x-4">
                  <a
                    className="relative inline-flex items-center bg-white text-gray-800 py-3 px-6 rounded-md transition duration-500 border border-transparent hover:bg-transparent hover:border-white hover:text-white group"
                    href="https://mobirise.com"
                  >
                    <span className="">Learn More</span>
                    <span className="transition-opacity opacity-0   group-hover:opacity-100 delay-300">
                      <ArrowForwardIcon style={{ fontSize: "20px" }} />
                    </span>
                  </a>
                  <a
                    className="relative inline-flex items-center border border-white text-white py-3 px-6 rounded-md transition duration-1000 hover:bg-white hover:text-gray-800 group"
                    href="(link unavailable)"
                  >
                    <span className="">Let's Start</span>
                    <span className="transition-opacity opacity-0 group-hover:opacity-100 duration-1000 delay-300">
                      <ArrowForwardIcon style={{ fontSize: "20px" }} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Container maxWidth="lg" className="">
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
            <img src="https://mobirise.com/extensions/businessm4/travel-agency/assets/images/sho-hatakeyama-117306-unsplash-1200x800.jpg" />

            <div className="p-5 flex flex-col gap-3 items-center justify-center ">
              <p className="text-[#8d97ad]  font-[400]text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                ullam expedita ex eos qui autem.
              </p>
              <a
                href="#"
                className="text-[#1dc9cb] hover:underline mt-2 inline-block"
              >
                Read More →
              </a>
            </div>
            <img src="https://mobirise.com/extensions/businessm4/travel-agency/assets/images/luca-bravo-121931-unsplash-1200x800.jpg" />
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
                className=" text-[#1dc9cb] hover:underline mt-2 inline-block"
              >
                Read More →
              </a>
            </div>
            <img src="https://mobirise.com/extensions/businessm4/travel-agency/assets/images/khatam-tadayon-107740-1200x796.jpg" />
            <div className="p-5 flex flex-col gap-3 items-center justify-center">
              <p className="text-[#8d97ad] font-[400] text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                ullam expedita ex eos qui autem.
              </p>
              <a
                href="#"
                className="text-[#1dc9cb] hover:underline mt-2 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="p-20 container mx-auto">
            <p className="text-gray-500 text-[16px] font-[400] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              quam et quasi, dignissimos culpa rerum non corporis neque fuga
              nihil? Illo iure, nesciunt sunt fugiat vero tempora aspernatur
              iste, repudiandae? Molestias qui commodi, ut rerum recusandae,
              fugit cumque suscipit dolorem tenetur dolore, cupiditate
              voluptatibus. Mollitia dolorum, quae, doloribus, itaque
              dignissimos veritatis a amet aliquid cum veniam minus.
              Repudiandae, facilis, delectus?
            </p>
          </div>
        </Container>
      </div>

      <div className="py-10">
        <div className="header relative">
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://mobirise.com/extensions/businessm4/assets/images/background9-1920x1175.jpg",
                speed: 30,
              },
            ]}
            className=" aspect-[1/1] lg:aspect-[4/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
          />
          <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
            <div className="container mx-auto">
              <h1 className="font-bold text-center text-[50px] text-gray-600 pb-5">
                Do You Wanna Go ?
              </h1>

              <div className="contanier mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="flex  justify-center items-center w-full "
                >
                  <input
                    type="email"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-5  border-2 border-transparent focus:outline-none focus:border-green-500"
                  />
                  <button
                    type="submit"
                    className="bg-teal-400 text-white p-5  hover:bg-teal-700"
                  >
                    I WANT!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
