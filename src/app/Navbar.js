"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const hendeleChenge = () => setMenuOpen(!isMenuOpen);
  const menuItems = [
    { Name: "menu pages", label: "/menu" },
    { Name: "headers", label: "/header" },
    { Name: "features", label: "/features" },
    { Name: "articles", label: "/articles" },
    { Name: "counters", label: "/counters" },
    { Name: "testimonials", label: "/testimonials" },
    { Name: "accordions tabs", label: "/accordion" },
    { Name: "footers", label: "/footer" },
    { Name: "Clients", label: "/clients" },
    { Name: "Maps & froms", label: "/maps" },
    { Name: "Call to Actions", label: "/actions" },
  ];

  return (
    <>
      <div>
        <div className="bg-[#444444] p-3 z-[999] fixed w-full top-0">
          {/* Web Navbar */}
          <div className="hidden md:flex justify-between w-full items-center text-white font-medium">
            <h1 className="cursor-pointer text-[32px]">BusinessM4</h1>
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className="cursor-pointer flex items-center justify-center nav-item"
              >
                Home
              </Link>
              <div className="dropDown relative w-auto">
                <p className="cursor-pointer nav-item flex items-center justify-center">
                  Demo Pages
                  <ExpandMoreIcon />
                </p>
                <div className="dropDownList absolute top-0 -left-5 pt-12 bg-transparent w-auto">
                  <div className="bg-[#444444]">
                    <div className="p-5 text-white text-[18px] capitalize font-normal flex flex-col gap-2 w-[200px]">
                      <Link href="/about" className="dropDownText">
                        Creative Agency
                      </Link>
                      <Link href="/travel" className="dropDownText">
                        Travel Agency
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropDown relative">
                <p className="cursor-pointer nav-item flex items-center justify-center">
                  Blocks
                  <ExpandMoreIcon />
                </p>
                <div className="dropDownList absolute top-0 -left-5 pt-12 bg-transparent w-auto">
                  <div className="p-5 flex flex-col gap-2  bg-[#444444] w-[200px]">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        className="nav-item-list text-white text-[18px] capitalize font-normal cursor-pointer dropDownText"
                        href={item.label}
                      >
                        {item.Name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <p className="btn">Buy Now</p>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden p-5 bg-[#444444] text-white">
            <div className="flex items-center justify-between">
              <h1 className="cursor-pointer text-[32px]">BusinessM4</h1>
              <MenuIcon className="cursor-pointer" onClick={hendeleChenge} />
            </div>

            {isMenuOpen && (
              <div className="flex flex-col items-center mt-5 text-white">
                <div className="w-full">
                  <p
                    className="cursor-pointer flex items-center justify-between nav-item py-2 border-b border-gray-500"
                    onClick={() => toggleDropdown("demoPages")}
                  >
                    Demo Pages
                    <ExpandMoreIcon />
                  </p>
                  {openDropdown === "demoPages" && (
                    <div className="pl-5 py-2 bg-[#333333] flex flex-col w-auto">
                      <Link href="/about" className=" mb-3">
                        Creative Agency
                      </Link>
                      <Link href="/travel" className="">
                        Travel Agency
                      </Link>
                    </div>
                  )}
                </div>

                <div className="w-full mt-5">
                  <p
                    className="cursor-pointer flex items-center justify-between nav-item py-2 border-b border-gray-500"
                    onClick={() => toggleDropdown("blocks")}
                  >
                    Blocks
                    <ExpandMoreIcon />
                  </p>
                  {openDropdown === "blocks" && (
                    <div className="pl-5 py-2 bg-[#333333] flex flex-col gap-2">
                      {menuItems.map((item, index) => (
                        <Link href={item.label} key={index} className="">
                          <p className="capitalize">{item.Name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <p className="btn mt-10">Buy Now</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
