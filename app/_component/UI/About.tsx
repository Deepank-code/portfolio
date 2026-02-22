"use client";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import Image from "next/image";

export function About() {
  return (
    <div className="mb-20">
      <BackgroundGradient className="rounded-[28px] w-full p-0 bg-gray-900 shadow-xl">
        <section className="relative flex flex-col items-center text-center max-w-4xl mx-auto py-16 px-6 sm:px-12">
          <div className="absolute inset-0 w-full h-full  rounded-[28px] pointer-events-none"></div>

          <div className="z-10 w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mb-6">
            <Image
              src="/profile.jpg"
              alt="Deepank"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="z-10 text-4xl font-extrabold text-white mb-3 tracking-tight">
            About Me
          </h2>

          <p className="z-10 text-gray-300 text-lg leading-8 max-w-2xl">
            I&apos;m <strong>Deepank</strong>, a Aspiring full stack developer
            passionate about building fast, intuitive, and scalable web
            applications. I specialize in crafting clean user interfaces,
            integrating APIs, and enhancing user experiences through modern web
            technologies. My focus is on delivering impactful digital solutions
            that are both functional and beautifully designed.
          </p>
        </section>
      </BackgroundGradient>
    </div>
  );
}
