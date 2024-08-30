"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "/public/download3.jpeg";
import { Container, Grid, Icon } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SettingsIcon from "@mui/icons-material/Settings";
const Client = [
  {
    name: "Amanda Adams",
    title: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image:
      "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face2.jpg",
  },
  {
    name: "Joseph Kellen",
    title: "Real Estate",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image:
      "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face1.jpg",
  },
  {
    name: "Nick Dimon",
    title: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image:
      "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face4.jpg",
  },
  {
    name: "Steve Elliott",
    title: "Founder",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image:
      "https://mobirise.com/extensions/businessm4/creative-agency/assets/images/face3.jpg",
  },
];
export default function HeaderAbout(params) {
  const services = [
    {
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cupiditate delectus.",
      icon: <CreditCardIcon />,
    },
    {
      title: "Illustration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cupiditate delectus.",
      icon: <PhotoCameraBackIcon />,
    },
    {
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cupiditate delectus.",
      icon: <AppleIcon />,
    },
  ];

  return (
    <>
      <div className="header relative bg-[#eeeeee] -z-5 h-full">
        <div
          className=" h-[full] absolute z-10 mt-10"
          style={{ opacity: "0.7", backgroundColor: "rgb(255, 255, 255)" }}
        />
        <ParallaxBanner
          layers={[{ image: "download3.jpeg", speed: 30 }]}
          className="ParallaTwo aspect-[2/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full h-full"
        />

        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="contanier">
            <div className="mb-4 container">
              <div className="text-center container">
                <h1 className="align-center display-1 text-[45px] font-light pb-2">
                  We are creative agency
                </h1>
                <p className="text-[#8d97ad] text-[18px] font-medium  mbr-text pb-3 mbr-fonts-style p-descr   display-5 ">
                  Our professional team of designers will help you to create a
                  unique image of your company,
                  <br /> which will distinguish it from competitors and attract
                  new customers.
                </p>
              </div>
            </div>

            <div className="container py-10">
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} className="">
                    <div className="bg-white p-10 rounded-lg shadow-[rgba(17, 17, 26, 0.1) 0px 0px 16px] relative mb-5">
                      <div className="absolute p-5 rounded-full bg-blue-500 -top-[30px] text-white ">
                        {service.icon}
                      </div>
                      <div className="py-2">
                        <h2 className="text-[18px]  mb-2 text-[#000000]  font-medium ">
                          {service.title}
                        </h2>
                        <p className="text-[#8d97ad] text-[18px]">
                          {service.description}
                        </p>
                      </div>
                      <a
                        href="#"
                        className="text-blue-500 mt-4 inline-block hover:text-blue-700"
                      >
                        Read More →
                      </a>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function MainConteant(params) {
  const servicesTwo = [
    { title: "Lorem Ipsum", icon: <SearchIcon style={{ fontSize: "70px" }} /> },
    {
      title: "Lorem Ipsum",
      icon: <BusinessCenterIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <AutoFixHighIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <ShowChartIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <ThumbUpIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <RocketLaunchIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <LocalPrintshopIcon style={{ fontSize: "70px" }} />,
    },
    {
      title: "Lorem Ipsum",
      icon: <SettingsIcon style={{ fontSize: "70px" }} />,
    },
  ];
  return (
    <>
      <section className="py-10">
        <Container maxWidth="lg">
          <Grid container spacing={4} className="main-row">
            <Grid item xs={12} lg={6} className="text-content mb-4">
              <h2 className="mb-4  heading">About Us</h2>
              <h3 className="text-[18px] mb-4 font-[300]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                perferendis laborum sed rerum, asperiores, unde obcaecati.
              </h3>

              <ul className="flex flex-col gap-2 text-[18px] font-[400] text-gray-700">
                <li className="flex item-center gap-2">
                  <EastIcon className="text-blue-500   hover:text-blue-700" />
                  <p> Lorem ipsum dolor sit amet</p>
                </li>
                <li className="flex item-center gap-2">
                  <EastIcon className="text-blue-500   hover:text-blue-700" />
                  <p> Lorem ipsum dolor sit amet</p>
                </li>
                <li className="flex item-center gap-2">
                  <EastIcon className="text-blue-500   hover:text-blue-700" />
                  <p> Lorem ipsum dolor sit amet</p>
                </li>
              </ul>

              <div className="align-left pt-3">
                <a
                  href="#"
                  className="text-blue-500 mt-4  hover:text-blue-700 flex items-center gap-2"
                >
                  <p>Read More</p> <EastIcon />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://mobirise.com/extensions/businessm4/creative-agency/assets/images/07.jpg"
                alt="Mobirise"
                className="w-full rounded-[.25rem] shadow-lg"
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <p className="heading text-center mb-2">The services we offer you</p>
          <p className="text-center text-gray-500 mb-8">
            Lorem ipsum dolor amet, consecte tempor incididunt
          </p>
          <Grid container spacing={4}>
            {servicesTwo.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className="group bg-white p-6 rounded-lg shadow-lg text-center hover:bg-[linear-gradient(90deg,#369898,#5eeebb)] transition duration-1000 ease-in-out hover:-translate-y-5">
                  <div className="text-cyan-500 mb-4 w-full group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl text-gray-700 font-medium  group-hover:text-white group-hover:font-bold ">
                    {service.title}
                  </h3>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <div className="container mx-auto py-10">
        <h1 className="heading text-center mb-5">Our Creative Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-6 p-5">
          {Client.map((client, index) => (
            <div
              key={index}
              className=""
              style={{ boxShadow: "0px 0px 30px rgba(115, 128, 157, 0.1)" }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full rounded-lg "
              />
              <div className="p-4">
                <h2 className="text-xl font-[500] mb-2">{client.name}</h2>
                <p className="text-gray-500 text-2sm mb-2">{client.title}</p>
                <p className="text-gray-700 text-2sm">{client.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
