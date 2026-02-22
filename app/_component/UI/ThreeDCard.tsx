"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import Link from "next/link";

export function ThreeDCardDemo({
  title,
  des,
  img,

  link,
}: {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-white border-white/[0.2]  w-auto sm:w-[33rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-black">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-black"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex  items-center justify-between mt-3">
          {/* <CardItem translateZ="100" className=" flex  items-center gap-3 my-4">
            {iconLists.map((icon, index) => (
              <div
                style={{ transform: `translateX(-${5 * index * 2}px)` }}
                key={icon}
                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              >
                <img className="p-2" src={icon} alt="" />
              </div>
            ))}
          </CardItem> */}
          <CardItem
            translateZ={100}
            as="button"
            className="group flex items-center gap-2 
    px-4 py-2 rounded-lg
    bg-emerald-600/10 
    border border-emerald-500/20
    text-emerald-400
    hover:bg-emerald-600/20
    hover:border-emerald-400/40
    transition-all duration-300"
          >
            <Link href={link} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>

              <span className="text-sm font-medium">Check Live</span>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
