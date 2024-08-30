"use client";

import React, { useState } from "react";
import { Container, Grid } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      firstname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative py-10">
      {/* Google Map Section */}
      <div className="absolute top-0 left-0 w-full h-[500px]">
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

      {/* Contact Form Section */}
      <Container className="relative z-10 mt-[300px]">
        <div className="p-10 bg-white shadow-lg rounded-xl">
          <Grid container spacing={4} className="">
            <Grid item xs={12} lg={8} md={6} className="">
              <h2 className="pb-3 text-3xl font-light">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                      name="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4} className="mt-2">
                  <Grid item xs={12}>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded outline-none"
                      name="message"
                      rows="7"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </Grid>
                </Grid>

                <Grid container spacing={4} className="mt-2">
                  <Grid item xs={12}>
                    <button
                      type="submit"
                      className="py-[1rem] px-[3rem] text-white rounded-xl bg-[#1dc9cb] hover:bg-[#138788] transition duration-300"
                    >
                      SEND
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            {/* Contact Information Section */}
            <Grid item xs={12} lg={4} md={6}>
              <div className="p-5  h-full bg-gradient-to-r from-[#5eeebb] to-[#51aafa] relative ">
                <div className="pb-3">
                  <h3 className="pb-2 text-xl text-white font-light">
                    ADDRESS
                  </h3>
                  <p className="m-0 text-lg text-white font-extralight">
                    1234 Street Name City, AA 99999
                  </p>
                </div>
                <div className="pb-3">
                  <h3 className="pb-2 text-xl text-white font-light">
                    CALL US
                  </h3>
                  <p className="m-0 text-white text-lg font-extralight">
                    +1 (0) 000 0000 001
                  </p>
                </div>
                <div className="p-2 flex mt-5 justify-center items-center">
                  <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full ">
                    <div className="p-2 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300">
                      <TwitterIcon className="text-white" />
                    </div>
                    <div className="p-2 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300">
                      <FacebookIcon className="text-white" />
                    </div>
                    <div className="p-2 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300">
                      <YouTubeIcon className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
