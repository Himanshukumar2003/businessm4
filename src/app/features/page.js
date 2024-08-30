import { Blog } from "../Header";
import Navbar from "../Navbar";
import FeaturesHeader, { Grids, SimpleCard } from "./headerfive";
import BusinessNews from "./CardFive";
import MainFotter from "../Footer";

export default function Features(params) {
  return (
    <>
      <Navbar />
      <FeaturesHeader />
      <SimpleCard />
      <Grids />
      <BusinessNews />

      <Blog />
      <MainFotter />
    </>
  );
}
