"use client";

import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    shadow: "shadow-cyan-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    shadow: "shadow-sky-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-300",
    shadow: "shadow-yellow-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    shadow: "shadow-white",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-400",
    shadow: "shadow-green-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    shadow: "shadow-green-600",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
    shadow: "shadow-orange-500",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "text-blue-500",
    shadow: "shadow-blue-600",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "text-pink-400",
    shadow: "shadow-pink-500",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-500",
    shadow: "shadow-purple-600",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-400",
    shadow: "shadow-purple-500",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-violet-400",
    shadow: "shadow-violet-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
    shadow: "shadow-gray-400",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-400",
    shadow: "shadow-orange-500",
  },
];

const MySkills = () => {
  return (
    <section className="py-16 px-4 md:px-12 text-white" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
        My Skills
      </h2>

      <div className="flex justify-center items-center flex-wrap max-w-[90%] m-auto gap-30">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;

          if (!Icon) return null; // ✅ Prevents runtime error

          return (
            <motion.div
              key={idx}
              className="group flex flex-col items-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`
                  text-6xl md:text-7xl 
                  ${skill.color} 
                  transition-all duration-300 
                  rounded-full 
                  group-hover:shadow-[0_0_60px_25px]
                  ${skill.shadow}
                `}
              >
                <Icon />
              </div>

              <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
