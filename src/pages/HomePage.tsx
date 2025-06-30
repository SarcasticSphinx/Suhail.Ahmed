

import React from "react";
import { InteractiveGridPattern } from "../components/magicui/interactive-grid-pattern";
import Link from "next/link";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import RotatingText from "@/components/ui/RotatingText/RotatingText";

// social links
const social_links = [
  {
    name: "facebook",
    icon: <BsFacebook size={24} />,
    link: "https://www.facebook.com/suhailahmed.toha.3",
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "x",
    icon: <BsTwitterX size={24} />,
    link: "https://x.com/suhail_ahmedx",
    hoverColor: "hover:text-white", // X (Twitter) is usually black/white
  },
  {
    name: "linkedin",
    icon: <BsLinkedin size={24} />,
    link: "https://www.linkedin.com/in/suhailahmed-toha-92b1a0314/",
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "instagram",
    icon: <BsInstagram size={24} />,
    link: "#",
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "github",
    icon: <BsGithub size={24} />,
    link: "https://github.com/SarcasticSphinx",
    hoverColor: "hover:text-white",
  },
];

const items = ["FULL STACK DEVELOPER", "WEB DESIGNER"];

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-white font-poppins">
      <InteractiveGridPattern className="absolute opacity-45" />
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl"
        style={{ animationDelay: "2s" }}
      ></div>
      {/* Content */}
      <div className="flex min-w-screen justify-between lg:px-30 items-center gap-20 relative">
        {/* left Side */}
        <div className="z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-poppins font-extrabold text-5xl md:text-7xl ">
              Suhail <br /> Ahmed
            </h1>
            <hr />
            <div className="flex space-x-6 text-gray-500 dark:text-gray-300">
              {social_links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`text-white/70 ${item.hoverColor}`}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <img src="profile.jpg" alt="" className="absolute w-72" /> */}
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center gap-4 text-3xl md:text-5xl sm:w-1/2 z-50">
          <h1>I am a </h1>
          <RotatingText
            texts={["Full Stack Developer", "AI Anthusiast", "Problem Solver"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 w-fit rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          <p className="text-sm">
            Passionate Full Stack Developer and AI Enthusiast from Cumilla,
            Bangladesh, currently pursuing Computer Science at RUET. With a
            strong foundation in JavaScript, Python, and modern web technologies
            like React and Tailwind CSS, I love building meaningful projects
            that blend creativity and problem-solving. Whether it’s developing
            smart platforms like Intellecto or exploring machine learning
            applications in Plantify, I’m constantly driven to learn, innovate,
            and grow as a future tech leader.
          </p>

          <InteractiveHoverButton text="My Story" className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
