import Home from "@/components/Home";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import SkillsPage from "@/pages/SkillsPage";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  MailIcon,
  DownloadIcon,
} from "lucide-react";
import { GiSkills } from "react-icons/gi";

export default function page() {
  const slides = [
    {
      title: "Home",
      icon: <HomeIcon className="w-4 h-4" />,
      href: "#home",
      content: <HomePage />,
    },
    {
      title: "About",
      icon: <UserIcon className="w-4 h-4" />,
      href: "#about",
      content: <AboutPage />,
    },
    {
      title: "Skills",
      icon: <GiSkills className="w-4 h-4" />,
      href: "#skills",
      content: <SkillsPage />,
    },
    {
      title: "Projects",
      icon: <FolderIcon className="w-4 h-4" />,
      href: "#projects",
      content: <ProjectsPage />,
    },
    {
      title: "Contact",
      icon: <MailIcon className="w-4 h-4" />,
      href: "#contact",
      content: <ContactPage />,
    },
    {
      title: "Download CV",
      icon: <DownloadIcon className="w-4 h-4" />,
      href: "#cv",
      content: (
        <div className="p-8 w-full h-full flex flex-col gap-4 items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Download My CV</h1>
          <a
            href="/cv/toha-resume.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          >
            Download PDF
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black" />
      {/* The carousel component */}
      <Home slides={slides} />
    </div>
  );
}
