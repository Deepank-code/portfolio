import { projects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./UI/ThreeDCard";

const RecentProjects = () => {
  return (
    <div className="py-20 text-white text-center" id="projects">
      <h1 className="text-4xl font-bold">
        A small selection of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <ThreeDCardDemo
            key={id}
            id={id}
            title={title}
            des={des}
            img={img}
            iconLists={iconLists}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
