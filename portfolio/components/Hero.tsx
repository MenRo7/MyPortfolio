import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text1, count1] = useTypewriter({
        words: [
            "ROMAIN GARNIER",
        ],
        loop: false,
        delaySpeed: 1000000000000000,
    });
    const [text2, count2] = useTypewriter({
        words: [
            "<Etudiant en informatique />",
            "<Développeur Web />",
        ],
        loop: false,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 itesm-center justify-center
    text-center overflow-hidden">
        <BackgroundCircles />
        <h1>
            <span>{text1}</span>
            <br></br>
            <span>{text2}</span>
            <Cursor cursorColor="#F7AB0A"/>
        </h1>
    </div>
  )
}