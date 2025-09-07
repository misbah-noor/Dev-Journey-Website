import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../assets/blob.svg";
import HeroPng from "../assets/hero.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};


function Hero() {
  return (
    <section id='hero'
   className='bg-gradient-to-tr from-gray-600 to-gray-900 pb-10 md:pb-32 overflow-x-hidden'>
    <div className='max-w-5xl container mx-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-2 md:mt-30 mt-20'>
      {/* Brand Info */}
        <div className="flex flex-col justify-center items-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-10 md:max-w-[500px] max-w-[350px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl text-white lg:text-5xl font-bold !leading-snug mt-2"
            >
              Let's Learn to build a{" "}
              <span className="text-green-500 text-shadow-glow">Website</span> for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="bg-amber-400 flex items-center gap-2 px-3 py-2 hover:bg-green-600 hover:text-white rounded-lg group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
       <div className="flex justify-center items-center mt-5">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="z-10 drop-shadow-green-800 drop-shadow-xl h-[330px] md:h-[450px] hover:animate-pulse"
          />
          
        </div>
    </div>
    </div>
    </section>
  )
}


export default Hero 
