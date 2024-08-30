import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const TravelFooter = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h2 className="font-bold text-lg mb-2">
              Corporate HTML5 templates
            </h2>
            <p className="text-gray-600">
              1234 Street Name
              <br />
              City, AA 99999
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg mb-2 ">Phone</h2>
            <p className="text-gray-600">
              Office: <br />
              +1 (0) 000 0000 001
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg mb-2">Email</h2>
            <p className="text-gray-600">support@mobirise.com</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg mb-2">Social</h2>
            <div className="flex space-x-4 items-center justify-center">
              <a href="#" className="text-cyan-400 hover:text-cyan-600">
                <FacebookIcon className="text-[35px]" />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-600">
                <TwitterIcon className="text-[35px]" />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-600">
                <InstagramIcon className="text-[35px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TravelFooter;
