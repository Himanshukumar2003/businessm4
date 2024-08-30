"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
export default function Header(params) {
  return (
    <>
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mobirise.com/extensions/businessm4/assets/images/background9-1920x1175.jpg",
              speed: 30,
            },
          ]}
          className=" aspect-[1/1] lg:aspect-[5/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading">Headers</h1>
          </div>
        </div>
      </div>

      <section
        className="h-screen flex items-center"
        style={{ background: "linear-gradient(90deg, #2bdc9d, #51aafa)" }}
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Direct your business in the right direction
            </h1>
            <h3 className="text-[19px] font-[400] mb-8 text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, eveniet, magni possimus reiciendis.
            </h3>
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
      </section>
    </>
  );
}

export function HeaderFour(params) {
  return (
    <>
      <section className="h-screen bg-[#cfeef1] overflow-hidden flex justify-center items-center py-10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl  mb-4  text-[#3e4555] font-[300]">
                Grow up your small business
              </h1>
              <h3 className="text-xl text-gray-600 font-normal mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus corporis ipsum neque nostrum expedita
              </h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-pink-500 text-white py-3 px-6 rounded-md transition-all duration-500 hover:bg-pink-700 hover:border-pink-700 hover:text-white"
                >
                  DOWNLOAD NOW
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-teal-500 text-white py-3 px-6 rounded-md transition-all duration-500 hover:bg-[#138788] hover:border-[#138788] hover:text-white"
                >
                  CHECK FEATURES
                </a>
              </div>
            </div>
            <div className="lg:flex justify-center items-center mt-8 lg:mt-0">
              <img
                src="https://mobirise.com/extensions/businessm4/assets/images/01.jpg"
                alt="Mobirise"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="header-7">
        <div className="header-7 relative">
          <div
            className=""
            style={{
              backgroundColor: "black",
              opacity: "0.7",
              position: "absolute",
              height: "100%",
              top: "0",
              left: "0",
              right: "0",
              zIndex: "99",
            }}
          />
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://mobirise.com/extensions/businessm4/assets/images/background2.jpg",
                speed: 40,
              },
            ]}
            className="ParallaTwo aspect-[2/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
          />
          <div className="absolute inset-0 justify-center  h-full p-10 flex items-center opacity-[1] z-[999]">
            <div className="container mx-auto p-10 z-[999]">
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-10">
                <div className="w-full flex flex-col gap-10 text-white">
                  <h1 className="text-[50px] font-[400]">
                    Stay in touch wherever you been
                  </h1>
                  <p className="text-[18px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus corporis ipsum neque nostrum expeditacing elit.
                    Doloribus corporis ipsum neque nostrum neque nostrum
                    expeditacing elit. Doloribus corporis ipsum neque nostrum
                  </p>
                  <form
                    action="https://mobirise.com/"
                    method="post"
                    class="flex items-center"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address..."
                      required
                      className="p-5 rounded-l-md border border-gray-300 focus:outline-none flex-grow"
                    />
                    <button
                      type="submit"
                      class="bg-blue-500 text-white p-5 rounded-r-md hover:bg-blue-700"
                    >
                      GET NOTIFIED!
                    </button>
                  </form>
                </div>
                <div className="p-5">
                  <img
                    src="https://mobirise.com/extensions/businessm4/assets/images/05.jpg"
                    alt="Business image"
                    class="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
