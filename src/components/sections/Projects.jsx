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
} from "lucide-react";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";

const { featuredProjects } = projects;

const projectDetails = {
  mconverter: {
    overview:
      "MConverter is a powerful markdown editor designed for developers and technical writers who need real-time preview capabilities and seamless cloud synchronization. Built with modern web technologies, it offers a clean, distraction-free writing environment.",
    keyFeatures: {
      "Real-time Preview":
        "See your markdown rendered instantly as you type, with support for all common markdown syntax",
      "Cloud Sync":
        "Automatically save and sync your documents across devices using Firebase backend",
      "Dark Mode":
        "Customizable interface with light and dark themes for comfortable writing in any environment",
      "Mobile Responsive":
        "Fully responsive design that adapts to any screen size for editing on the go",
    },
    technicalDetails: {
      frontend: "Built with React and Redux for state management",
      storage: "Firebase for real-time data synchronization",
      styling: "Tailwind CSS for responsive design",
      assets: "Cloudinary for image optimization and storage",
      animations: "Framer Motion for smooth transitions",
    },
    challenges: [
      "Implementing real-time markdown parsing without affecting performance",
      "Managing complex state with collaborative editing features",
      "Optimizing image uploads and processing",
    ],
  },
  megablog: {
    overview:
      "MegaBlog is a modern blogging platform that focuses on performance and user experience. It features a rich text editor, real-time updates, and robust state management for handling complex blog post data.",
    keyFeatures: {
      "Backend Integration":
        "Seamless integration with Appwrite backend for secure data storage",
      "State Management":
        "Efficient state handling with Redux Toolkit for complex data flows",
      "Form Validation": "Comprehensive form validation using React Hook Form",
      "Content Parsing": "Advanced HTML parsing for rich content display",
    },
    technicalDetails: {
      frontend: "React with Redux Toolkit for state management",
      backend: "Appwrite for backend services",
      editor: "TinyMCE for rich text editing",
      validation: "React Hook Form for form handling",
    },
    challenges: [
      "Implementing real-time content updates without compromising performance",
      "Managing complex form states and validation",
      "Optimizing content delivery for better user experience",
    ],
  },
  wealthwise: {
    overview:
      "WealthWise is a comprehensive financial management platform that helps users track expenses, set financial goals, and make informed decisions about their money through intuitive visualizations and smart calculations.",
    keyFeatures: {
      "Financial Dashboard":
        "Comprehensive overview of financial health with interactive charts",
      "Smart Calculators":
        "Tools for investment planning and financial goal setting",
      "Expense Management": "Detailed tracking and categorization of expenses",
      "Goal Tracking": "Visual progress tracking for financial goals",
    },
    technicalDetails: {
      frontend: "React with TailwindCSS for styling",
      charts: "Recharts for data visualization",
      backend: "Appwrite for secure data storage",
      forms: "React Forms for user input handling",
    },
    challenges: [
      "Creating intuitive data visualizations for complex financial data",
      "Implementing secure handling of sensitive financial information",
      "Optimizing performance with real-time calculations",
    ],
  },
};

const ProjectDetails = ({ project, isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  const details = projectDetails[project.id];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        className={`absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-3/5 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isDarkMode ? "bg-zinc-900" : "bg-white"}`}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="h-full overflow-y-auto">
          {/* Hero Section */}
          <div className="relative h-[40vh] md:h-[50vh]">
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="space-y-4">
                <span
                  className={`inline-block px-3 py-1 text-sm rounded-full ${
                    isDarkMode
                      ? "bg-zinc-800 text-teal-400"
                      : "bg-white/90 text-teal-600"
                  }`}
                >
                  {project.category}
                </span>
                <h2 className="text-4xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-12">
            {/* Project Overview */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Project Overview
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {details.overview}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(details.keyFeatures).map(
                  ([feature, description]) => (
                    <div
                      key={feature}
                      className={`p-4 rounded-lg ${
                        isDarkMode ? "bg-zinc-800/50" : "bg-zinc-50"
                      }`}
                    >
                      <h4
                        className={`font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        {feature}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Technical Implementation
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(details.technicalDetails).map(
                    ([category, detail]) => (
                      <div
                        key={category}
                        className={`flex items-start gap-4 p-4 rounded-lg ${
                          isDarkMode ? "bg-zinc-800/50" : "bg-zinc-50"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isDarkMode ? "bg-zinc-700" : "bg-white"
                          }`}
                        >
                          <Code className="w-5 h-5 text-teal-500" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium capitalize mb-1 ${
                              isDarkMode ? "text-white" : "text-zinc-900"
                            }`}
                          >
                            {category}
                          </h4>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            {detail}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Technical Stack */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Technical Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode
                        ? "bg-zinc-800 text-teal-400 ring-1 ring-zinc-700"
                        : "bg-teal-50 text-teal-700 ring-1 ring-teal-100"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Challenges & Solutions
              </h3>
              <div className="space-y-4">
                {details.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      isDarkMode ? "bg-zinc-800/50" : "bg-zinc-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-teal-500" />
                      <p
                        className={
                          isDarkMode ? "text-zinc-300" : "text-zinc-700"
                        }
                      >
                        {challenge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isDarkMode }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="group h-full cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div
          className={`relative h-full rounded-xl overflow-hidden transition-all duration-300 ${
            isDarkMode
              ? "bg-zinc-900/50 ring-1 ring-zinc-800 hover:ring-teal-500/50"
              : "bg-zinc-50 ring-1 ring-zinc-200 hover:ring-teal-500/30"
          }`}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center text-white gap-1 text-sm font-medium">
                  View Details <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <h3
                  className={`text-base font-medium group-hover:text-teal-500 transition-colors ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isDarkMode
                      ? "bg-zinc-800 text-teal-400"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                    isDarkMode
                      ? "bg-zinc-800 text-teal-400 ring-1 ring-zinc-700"
                      : "bg-teal-50 text-teal-700 ring-1 ring-teal-100"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="pt-2">
              <ul className="grid grid-cols-2 gap-1">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-xs ${
                      isDarkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProjectDetails
        project={project}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section
      id="projects"
      className={`${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
              ${
                isDarkMode
                  ? "bg-zinc-900 text-teal-400"
                  : "bg-teal-50 text-teal-600"
              }`}
            >
              Projects
            </span>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Featured Work
            </h2>
            <p
              className={`max-w-2xl ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              A selection of my recent full-stack applications and frontend
              projects.
            </p>
          </motion.div>

          {/* Projects Grid - 3 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isDarkMode={isDarkMode} />
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${
                  isDarkMode
                    ? "bg-teal-500 text-white hover:bg-teal-400"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
            >
              View More Projects
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
