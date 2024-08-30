import HomeHeader, { Blog } from "../Header";
import Header, { HeaderFour } from "./header";
import Navbar from "../Navbar";
import HeaderAbout from "../about/Header";
import MainFotter from "../Footer";

export default function HeaderPages(params) {
  return (
    <>
      <Navbar />
      <Header />
      <HeaderAbout />
      <HeaderFour />
      <HomeHeader />
      <Blog />
      <MainFotter />
    </>
  );
}
