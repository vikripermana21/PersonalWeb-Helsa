import React from "react";
import Navbar from "./components/Navigation/navbar";
import MainBanner from "./components/LandingPage/MainBanner";
import About from "./components/LandingPage/About";
import Team from './components/Common/Team';
import WorkProcess from "./components/LandingPage/WorkProcess";
import Footer from "./components/Layout/footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Team />

      <WorkProcess />

      <Footer />
    </>
  );
};

export default LandingPage;
