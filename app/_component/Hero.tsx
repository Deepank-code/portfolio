import React from "react";

import { TextGenerateEffect } from "./UI/TextGenerateEffect";

import MagicButton from "./UI/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "./UI/BackgroundCollison";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="pb-20 pt-36">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Ideas into Interactive Web Apps"
            />
            <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Deepank, a software developer specializing in
              building sleek, user-friendly interfaces and scalable backend
              solutions using the MERN stack and modern frameworks.
            </p>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
