import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HeroParallaxDemo from "../Pages/Parlax";
import Description from "../Pages/Description";
import FocusCardsDemo from "../Pages/FocusCardsDemo";
import AnimatedPinDemo from "../Pages/AnimatedPinDemo";
import Description1 from "../Pages/Description1";
import AnimatedTestimonialsDemo from "../Pages/AnimatedTestimonialsDemo";
import BentoGridSecondDemo from "../Pages/bento-grid-demo-2";
import Description2 from "../Pages/Description2";
import LogoSlider from "../Pages/LogoSlider";
import ContactForm from "../Pages/contactForm";
import Review from "../Pages/Review";
import ImagesSliderDemo from "../Pages/ImagesSliderDemo";









function Home() {
  return (
    <div>
      
      <Header />
      <ImagesSliderDemo/>
      <HeroParallaxDemo />
      <Description />
      <FocusCardsDemo />
      <AnimatedPinDemo/>
      <Description1/>
      <AnimatedTestimonialsDemo/>
      <BentoGridSecondDemo/>
      <Description2/>
      <LogoSlider/>
      <ContactForm/>
      <Review/>
      <Footer />
    </div>
  );
}

export default Home;
