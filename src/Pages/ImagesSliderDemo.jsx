"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../Component/ui/ImagesSlider";

export default function ImagesSliderDemo() {
  const images = [
    "https://scontent.fcok10-4.fna.fbcdn.net/v/t1.6435-9/125324298_156350959536593_5627460141543474000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GjlsSDyWp30Q7kNvgG1ymfN&_nc_oc=AdnrEASWOpMkF6Os3i_BuZiy3VtsvFEn_2E1wBzw00wdJF3D9zyGDZlGC6PupN_DbVIY8_cDVThkIIVY7O0dYk7Z&_nc_zt=23&_nc_ht=scontent.fcok10-4.fna&_nc_gid=KCP7XxE-6lrHOpiHc49MFA&oh=00_AYHEM3UHJWrwHT7GdrumTj3kjYI7q4nzl1vlRKy-0IMHfQ&oe=6804B4E1",
    "https://scontent.fcok10-3.fna.fbcdn.net/v/t1.6435-9/125862611_156350909536598_6132161252674376085_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bOw4gJfOKF8Q7kNvgEyg7R6&_nc_oc=Adls3jc8yZsuVk88U-QdXlVUfq1o1KERFXOb0XOwEznxAtmmIzlvLNqCrt5TdZweFnYvJIY5PmCfhD5LQ64blC0o&_nc_zt=23&_nc_ht=scontent.fcok10-3.fna&_nc_gid=G09JkAHblDURAN-cVvZw5w&oh=00_AYHn5cPDPmbLiqdX_zKxoxZ92SwxEteCGw6cjQ1Mxtf_pQ&oe=6804D63B",
    "https://images.jdmagicbox.com/v2/comp/thrissur/u3/9999px487.x487.230405222127.u7u3/catalogue/imit-park-irinjalakuda-thrissur-software-companies-8m5wuupvv7.jpg",
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
            <span>Contact Us →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
