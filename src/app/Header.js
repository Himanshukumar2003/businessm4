"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download.jpg";
import { Container, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function HomeHeader(params) {
  return (
    <>
      <div className="header relative">
        <ParallaxBanner
          layers={[{ image: "/download.jpg", speed: 20 }]}
          className="Paralla aspect-[2/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <div className="p-5 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-20">
              <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-5 lg:gap-7">
                <div className="typed-text pb-3">
                  <h1 className="text-[24px] sm:text-[32px] lg:text-[50px] leading-tight sm:leading-snug lg:leading-[50px] text-black font-medium">
                    New BusinessM4 <br />
                    is
                    <span className="text-[#ff4f7b] font-bold">Responsive</span>
                  </h1>
                </div>
                <p className="text-gray-600 text-[14px] sm:text-[16px] lg:text-[21px] font-medium">
                  Clean, light, responsive theme with gradients and shadows.
                  Build websites to present your business and many more.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
                  <p className="btn ">
                    Buy Now
                    <ArrowForwardIcon className="btn-icon " />
                  </p>
                  <p className="btnTwo ">
                    View Demo
                    <ArrowForwardIcon className="btn-icon " />
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-full ">
                <img
                  src="https://mobirise.com/extensions/businessm4/assets/images/02.png"
                  alt="Business Illustration"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ManinSection(params) {
  return (
    <>
      <div className="">
        <img src="https://mobirise.com/extensions/businessm4/assets/images/polotnosm-2000x456.jpg" />
      </div>
      <div className="py-10">
        <Container maxWidth="lg">
          <section className="py-10">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <div className="flex justify-start flex-col gap-5">
                  <h2 className="">Home Page Examples</h2>
                  <h3 className="">
                    Combine various blocks to create your unique site! Please
                    check some examples of ready-made sites for inspiration.
                  </h3>
                  <div className="">
                    <button className="btn">
                      Buy Now
                      <ArrowForwardIcon className="btn-icon" />
                    </button>
                    <button className="btnTwo inline-block ">
                      View Demo
                      <ArrowForwardIcon className="btn-icon" />
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <div className="card ">
                      <div
                        className=" overflow-hidden flex  "
                        style={{ width: "100%" }}
                      >
                        <img
                          src="https://mobirise.com/extensions/businessm4/assets/images/94-676x1127.jpg"
                          alt="Mobirise"
                          title=""
                          className="rounded-sm shadow-lg object-contant"
                        />
                      </div>

                      <div className="card-box mt-10 ">
                        <h2 className="">Creative Agency</h2>
                        <h3 className="my-2">
                          This template is a site that presents a company that
                          has a graphic design business.
                        </h3>
                        <div className="">
                          <a className="links">
                            Read More <EastIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="card">
                      <div
                        className=" overflow-hidden flex  "
                        style={{ width: "100%" }}
                      >
                        <img
                          src="https://mobirise.com/extensions/businessm4/assets/images/13e-1-676x1127.jpg"
                          alt="Mobirise"
                          title=""
                          className="rounded-sm shadow-lg object-contant"
                        />
                      </div>

                      <div className="card-box mt-10 ">
                        <h2 className="">Travel Agency</h2>
                        <h3 className="my-2">
                          This template is a site that presents a travel company
                          that organizes tours and journeys worldwide.
                        </h3>
                        <div className="">
                          <a className="links">
                            Read More <EastIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>
        </Container>
      </div>
    </>
  );
}

const Blog = () => {
  const imageArray = [
    {
      heading: "Menu Blocks",
      url: "https://mobirise.com/extensions/businessm4/assets/images/menu-676x451.jpg",
    },
    {
      heading: "Headers",
      url: "https://mobirise.com/extensions/businessm4/assets/images/headers-676x451.jpg",
    },
    {
      heading: "Features",
      url: "https://mobirise.com/extensions/businessm4/assets/images/features-676x451.jpg",
    },
    {
      heading: "Images & Videos",
      url: "https://mobirise.com/extensions/businessm4/assets/images/content-676x451.jpg",
    },
    {
      heading: "Pricings",
      url: "https://mobirise.com/extensions/businessm4/assets/images/pricings-676x451.jpg",
    },
    {
      heading: "Pricings (Duplicate)",
      url: "https://mobirise.com/extensions/businessm4/assets/images/pricings-676x451.jpg",
    },
    {
      heading: "Testimonials",
      url: "https://mobirise.com/extensions/businessm4/assets/images/testim-676x451.jpg",
    },
    {
      heading: "Clients & Partners",
      url: "https://mobirise.com/extensions/businessm4/assets/images/clients-676x451.jpg",
    },
    {
      heading: "Accordions & Tabs",
      url: "https://mobirise.com/extensions/businessm4/assets/images/tabs-676x451.jpg",
    },
  ];

  return (
    <div className="py-10">
      <Container maxWidth="xl">
        <Container maxWidth="xl">
          <p
            className="text-center font-400 mb-5 }"
            style={{ fontSize: "35px" }}
          >
            Live Demos
          </p>
          <Grid container spacing={5}>
            {imageArray.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <div
                  className="card bg-white rounded-t-lg overflow-hidden"
                  style={{ boxShadow: "0px 0px 30px rgba(115, 128, 157, 0.1)" }}
                >
                  <img
                    src={item.url}
                    alt={item.heading}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="p-8  text-center">
                    <h2>{item.heading}</h2>
                    <a className="links">
                      Live Demo <EastIcon />
                    </a>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export { Blog };

export function Vedio(params) {
  return (
    <>
      <div className="py-10">
        <Container maxWidth="lg">
          <h2 className="text-center  }">BusinessM4 in action</h2>
          <div className="p-5">
            <iframe
              class="mbr-embedded-video"
              src="https://www.youtube.com/embed/Z2WZqgFcHPQ?si=0ejAcCx05uJGippC"
              width="100%"
              height="720"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>

          <div className="flex justify-center gap-5 items-center my-10">
            <button className="btn">
              Buy Now
              <ArrowForwardIcon className="btn-icon" />
            </button>
            <button className="btnTwo inline-block ">
              View Demo
              <ArrowForwardIcon className="btn-icon" />
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}
