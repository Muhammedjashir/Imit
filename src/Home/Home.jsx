import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HeroParallaxDemo from "../Pages/Parlax";
import Description from "../Pages/Description";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import FocusCardsDemo from "../Pages/FocusCardsDemo";


function Home() {
  return (
    <div>
      <FloatingDockDemo />
      <Header />
      <HeroParallaxDemo />
      <Description />
      <FocusCardsDemo />
      <Footer />
    </div>
  );
}

export default Home;
