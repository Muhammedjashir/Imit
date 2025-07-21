"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../Component/ui/ImagesSlider";
import { useNavigate } from "react-router-dom";
import imit  from "../assets/image/imit.webp";
import imit1 from "../assets/image/imit1.jpg";
import imit2 from "../assets/image/imit2.jpg";

export default function ImagesSliderDemo(){
  const Navigate = useNavigate();
  const images = [
    imit,
    imit1,
    imit2,
    // "https://scontent.fcok10-4.fna.fbcdn.net/v/t1.6435-9/125324298_156350959536593_5627460141543474000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6ss1BzFNuBIQ7kNvwEshx92&_nc_oc=AdkjnSjT8FHTSVOGw1k2YmPlAdSxLFZAYPPvNO1w2bWyM1ty3OTuwHV04A7W_tQGueQZzCyGjK6Xs2X52NDm-owZ&_nc_zt=23&_nc_ht=scontent.fcok10-4.fna&_nc_gid=SaADXdYmIjB4kK9ZmZpnww&oh=00_AfFkuP1c3Z3rVD39rFCWXv7XuSQt6iHNLbEEPisk5IheQw&oe=68381F61",
    // "https://imitpark.com/webimg/about-7.webp",
  ];

  return (
    <div className="w-full h-screen max-w-screen overflow-hidden  sticky top-0">
      <ImagesSlider
        className="w-full h-full "
        images={images}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center text-center px-4 w-full h-full"
        >
          <motion.p className="font-mono font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Think Beyond<br /> Deliver Beyond
          </motion.p>
          <button className="px-6 py-2 mt-4 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative text-sm sm:text-base md:text-lg">
            <button className="cursor-pointer " onClick={()=>Navigate('/contact')}>Contact Us →</button>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
