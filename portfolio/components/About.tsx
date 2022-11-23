import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About</h3>

        <motion.img 
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}

        src="https://avatars.githubusercontent.com/u/82891025?v=4"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95"
        />         

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold"> 
              Here is a <span className="underline decoration-[#0a71f7]">little</span>
              {" "}background
            </h4>
            <p className="text-base">
              I'm Romain. I'm a 22 years old french student. I'm currently studying computer Science
              at the University of Reims Champagne-Ardenne. I got my Science bachelor in 2018. I'm self-taught in web development and 
              I apsire to make it my job. My other hobbies are music, guitar, drums and video games.

            </p>
        </div>
    </motion.div>
  );
}