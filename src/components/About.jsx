import React from 'react'
import BannerPng from "../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../components/Hero";
import { motion } from "framer-motion";


function About() {
  return (
    <section id='about' className='pb-7 bg-gray-900 px-5'>
      <div className='max-w-7xl mx-auto '>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-15 md:py-24">
        {/* About image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* About text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug text-white"
            >
              The World's Leading Online learning Platform
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#676464bb]  rounded-2xl text-white duration-300 hover:shadow-2xl hover:shadow-gray-100"
              >
                <FaBookReader className="text-2xl" />
                <p className="text-lg">10,000+ Courses</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#676464bb]  rounded-2xl text-white duration-300 hover:shadow-2xl hover:shadow-gray-100"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Expert Instruction</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#676464bb]  rounded-2xl text-white duration-300 hover:shadow-2xl hover:shadow-gray-100"
              >
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Lifetime Access</p>
              </motion.div>
            </div>
          </div>

      </div>
      </div>
      </div>
    </section>
  )
}

export default About 
