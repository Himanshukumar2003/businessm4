"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CameraIcon from "@mui/icons-material/Camera";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import WorkIcon from "@mui/icons-material/Work";

export default function FeaturesHeader(params) {
  return (
    <>
      <div className="header relative">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600",
              speed: 30,
            },
          ]}
          className=" aspect-[1/1] lg:aspect-[5/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Features</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export function SimpleCard() {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto p-5">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <div
                className="p-6 shadow-md rounded-lg text-center bg-white"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <EmailIcon className="text-[75px] text-[#1dc9cb]" />
                <h3 className="mt-4 text-xl font-semibold">Lorem Ipsum</h3>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div
                className="p-6 shadow-md rounded-lg text-center bg-white"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <FolderIcon className="text-[75px] text-[#1dc9cb] " />
                <h3 className="mt-4 text-xl font-semibold">Lorem Ipsum</h3>
                <p className="mt-2 text-gray-600 text-[18px]">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div
                className="p-6 shadow-md rounded-lg text-center bg-white"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <ImageIcon className="text-[75px] text-[#1dc9cb] " />
                <h3 className="mt-4 text-xl font-semibold">Lorem Ipsum</h3>
                <p className="mt-2 text-gray-600 text-[18px]">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div
                className="p-6 shadow-md rounded-lg text-center bg-white"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <ThumbUpIcon className="text-[75px] text-[#1dc9cb] " />
                <h3 className="mt-4 text-xl font-semibold">Lorem Ipsum</h3>
                <p className="mt-2 text-gray-600 text-[18px]">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <section className="py-10 ">
        <div className="grid grid-cols-1 gap-3 justify-center md:gap-0 sm:grid-cols-2 md:grid-cols-3 p-5">
          <div className="bg-[#1dc9cb] p-[60px] shadow-lg">
            <h4 className="text-white text-2xl font-semibold mb-4">
              Retargeting Market
            </h4>
            <p className="text-white text-base mb-6">
              Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
              dolore tumber tur adipisicing elit.
            </p>
            <div>
              <a
                className="text-white underline text-lg"
                href="https://mobirise.com"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#188ef4] p-[60px] shadow-lg">
            <h4 className="text-white text-2xl font-semibold mb-4">
              Fruitful Results
            </h4>
            <p className="text-white text-base mb-6">
              Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
              dolore tumber tur adipisicing elit.
            </p>
            <div>
              <a
                className="text-white underline text-lg"
                href="https://mobirise.com"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#ff695c] p-[60px] shadow-lg">
            <h4 className="text-white text-2xl font-semibold mb-4">
              Instant Solutions
            </h4>
            <p className="text-white text-base mb-6">
              Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
              dolore tumber tur adipisicing elit.
            </p>
            <div>
              <a
                className="text-white underline text-lg"
                href="https://mobirise.com"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Grids(params) {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center" className="p-5">
            <Grid item xs={12} md={8}>
              <h1 className="text-gray-800">
                Features Business Website Template
              </h1>
              <p className="text-gray-600 mt-4">
                Click any text or icon to edit or style it. Use the block
                parameters to hide/show text or icons and change media size or
                position.
              </p>
              <Grid container spacing={4} className="mt-8">
                <Grid item xs={12} sm={6}>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="text-blue-500 p-2">
                        <MarkEmailReadIcon className="text-[50px]" />
                      </div>
                      <h3 className=" text-gray-800 font-[500] text-[20px]">
                        Up your sales
                      </h3>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quia unde dicta eum saepe aperiam accusamus animi
                        sapiente.
                      </p>
                      <a
                        href="#"
                        className="text-blue-500 hover:underline mt-2 inline-block"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="text-blue-500">
                        <WorkIcon className="text-[50px]" />
                      </div>
                      <h3 className=" font-[500] text-[20px] text-gray-800 ">
                        Help with documents
                      </h3>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quia unde dicta eum saepe aperiam accusamus animi
                        sapiente.
                      </p>
                      <a
                        href="#"
                        className="text-blue-500 hover:underline mt-2 inline-block"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={4}>
              <img
                src="https://mobirise.com/extensions/businessm4/assets/images/09.jpg"
                alt="Office"
                className="rounded-lg shadow-lg w-full h-[400px]"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="pt-20 pb-10">
        <div className="container mx-auto p-5">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} className="">
              <div
                className="bg-white p-10 rounded-lg  relative mb-5"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <div className="absolute p-5 rounded-full bg-[#1dc9cb] -top-[30px] text-white ">
                  <CameraIcon />
                </div>
                <div className="py-2">
                  <h2 className="text-[18px]  mb-2 text-[#000000]  font-medium ">
                    Retargeting Market
                  </h2>
                  <p className="text-[#8d97ad] text-[18px]">
                    Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                    et dolore tumber tur adipisicing elit
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="">
              <div
                className="bg-white p-10 rounded-lg  relative mb-5"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <div className="absolute p-5 rounded-full bg-[#1dc9cb] -top-[30px] text-white ">
                  <AddReactionIcon />
                </div>
                <div className="py-2">
                  <h2 className="text-[18px]  mb-2 text-[#000000]  font-medium ">
                    Retargeting Market
                  </h2>
                  <p className="text-[#8d97ad] text-[18px]">
                    Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                    et dolore tumber tur adipisicing elit
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="">
              <div
                className="bg-white p-10 rounded-lg  relative mb-5"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <div className="absolute p-5 rounded-full bg-[#1dc9cb] -top-[30px] text-white ">
                  <AudioFileIcon />
                </div>
                <div className="py-2">
                  <h2 className="text-[18px]  mb-2 text-[#000000]  font-medium ">
                    Retargeting Market
                  </h2>
                  <p className="text-[#8d97ad] text-[18px]">
                    Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                    et dolore tumber tur adipisicing elit
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="py-10 md:py-20 lg:py-30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5 lg:p-0 ">
            <div
              className="p-5 md:p-7 lg:p-10 rounded-xl shadow-emerald-50  w-full"
              style={{
                background: "linear-gradient(45deg, #8d97ad, #098484)",
              }}
            >
              <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 items-center justify-center">
                <h1 className="text-white ">Retargeting Market</h1>
                <p className="text-white">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-white hover:underline mt-2 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div
              className="p-5 md:p-7 lg:p-10 rounded-xl shadow-emerald-50 w-full"
              style={{ background: "linear-gradient(45deg, #ff695c, #306)" }}
            >
              <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 items-center justify-center">
                <h1 className="text-white ">Retargeting Market</h1>
                <p className="text-white">
                  Lorem ipsum dolor amet, consecte tempor incididunt ut labore
                  et dolore tumber tur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-white hover:underline mt-2 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
