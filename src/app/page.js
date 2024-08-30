import MainFotter from "./Footer";
import HomeHeader, { ManinSection, Blog, Vedio } from "./Header";
import Navbar from "./Navbar";

export default function Home(params) {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <ManinSection />
      <Blog />
      <Vedio />
      <MainFotter />
    </>
  );
}
