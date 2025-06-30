"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "Intellecto",
    description:
      "A tutor-finding platform that connects students with qualified tutors. Features include profile management, search, and authentication.",
    imageUrl: "https://i.ibb.co/7dGmNMSy/intellecto.png",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "https://dreamy-eclair-576ab3.netlify.app/",
    repoUrl: "https://github.com/SarcasticSphinx/Intellecto",
    tags: ["Featured"],
  },
  {
    title: "Chatty",
    description:
      "A real-time chat application with user authentication and live messaging using Socket.IO.",
    imageUrl: "https://i.ibb.co/RpD6w6j5/chatty.png",
    stack: ["React", "Node.js", "Socket.IO", "Express", "MongoDB"],
    demoUrl: "https://chatty-b2my.onrender.com/",
    repoUrl: "https://github.com/SarcasticSphinx/Chatty",
    tags: ["Featured"],
  },
  {
    title: "GreenKnowledge",
    description:
      "A platform for gardening enthusiasts to share tips, connect, ask questions, and join plant-related events.",
    imageUrl: "https://i.ibb.co/zTj80fTB/green-knowledge.png",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
    demoUrl: "https://quiet-dusk-277d19.netlify.app/",
    repoUrl: "https://github.com/SarcasticSphinx/GreenKnowledge",
  },
  {
    title: "SailSignal",
    description:
      "A web-based Morse code translator and signal simulator designed for quick learning and experimentation.",
    imageUrl: "https://i.ibb.co/pvwYxs7X/morse-code.png",
    stack: ["React", "TailwindCss", "JavaScript"],
    demoUrl: "https://sarcasticsphinx.github.io/MorseCode/",
    repoUrl: "https://github.com/SarcasticSphinx/MorseCode",
  },
  {
    title: "Plantify",
    description:
      "A plant identification app that uses image upload to provide plant details, care tips, and classification.",
    imageUrl: "https://i.ibb.co/7d65KBZX/plantify.png",
    stack: ["HTML", "CSS", "JavaScript", "Machine Learning (in progress)"],
    demoUrl: "https://sarcasticsphinx.github.io/Plantify/",
    repoUrl: "https://github.com/SarcasticSphinx/Plantify",
  },
  {
    title: "RUET E-Payment",
    description:
      "A UI concept for a digital e-payment portal tailored for RUET students to manage tuition and fees online.",
    imageUrl: "https://i.ibb.co/XxKyS0rR/ruet-epayment.png",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://sarcasticsphinx.github.io/RUET-ePayment/",
    repoUrl: "https://github.com/SarcasticSphinx/RUET-ePayment",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen  dark:bg-black py-20 px-4 sm:px-6 lg:px-8 font-poppins">
      <div
        className="absolute -top-12 -left-20 w-72 h-72 bg-emerald-400/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl"></div>
      <div className="max-w-7xl text-center">
        <h1 className="text-5xl font-bold text-neutral-600 dark:text-white mb-2">
          My <span className="text-green-300">Projects</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-12">
          A curated collection of my web apps, tools, and experiments — blending
          functionality with creativity.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-8 border hover:cursor-pointer">
        {/* Project Tags */}
        {project.tags && project.tags.length > 0 && (
          <CardItem
            translateZ="40"
            className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full"
          >
            {project.tags[0]}
          </CardItem>
        )}

        {/* Project Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>

        {/* Project Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3"
        >
          {project.description}
        </CardItem>

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover/card:scale-110 transition-transform duration-300"
            />
          </div>
        </CardItem>

        {/* Tech Stack */}
        <CardItem translateZ="50" className="mt-4">
          <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 rounded-full text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardItem>

        {/* Project Links */}
        <div className="flex justify-between items-center mt-6">
          {project.demoUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Live Demo →
            </CardItem>
          )}
          {project.repoUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent"
            >
              <InteractiveHoverButton
                text="View Code"
                className="rounded-xl bg-black text-white text-xs font-bold hover:opacity-80 transition-opacity"
              />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
