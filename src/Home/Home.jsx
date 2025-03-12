import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HeroParallaxDemo from "../Pages/Parlax";
import Description from "../Pages/Description";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import FocusCardsDemo from "../Pages/FocusCardsDemo";
import AnimatedPinDemo from "../Pages/AnimatedPinDemo";
import Description1 from "../Pages/Description1";
import AnimatedTestimonialsDemo from "../Pages/AnimatedTestimonialsDemo";






function Home() {
  return (
    <div>
      <FloatingDockDemo />
      <Header />
      <HeroParallaxDemo />
      <Description />
      <FocusCardsDemo />
      <AnimatedPinDemo/>
      <Description1/>
      <AnimatedTestimonialsDemo/>
      <Footer />
    </div>
  );
}

export default Home;
