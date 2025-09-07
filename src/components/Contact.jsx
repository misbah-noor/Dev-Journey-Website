import React from 'react'
import BannerPng from "../assets/banner.png";
import { motion } from "framer-motion";


function Contact() {
  return (
      <section id='contact' className='pt-9 bg-gradient-to-bl from-gray-600 to-gray-900'>
      <div className="container mx-auto py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 px-5">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px] text-white">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="#"
              className="primary-btn !mt-8 bg-cyan-800 hover:bg-amber-500 transition-all ease-in text-white px-4 py-2 rounded-lg"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
