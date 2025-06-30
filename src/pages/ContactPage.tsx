"use client";

import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import {
  BsFacebook,
  BsTwitterX,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsEnvelope,
} from "react-icons/bs";
import { OrbitingCircles } from "../components/ui/orbiting-circles";
import SignupFormDemo from "../components/signup-form-demo";

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
    hoverColor: "hover:text-white",
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

const ContactPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div className="max-h-screen pt-10 flex flex-col items-center">
      <div
        className="absolute -bottom-12 -right-20 w-72 h-72 bg-emerald-400/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl"></div>

      {/* heading */}
      <h1 className="text-5xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100">
        Let&apos;s Get In Touch
      </h1>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
        I&apos;d love to hear from you — whether it’s a question, project idea, or
        just saying hello.
      </p>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-30 max-w-screen">
        {/* Spinning Social Carousel */}
        <div
          className="relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg md:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Connect
          </span>

          {/* Inner Orbit */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <a
              href={social_links[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social_links[0].hoverColor}`}
            >
              {social_links[0].icon}
            </a>
          </OrbitingCircles>

          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <a
              href={social_links[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social_links[1].hoverColor}`}
            >
              {social_links[1].icon}
            </a>
          </OrbitingCircles>

          {/* Outer Orbit */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={125}
            duration={15}
            reverse
          >
            <a
              href={social_links[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social_links[2].hoverColor}`}
            >
              {social_links[2].icon}
            </a>
          </OrbitingCircles>

          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <a
              href={social_links[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social_links[3].hoverColor}`}
            >
              {social_links[3].icon}
            </a>
          </OrbitingCircles>

          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <a
              href={social_links[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social_links[4].hoverColor}`}
            >
              {social_links[4].icon}
            </a>
          </OrbitingCircles>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border-2 border-indigo-500">
              <BsEnvelope size={40} className="text-indigo-400" />
            </div>
          </div>
        </div>

        {/* Email Form */}
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default ContactPage;
