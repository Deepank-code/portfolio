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
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[33rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
            className="flex lg:text-xl md:text-sm text-sm text-purple "
          >
            <Link href={link}>Check Live</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
