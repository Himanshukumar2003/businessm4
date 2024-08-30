"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import MainFotter from "../Footer";
import { Blog } from "../Header";
import Navbar from "../Navbar";
import { CarouselWithParallax } from "../about/Achievments";
import { Container, TextField } from "@mui/material";
import ContactSection from "../about/Contact";
import React, { useState } from "react";

export default function MapsandFroms(params) {
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
                "https://mobirise.com/extensions/businessm4/assets/images/background5-1920x1280.jpg",
              speed: 30,
            },
          ]}
          className=" aspect-[5/1] bg-cover bg-center -z-1 absolute top-0 left-0 w-full "
        />
        <div className="absolute inset-0 justify-center z-10 h-full p-10 flex items-center">
          <div className="container mx-auto">
            <h1 className="menuHeading text-white">Articles</h1>
          </div>
        </div>
      </div>

      <Container maxWidth="lg" className=""></Container>
      <ContactSection />
      <div className="w-full h-[500px]">
        <iframe
          frameBorder="0"
          allowFullScreen
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw"
          title="Google Map"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <MultiStepForm />
      <Blog />
      <MainFotter />
    </>
  );
}

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [user, setuser] = useState({
    Name: "",
    LastName: "",
    Date: "",
    Email: "",
    Address: "",
    Message: "",
  });
  const handleDataChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const hendelChenge = (index) => {
    setCurrentStep(index);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (currentStep === 3) {
      window.alert("Form submitted");
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex   justify-center items-center">
      <Container maxWidth="lg" className="py-10">
        <div className="mb-6 border-b border-gray-200 pb-4">
          <ul className="flex space-x-10">
            <li
              onClick={() => hendelChenge(1)}
              className={`flex items-center space-x-3 text-base font-medium transition-all duration-500 ease-in-out ${
                currentStep === 1 ? "text-[#ff4f7b]" : "text-gray-600"
              }`}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-full ${
                  currentStep === 1
                    ? "bg-[#ff4f7b] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                1
              </span>
              Sign Up
            </li>
            <li
              onClick={() => hendelChenge(2)}
              className={`flex items-center space-x-3 text-base font-medium transition-all duration-500 ease-in-out ${
                currentStep === 2 ? "text-[#ff4f7b]" : "text-gray-600"
              }`}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-full ${
                  currentStep === 2
                    ? "bg-[#ff4f7b] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </span>
              Message
            </li>
            <li
              className={`flex items-center space-x-3 text-base font-medium transition-all duration-500 ease-in-out ${
                currentStep === 3 ? "text-[#ff4f7b]" : "text-gray-600"
              }`}
              onClick={() => hendelChenge(3)}
            >
              <span
                className={` flex items-center justify-center w-9 h-9 rounded-full ${
                  currentStep === 3
                    ? "bg-[#ff4f7b] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                3
              </span>
              Confirm
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="Name"
                    onChange={handleDataChange}
                    value={user.Name}
                    placeholder="firstname"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    onChange={handleDataChange}
                    name="LastName"
                    placeholder="lastname"
                    value={user.LastName}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    onChange={handleDataChange}
                    value={user.Date}
                    name="Date"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    onChange={handleDataChange}
                    value={user.Email}
                    placeholder="example@mail.com"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  type="text"
                  id="address"
                  name="Address"
                  rows="4"
                  placeholder="Address "
                  value={user.Address}
                  onChange={handleDataChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                value={user.Message}
                onChange={handleDataChange}
                rows="6"
                placeholder="Type your message"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
          )}

          {currentStep === 3 && (
            <div className="border-b border-gray-200 pb-6">
              <p className="text-base text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-2 text-gray-600 hover:bg-blue-600 hover:text-white transition"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="10.5"
                      fill="white"
                      stroke="#DDE3EC"
                    />
                    <path
                      d="M9.833 12.851L15.195 7.488 16.021 8.313 9.833 14.501 6.121 10.788 6.946 9.963 9.833 12.851z"
                      fill="#536387"
                    />
                  </svg>
                  <span>Yes! I want it.</span>
                </button>

                <button
                  type="button"
                  className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-2 text-gray-600 hover:bg-blue-600 hover:text-white transition"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="10.5"
                      fill="white"
                      stroke="#DDE3EC"
                    />
                    <path
                      d="M9.833 12.851L15.195 7.488 16.021 8.313 9.833 14.501 6.121 10.788 6.946 9.963 9.833 12.851z"
                      fill="#536387"
                    />
                  </svg>
                  <span>No! I don’t want it.</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end space-x-6 mt-6">
            {currentStep > 1 && (
              <button type="button" onClick={previousStep} className="btnTwo">
                Back
              </button>
            )}
            <button
              type="submit"
              className="flex items-center btn text-white px-4 py-2 rounded-lg hover:shadow-md transition"
            >
              {currentStep === 3 ? "Submit" : "Next Step"}
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M10.781 7.333L7.205 3.757 8.148 2.814 13.333 8 8.148 13.185 7.205 12.243 10.781 8.666H2.667V7.333H10.781z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};
