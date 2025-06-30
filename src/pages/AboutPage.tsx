"use client";
import { Timeline } from "@/components/ui/timeline";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import {
  FiClock,
  FiCode,
  FiExternalLink,
  FiLayers,
  FiMessageSquare,
} from "react-icons/fi";
import { FaC } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import ProfileCard from "@/components/ui/ProfileCard/ProfileCard";
import { Quote } from "lucide-react";
import GitHubStatus from "@/components/GitHubStatus";

const data = [
  {
    title: "2025",
    content: (
      <div>
        <p className="mb-8 text-sm font-normal text-neutral-300 md:text-base">
          Started learning Machine Learning and earned two Coursera certificates
          in the Machine Learning Specialization by Stanford University. Also,
          fully mastered backend development and built several real-world
          full-stack projects like Intellecto, SailCode, GreenKnowledge, and
          Chatty.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/whZKkYQt/certificate-1.png"
              alt={`Project`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/LzpPHTfL/certificate-2.png"
              alt={`Project`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Early 2025",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-neutral-300 md:text-base">
          Focused on mastering backend technologies including authentication,
          databases, APIs, and deployment. Created multiple feature-rich
          applications with complete frontend-backend integration.
        </p>
        <p className="mb-8 text-sm font-normal text-neutral-300 md:text-base">
          Projects like Intellecto (a tutor-finding platform), GreenKnowledge
          (gardening community), Chatty (chat app), and SailCode (collaborative
          code editor) helped me apply and solidify my knowledge.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/7dGmNMSy/intellecto.png"
              alt={`intellecto screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/zTj80fTB/green-knowledge.png"
              alt={`green_knowledge screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/RpD6w6j5/chatty.png"
              alt={`chatty screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/pvwYxs7X/morse-code.png"
              alt={`morse_code screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-sm font-normal text-neutral-300 md:text-base">
          Enrolled in Computer Science at RUET and began exploring the world of
          programming, web development, and various CS fields. Learned HTML,
          CSS, JavaScript, Tailwind, React, and other essential tools.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/7d65KBZX/plantify.png"
              alt={`plantify screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://i.ibb.co/XxKyS0rR/ruet-epayment.png"
              alt={`ruet_epayment screenshot`}
              width={500}
              height={500}
              className="h-20 w-full object-cover transition-all duration-300 hover:scale-105 md:h-44 lg:h-60"
            />
          </motion.div>
        </div>
      </div>
    ),
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: <FaReact className="text-blue-400" />,
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-red-400" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "C", icon: <FaC className="text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-blue-400" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "DaisyUI",
        icon: <span className="text-white  text-sm">DU</span>,
      },
      { name: "AceternityUI", icon: <span className="text-white">AU</span> },
      { name: "BoootStrap", icon: <BsBootstrap className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Framer Motion", icon: <span className="text-white">FM</span> },
    ],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "REST APIs", icon: <span className="text-white">API</span> },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-yellow-400" />,
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
];

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-black font-poppins text-neutral-200 overflow-hidden md:px-30 px-4"
    >
      <div
        className="absolute -top-12 -right-20 w-72 h-72 bg-emerald-400/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl"></div>

      <motion.div style={{ y: yBg }} className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px]"></div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center justify-between space-x-8 md:flex-row flex-col-reverse"
        >
          <div>
            {" "}
            <p className="mb-2 mt-6 sm:mt-0 text-sm font-medium text-emerald-400/80 md:text-base">
              More About Me
            </p>
            <h1 className="mb-2 text-5xl font-bold md:text-5xl lg:text-6xl">
              I am Suhail
            </h1>
            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">
              A <span className="text-emerald-400">Creative Developer</span>
            </h2>
            <div className="max-w-3xl space-y-4 text-neutral-400">
              <p>
                I am a passionate developer with a love for building creative
                and user-friendly web applications. With experience in modern
                technologies and a keen eye for design, I enjoy turning ideas
                into reality through code.
              </p>
              <p>
                My expertise spans React, TypeScript, and UI/UX best practices.
                I thrive on solving complex problems, collaborating with teams,
                and continuously learning new tools and frameworks to deliver
                high-quality digital experiences.
              </p>
            </div>
          </div>

          <ProfileCard
            name="Suhail Ahmed"
            title="Full Stack Developer"
            handle="hazardous_wizard"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://i.ibb.co/WN85y3xb/profile.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 space-y-16"
        >
          <motion.h3
            variants={staggerItem}
            className="text-3xl font-semibold md:text-5xl"
          >
            My <span className="text-emerald-400">Tech Stack</span>
          </motion.h3>

          {techStack.map((stack) => (
            <motion.div
              key={stack.category}
              variants={staggerContainer}
              className="p-8 backdrop-blur-sm"
            >
              <motion.div
                variants={staggerItem}
                className="mb-6 flex items-center justify-center gap-3"
              >
                <div className="rounded-lg bg-neutral-800 p-3">
                  {stack.icon}
                </div>
                <h4 className="text-3xl font-medium capitalize text-emerald-400">
                  {stack.category}
                </h4>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {stack.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                  >
                    <Badge
                      variant="outline"
                      className="group flex items-center rounded-sm gap-2 border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-400 hover:bg-emerald-400/20"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        {/* Git status */}
        <GitHubStatus />

        {/* Quote Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative h-[50vh] overflow-hidden rounded-xl p-8"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="mb-4 text-4xl text-blue-400 opacity-30" />

              <motion.blockquote
                whileHover={{ scale: 1.02 }}
                className="mb-6 text-2xl font-medium leading-relaxed sm:text-3xl"
              >
                &quot;The journey is the reward. Every step forward is a victory
                worth celebrating.&quot;
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-blue-400/50"></div>
                <p className="text-blue-400/80">Steve Jobs</p>
                <div className="h-px w-8 bg-blue-400/50"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive pulse element */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-blue-400"
          />
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="mb-6 text-3xl font-semibold md:text-5xl">
            My <span className="text-emerald-400">Journey</span>
          </h3>
        </motion.section>
        <Timeline data={data} />

        {/* Availability Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative my-20 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400/10 to-emerald-400/5 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col items-center justify-between md:flex-row gap-8">
              <div className="text-center md:text-left max-w-xl">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-semibold md:text-2xl"
                >
                  Let&#39;s collaborate on your next project!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-neutral-400 mt-4 text-sm sm:text-base"
                >
                  I specialize in creating modern, responsive web applications
                  with cutting-edge technologies. Whether you need a full
                  project build, consultation, or team augmentation, I&apos;d
                  love to discuss how I can help.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-medium text-xs md:text-lg text-black transition-all hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20"
                >
                  Schedule a Call
                  <FiExternalLink />
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-xs gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 font-medium text-emerald-400 transition-all hover:bg-emerald-400/20 hover:shadow-lg hover:shadow-emerald-400/10"
                >
                  See My Work
                  <FiExternalLink />
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6"
            >
              <div className="flex flex-col items-center text-center rounded-lg bg-emerald-400/5 p-4">
                <FiClock className="mb-2 text-2xl text-emerald-400" />
                <span className="font-medium">Fast Delivery</span>
                <span className="text-sm text-neutral-400">
                  Timely project completion
                </span>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg bg-emerald-400/5 p-4">
                <FiLayers className="mb-2 text-2xl text-emerald-400" />
                <span className="font-medium">Full Stack</span>
                <span className="text-sm text-neutral-400">
                  End-to-end solutions
                </span>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg bg-emerald-400/5 p-4">
                <FiCode className="mb-2 text-2xl text-emerald-400" />
                <span className="font-medium">Clean Code</span>
                <span className="text-sm text-neutral-400">
                  Maintainable & scalable
                </span>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg bg-emerald-400/5 p-4">
                <FiMessageSquare className="mb-2 text-2xl text-emerald-400" />
                <span className="font-medium">Clear Communication</span>
                <span className="text-sm text-neutral-400">
                  Regular updates
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
