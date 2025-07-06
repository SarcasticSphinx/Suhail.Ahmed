"use client";

import { motion, AnimatePresence} from "framer-motion";
import { useState } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { ReactNode } from "react";

interface CarouselProps {
  slides: {
    title: string;
    content: ReactNode;
    icon: ReactNode;
    href: string;
  }[];
  initialSlide?: number;
}

export default function Home({ slides, initialSlide = 0 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const navigateToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };


  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1, // 60% transparency
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Prepare dock items with all required properties
  const dockItems = slides.map((slide, index) => ({
    title: slide.title,
    icon: slide.icon,
    href: slide.href,
    onClick: () => navigateToSlide(index),
  }));

  return (
    <div 
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* Full-screen carousel slides */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Dock */}
        <FloatingDock
          desktopClassName="fixed w-fit mx-auto bottom-5 left-0 right-0 z-10 bg-green-200/10 backdrop-blur-md border border-green-400/20 shadow-lg"
          mobileClassName="fixed top-5 right-2 z-10 shadow-lg"
          items={dockItems.map((item) => ({
            ...item,
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              item.onClick();
            },
          }))}
        />
    </div>
  );
}