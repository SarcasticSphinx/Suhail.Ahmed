'use client'
// components/ProjectCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  stack,
  demoUrl,
  repoUrl,
  tags = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: isHovered ? 'none' : 'auto',
      }}
    >
      {/* Custom cursor for hover state */}
      {isHovered && (
        <div
          className="fixed w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 opacity-90' : 'scale-100 opacity-80'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      </div>

      {/* Project content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {tags.length > 0 && (
            <span className="px-2 py-1 text-xs font-semibold bg-purple-600 rounded-full">
              {tags[0]}
            </span>
          )}
        </div>

        <p className="text-gray-300 mb-6">{description}</p>

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 text-center bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 text-center bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-600 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;