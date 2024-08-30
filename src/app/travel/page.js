import Navbar from "../about/Navbar";
import { GradientCard } from "../features/headerfive";
import CardComponent from "./Cards";
import TravelFooter from "./Footer";
import FeacherHeader from "./MainPage";
export default function Travel(params) {
  return (
    <>
      <Navbar />
      <FeacherHeader />
      <CardComponent />
      <TravelFooter />
    </>
  );
}
