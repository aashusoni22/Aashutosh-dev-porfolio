import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  X,
  Code,
  Layers,
  Users,
  Zap,
  Star,
  Eye,
  Check,
  SquareArrowOutUpRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";
import projects from "../../data/projects.json";
import ProjectCard from "../ui/ProjectCard";

const { featuredProjects } = projects;

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="projects"
        className={`py-24 ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span
              variants={fadeIn("up", 0)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase ${
                isDarkMode ? "bg-white/10" : "bg-zinc-100"
              } backdrop-blur-md text-primary-400 ring-1 ${
                isDarkMode ? "ring-white/20" : "ring-zinc-200"
              }`}
            >
              Projects
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 0.1)}
              className={`mt-6 text-5xl font-display font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Featured Work
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className={`mt-6 text-lg ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              A collection of my recent projects showcasing my expertise in
              frontend development, UI/UX design, and full-stack solutions.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isDarkMode={isDarkMode}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className={`relative w-full max-w-4xl rounded-2xl ${
                    isDarkMode ? "bg-zinc-900" : "bg-white"
                  } shadow-2xl overflow-hidden`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div
                    className={`p-6 border-b ${
                      isDarkMode ? "border-white/10" : "border-zinc-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            isDarkMode ? "text-white" : "text-zinc-900"
                          }`}
                        >
                          {selectedProject.title}
                        </h3>
                        <p
                          className={`mt-1 ${
                            isDarkMode ? "text-zinc-400" : "text-zinc-600"
                          }`}
                        >
                          {selectedProject.description}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className={`p-2 rounded-lg ${
                          isDarkMode
                            ? "hover:bg-white/10 text-zinc-400 hover:text-white"
                            : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                        } transition-colors`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 space-y-6">
                    {/* Project Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            Technologies Used
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech) => (
                              <span
                                key={tech}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  isDarkMode
                                    ? "bg-white/5 text-primary-400 ring-1 ring-white/10"
                                    : "bg-zinc-100 text-primary-600 ring-1 ring-zinc-200"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            Key Features
                          </h4>
                          <ul
                            className={`mt-2 space-y-2 ${
                              isDarkMode ? "text-zinc-300" : "text-zinc-700"
                            }`}
                          >
                            {selectedProject.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2"
                              >
                                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            Project Overview
                          </h4>
                          <p
                            className={`mt-2 ${
                              isDarkMode ? "text-zinc-300" : "text-zinc-700"
                            }`}
                          >
                            {selectedProject.overview}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            My Role
                          </h4>
                          <p
                            className={`mt-2 ${
                              isDarkMode ? "text-zinc-300" : "text-zinc-700"
                            }`}
                          >
                            {selectedProject.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-200">
                      {selectedProject.links?.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            link.type === "primary"
                              ? isDarkMode
                                ? "bg-primary-500 text-white hover:bg-primary-600"
                                : "bg-primary-500 text-white hover:bg-primary-600"
                              : isDarkMode
                              ? "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900"
                          }`}
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            <div className="flex justify-center mt-8">
              <button
                onClick={() =>
                  window.open("https://github.com/aashusoni22", "_blank")
                }
                className="inline-flex items-center gap-2 p-4 rounded-lg text-sm font-medium transition-all duration-300 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:bg-primary-600"
              >
                More projects on GitHub
                <SquareArrowOutUpRight
                  className="w-4 h-4"
                  aria-hidden
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </AnimatePresence>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Projects;
