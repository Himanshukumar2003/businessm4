"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const hendeleChenge = () => setMenuOpen(!isMenuOpen);
  const menuItems = [
    { Name: "menu pages", label: "/menu" },
    { Name: "headers", label: "/about" },
    { Name: "features", label: "/features" },
    { Name: "images_videos", label: "/travel" },
    { Name: "articles", label: "/articles" },
    { Name: "counters", label: "/counters" },
    { Name: "testimonials", label: "/testimonials" },
    { Name: "accordions tabs", label: "/Accordion" },
    { Name: "footers", label: "/footer" },
    { Name: "Clients", label: "/clients" },
    { Name: "Maps & froms", label: "/maps" },
    { Name: "Call to Actions", label: "/actions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-[9999]  ${
          isScrolled ? "bg-white" : "bg-white         lg:bg-transparent"
        }`}
      >
        <div>
          {/* Web Navbar */}
          <div className="hidden lg:flex justify-between w-full items-center text-gray-700 font-medium">
            <h1 className="cursor-pointer text-[32px]">Creative Agency</h1>
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className="cursor-pointer flex items-center justify-center nav-item"
              >
                Home
              </Link>
              <div className="dropDown relative">
                <p className="cursor-pointer nav-item flex items-center justify-center">
                  Demo Pages
                  <ExpandMoreIcon />
                </p>
                <div className="dropDownList absolute top-0 -left-5 pt-12 bg-transparent ">
                  <div className="p-5 bg-white">
                    <div
                      key="index"
                      className="nav-item-list    mb-2  text-gray-600 text-[18px] capitalize  font-normal flex flex-col gap-2"
                    >
                      <Link href="/about" className=" mb-3">
                        <p className="dropDownText "> Creative Agency</p>
                      </Link>

                      <Link href="/travel" className=" ">
                        <p className="dropDownText">Travel Agency</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropDown relative ">
                <p className="cursor-pointer nav-item flex items-center justify-center">
                  Blocks
                  <ExpandMoreIcon />
                </p>
                <div className="dropDownList absolute top-0 -left-5 pt-12 bg-transparent">
                  <div className="p-5 bg-white">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.label}
                        className="nav-item-list  text-gray-600 text-[18px] capitalize font-normal"
                      >
                        <p className="dropDownText mb-3">{item.Name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <div className="p-1 border-2 border-gray-[#444444] rounded-full ">
                  <FacebookIcon style={{ color: "#444444" }} />
                </div>
                <div className="p-1 rounded-full border-2 border-gray-[#444444]">
                  <InstagramIcon style={{ color: "#444444" }} />
                </div>
                <div className="p-1 border-2 border-gray-[#444444] rounded-full ">
                  <GoogleIcon style={{ color: "#444444" }} />
                </div>
                <div className="p-1 border-2 border-gray-[#444444] rounded-full ">
                  <TwitterIcon style={{ color: "#444444" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden p-2 bg-white text-gray-600">
            <div className="flex items-center justify-between">
              <h1 className="cursor-pointer text-[32px]">BusinessM4</h1>
              <MenuIcon className="cursor-pointer" onClick={hendeleChenge} />
            </div>

            {isMenuOpen && (
              <div className="flex flex-col items-center mt-5 ">
                <div className="w-full">
                  <p
                    className="cursor-pointer flex items-center justify-between nav-item py-2 border-b border-gray-800"
                    onClick={() => toggleDropdown("demoPages")}
                  >
                    Demo Pages
                    <ExpandMoreIcon />
                  </p>
                  {openDropdown === "demoPages" && (
                    <div className="pl-5 py-2 bg-white w-full text-gray-600">
                      <p className="py-2">Creative Agency</p>
                      <p className="py-2">Travel Agency</p>
                    </div>
                  )}
                </div>

                <div className="w-full mt-5">
                  <p
                    className="cursor-pointer flex items-center justify-between nav-item py-2 border-b border-gray-800 text-gray-800"
                    onClick={() => toggleDropdown("blocks")}
                  >
                    Blocks
                    <ExpandMoreIcon />
                  </p>
                  {openDropdown === "blocks" && (
                    <div className="pl-5 py-2 bg-white text-gray-600">
                      {menuItems.map((item, index) => (
                        <p key={index} className="py-2">
                          {item.Name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
