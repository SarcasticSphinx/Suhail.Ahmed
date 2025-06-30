"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiRender,
  SiCplusplus,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { GiArtificialIntelligence, GiSpiderWeb } from "react-icons/gi";
import { MdOutlineDataObject } from "react-icons/md";
import { BsTools, BsCodeSlash } from "react-icons/bs";

// Type definitions
interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

interface Skills {
  [category: string]: Skill[];
}

interface CategoryIcons {
  [category: string]: ReactNode;
}

const skills: Skills = {
  "Web Craft": [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  ],
  "Server Magic": [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ],
  "Data Wrangling": [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  ],
  "Dev Tools": [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGitAlt />, color: "#181717" },
    { name: "VS Code", icon: <TbBrandVscode />, color: "#007ACC" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    { name: "Render", icon: <SiRender />, color: "#46E3B7" },
  ],
  "Code Languages": [
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  ],
  "AI & Data": [
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
    { name: "Pandas", icon: <SiPandas />, color: "#150458" },
    { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
    {
      name: "Matplotlib",
      icon: <GiArtificialIntelligence />,
      color: "#11557C",
    },
  ],
};

const categoryIcons: CategoryIcons = {
  "Web Craft": <GiSpiderWeb />,
  "Server Magic": <MdOutlineDataObject />,
  "Data Wrangling": <MdOutlineDataObject />,
  "Dev Tools": <BsTools />,
  "Code Languages": <BsCodeSlash />,
  "AI & Data": <GiArtificialIntelligence />,
};

export default function SkillsPage(): JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const count: MotionValue<number> = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    return animation.stop;
  }, [count]);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto py-12 sm:py-16 md:py-20">
      {/* Animated Background Elements */}
      <div
        className="absolute -bottom-12 -right-20 w-72 h-72 bg-emerald-400/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-green-400"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
          My <span className="text-green-300">Skills</span>
        </h1>

        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
          Tools and technologies I use to craft digital experiences. Hover over
          items to see them glow!
        </p>

        {/* Skill Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, type: "spring" }}
              whileHover={{ y: -5 }}
              className="bg-neutral-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-green-700/50 hover:border-green-400/30 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="text-xl sm:text-2xl text-green-400">
                  {categoryIcons[category]}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {category}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <div
                      className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 cursor-default transition-all"
                      style={{
                        backgroundColor:
                          hoveredSkill === skill
                            ? `${skill.color}20`
                            : "#ffffff08",
                        border: `1px solid ${
                          hoveredSkill === skill ? skill.color : "#ffffff10"
                        }`,
                        color: hoveredSkill === skill ? "white" : "#e2e2e2",
                        boxShadow:
                          hoveredSkill === skill
                            ? `0 0 15px ${skill.color}80`
                            : "none",
                      }}
                    >
                      <span
                        className="text-sm sm:text-lg flex-shrink-0"
                        style={{
                          color:
                            hoveredSkill === skill ? skill.color : "inherit",
                        }}
                      >
                        {skill.icon}
                      </span>
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Sphere */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <motion.div
              className="absolute rounded-full opacity-10 blur-xl"
              style={{
                width: 200,
                height: 200,
                backgroundColor: hoveredSkill.color,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        )}

        {/* Tech Radar */}
        <div className="my-12 sm:my-16 md:my-20 text-center">
          <h3 className="text-lg sm:text-xl font-medium text-neutral-400 mb-4 sm:mb-6">
            Tech Proficiency Radar
          </h3>
          <div className="relative h-48 sm:h-56 md:h-64 w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            <div className="absolute inset-0 border-2 border-dashed border-neutral-700 rounded-full"></div>
            <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-dashed border-neutral-700 rounded-full"></div>
            <div className="absolute inset-8 sm:inset-12 md:inset-16 border-2 border-dashed border-neutral-700 rounded-full"></div>

            {Object.values(skills)
              .flat()
              .slice(0, 12)
              .map((skill, index) => {
                const angle = index * 30 * (Math.PI / 180);
                const radius = 100; // Reduced for better mobile experience
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.div
                    key={`radar-${skill.name}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      color: skill.color,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                  </motion.div>
                );
              })}

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.5, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
