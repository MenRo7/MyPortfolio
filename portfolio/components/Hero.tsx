import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Profile from "../res/profile.jpg";
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, welcome on ROMAIN GARNIER's portfolio !",  
            "An ordinary guy who loves create extraordinary stuff !",

        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 itesm-center justify-center
    text-center overflow-hidden">
        <BackgroundCircles />
        <Image 
        src={Profile} 
        alt="" 
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Computer Science Student
            </h2>
            <h1 className="text-5xl lb:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#0a71f7"/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}