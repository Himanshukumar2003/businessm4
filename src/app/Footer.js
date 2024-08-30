"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container } from "@mui/material";
export default function MainFotter(params) {
  return (
    <>
      <Container maxWidth="lg">
        <div className="flex items-center justify-between flex-wrap py-20">
          <p className="font-500 text-gray-800 text-xl text-center">
            POWERED BY
            <span className="font-200 text-gray-400"> MOBIRISE.COM</span>
          </p>

          <p className="font-500 text-xl  text-[#ff4f7b]">
            BusinessM4 <span className="font-200 text-gray-400">theme</span>
          </p>
          <div
            className="flex items-center justify-between flex-wrap gap-5 "
            style={{ fontSize: "35px" }}
          >
            <div className="icons">
              <FacebookIcon />
            </div>
            <div className="icons">
              <InstagramIcon />
            </div>
            <div className="icons">
              <GoogleIcon />
            </div>
            <div className="icons">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
