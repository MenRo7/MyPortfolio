import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CReSTIC from '../res/CReSTIC.png';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y:-100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
      <Image 
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
        object-center"
        src={CReSTIC}
        alt=""
      />
        
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developper</h4>
        <p className="text-2xl font-bold mt-1">CReSTIC</p>

        <div className="flex space-x-2 my-2">
          <img
            src="https://icongr.am/devicon/cplusplus-original.svg?size=128&color=282dc3"
            alt=""
            className="w-10 h-10"
          />
          <img
            src="https://icongr.am/devicon/ubuntu-plain-wordmark.svg?size=148&color=a7a7af"
            alt=""
            className="w-10 h-10"
          />
        </div>
        
        <p>Started work... - Ended</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>

    </article>
  );
}