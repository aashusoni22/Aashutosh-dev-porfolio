import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Globe,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";

const ResumeModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  const bgColor = isDarkMode ? "bg-zinc-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-zinc-900";
  const subTextColor = isDarkMode ? "text-zinc-300" : "text-zinc-700";
  const mutedTextColor = isDarkMode ? "text-zinc-400" : "text-zinc-500";
  const borderColor = isDarkMode ? "border-zinc-800" : "border-zinc-200";
  const hoverBgColor = isDarkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-100";
  const cardBgColor = isDarkMode ? "bg-zinc-800/50" : "bg-zinc-50";
  const cardBorderColor = isDarkMode ? "border-zinc-700" : "border-zinc-200";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 py-12 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-4xl rounded-2xl ${bgColor} shadow-xl overflow-hidden`}
          >
            {/* Header */}
            <div
              className={`sticky top-0 z-10 px-6 py-4 flex items-center justify-between ${bgColor} border-b ${borderColor} backdrop-blur-sm`}
            >
              <h3 className={`font-medium text-lg ${textColor}`}>Resume</h3>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-10">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar Placeholder */}
                <div
                  className={`hidden md:flex w-32 h-32 rounded-full ${cardBgColor} items-center justify-center flex-shrink-0 border ${cardBorderColor}`}
                >
                  <span className={`text-4xl font-bold ${textColor}`}>AS</span>
                </div>

                {/* Bio */}
                <div className="space-y-4 flex-grow">
                  <h1 className={`text-4xl font-bold ${textColor}`}>
                    Aashutosh Soni
                  </h1>
                  <p className={`text-xl font-medium text-teal-500`}>
                    Frontend Developer
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm">
                    <div className={`flex items-center gap-2 ${subTextColor}`}>
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span>Toronto, Canada</span>
                    </div>
                    <div className={`flex items-center gap-2 ${subTextColor}`}>
                      <Phone className="w-4 h-4 text-teal-500" />
                      <span>705-542-9757</span>
                    </div>
                    <a
                      href="mailto:omsoni051@gmail.com"
                      className="flex items-center gap-2 text-teal-500 hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span>omsoni051@gmail.com</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/soni2205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-500 hover:underline"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>linkedin/aashutosh</span>
                    </a>
                    <a
                      href="https://github.com/aashusoni22"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-500 hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      <span>github/aashutosh</span>
                    </a>
                    <a
                      href="https://aashutosh-dev-porfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-500 hover:underline"
                    >
                      <Globe className="w-4 h-4" />
                      <span>portfolio/aashutosh</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-5">
                <h2
                  className={`text-2xl font-semibold ${textColor} flex items-center`}
                >
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3
                      className={`text-base font-medium ${textColor} border-b pb-2 ${borderColor}`}
                    >
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript (ES6+)",
                        "TypeScript",
                        "React.js",
                        "Next.js",
                        "Redux",
                        "Tailwind CSS",
                        "UX/UI",
                        "Vite",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                              : "bg-zinc-100 text-zinc-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3
                      className={`text-base font-medium ${textColor} border-b pb-2 ${borderColor}`}
                    >
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "Java",
                        "RESTful APIs",
                        "SQL",
                        "MongoDB",
                        "Appwrite",
                        "Firebase",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                              : "bg-zinc-100 text-zinc-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3
                      className={`text-base font-medium ${textColor} border-b pb-2 ${borderColor}`}
                    >
                      Testing & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Jest",
                        "React Testing Library",
                        "Git",
                        "GitHub Actions",
                        "CI/CD",
                        "Docker",
                        "AWS",
                        "Vercel",
                        "Netlify",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                              : "bg-zinc-100 text-zinc-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3
                      className={`text-base font-medium ${textColor} border-b pb-2 ${borderColor}`}
                    >
                      Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "VS Code",
                        "npm/yarn",
                        "Chrome DevTools",
                        "Figma",
                        "Storybook",
                        "Postman",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                              : "bg-zinc-100 text-zinc-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h2
                  className={`text-2xl font-semibold ${textColor} flex items-center`}
                >
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Experience
                </h2>

                <div className="space-y-8">
                  {/* Frontend Developer */}
                  <div
                    className={`p-6 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
                      <div>
                        <h3 className={`text-lg font-semibold ${textColor}`}>
                          Frontend Developer
                        </h3>
                        <p className="text-teal-500 font-medium">
                          CJ Jewellers (Freelance)
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${mutedTextColor} text-sm`}
                      >
                        <Calendar className="w-4 h-4" />
                        Feb 2025 - Present
                      </div>
                    </div>
                    <ul className={`space-y-2 ${subTextColor}`}>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Designed an e-commerce web platform using{" "}
                          <span className="font-medium">React.js</span>,{" "}
                          <span className="font-medium">HTML5</span>,{" "}
                          <span className="font-medium">CSS3</span>, and{" "}
                          <span className="font-medium">JavaScript</span>,
                          ensuring fully responsive, user-friendly interfaces
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Built reusable UI components and integrated REST APIs
                          for real-time product, cart, and order management
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Currently implementing authentication, client-side
                          routing, and unit testing for critical components
                          using <span className="font-medium">Jest</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Maintained a scalable, modular codebase, and performed{" "}
                          <span className="font-medium">code reviews</span>,{" "}
                          <span className="font-medium">debugging</span>, and{" "}
                          <span className="font-medium">
                            production issue triaging
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* IT Support Specialist */}
                  <div
                    className={`p-6 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
                      <div>
                        <h3 className={`text-lg font-semibold ${textColor}`}>
                          IT Support Specialist
                        </h3>
                        <p className="text-teal-500 font-medium">Transcom</p>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${mutedTextColor} text-sm`}
                      >
                        <Calendar className="w-4 h-4" />
                        Feb 2024 - Present
                      </div>
                    </div>
                    <ul className={`space-y-2 ${subTextColor}`}>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Delivered Tier-2 technical troubleshooting for complex
                          software, cloud services, and hardware issues
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Performed{" "}
                          <span className="font-medium">
                            root-cause analysis
                          </span>
                          ,{" "}
                          <span className="font-medium">error monitoring</span>,
                          and{" "}
                          <span className="font-medium">
                            system diagnostics
                          </span>{" "}
                          to resolve production incidents efficiently
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Created detailed technical documentation and
                          collaborated closely with backend and product teams
                          for escalations
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <span>
                          Acquired exposure to{" "}
                          <span className="font-medium">API behavior</span>,{" "}
                          <span className="font-medium">incident triaging</span>
                          ,{" "}
                          <span className="font-medium">
                            cloud systems error monitoring
                          </span>
                          , and customer-facing issue resolution
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                <h2
                  className={`text-2xl font-semibold ${textColor} flex items-center`}
                >
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* SnapCast */}
                  <div
                    className={`flex flex-col h-full p-6 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-lg font-semibold ${textColor}`}>
                        SnapCast
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/aashusoni22/snapcast"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-400 p-1"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="https://snapcast-eight.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-400 p-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <p className="text-teal-500 text-sm font-medium mb-2">
                      Video Sharing Platform
                    </p>
                    <p className={`text-xs mb-4 ${mutedTextColor}`}>
                      Next.js • TypeScript • PostgreSQL
                    </p>
                    <div className="flex-grow">
                      <p className={`text-sm ${subTextColor} mb-3`}>
                        A full-stack video sharing platform with capabilities
                        for uploading, recording, and sharing videos with
                        customizable privacy settings.
                      </p>
                      <ul className={`text-xs space-y-2 ${subTextColor}`}>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>
                            Real-time video recording with MediaRecorder API
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>
                            Integrated with Bunny.net for efficient streaming
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>Responsive UI with Tailwind CSS</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* WealthWise */}
                  <div
                    className={`flex flex-col h-full p-6 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-lg font-semibold ${textColor}`}>
                        WealthWise
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/aashusoni22/wealthwise"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-400 p-1"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="https://wealthwise-eta.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-400 p-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <p className="text-teal-500 text-sm font-medium mb-2">
                      Financial Dashboard
                    </p>
                    <p className={`text-xs mb-4 ${mutedTextColor}`}>
                      React.js • Redux • Appwrite • Recharts
                    </p>
                    <div className="flex-grow">
                      <p className={`text-sm ${subTextColor} mb-3`}>
                        A full-stack dashboard application enabling users to
                        track, visualize, and analyze key financial metrics in
                        real-time.
                      </p>
                      <ul className={`text-xs space-y-2 ${subTextColor}`}>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>
                            Interactive charts and visualizations with Recharts
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>Secure authentication with Appwrite</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></span>
                          <span>Fully responsive design with Tailwind CSS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Education */}
                <div className="space-y-5">
                  <h2
                    className={`text-2xl font-semibold ${textColor} flex items-center`}
                  >
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Education
                  </h2>
                  <div
                    className={`p-5 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <div className="flex flex-col justify-between gap-2">
                      <h3 className={`text-lg font-semibold ${textColor}`}>
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-teal-500">Algoma University</p>
                      <div
                        className={`flex items-center gap-2 ${mutedTextColor} text-sm mt-2`}
                      >
                        <Calendar className="w-4 h-4" />
                        January 2019 - April 2021
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-5">
                  <h2
                    className={`text-2xl font-semibold ${textColor} flex items-center`}
                  >
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Certifications
                  </h2>
                  <div
                    className={`p-5 rounded-lg border ${cardBorderColor} ${cardBgColor}`}
                  >
                    <ul className={`space-y-3 ${subTextColor}`}>
                      <li className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <div>
                          <p className={`font-medium ${textColor}`}>
                            Meta Front-End Developer Professional Certificate
                          </p>
                          <p className={`text-sm ${mutedTextColor}`}>
                            Coursera
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <div>
                          <p className={`font-medium ${textColor}`}>
                            Frontend Developer (React)
                          </p>
                          <p className={`text-sm ${mutedTextColor}`}>
                            HackerRank
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                        <div>
                          <p className={`font-medium ${textColor}`}>
                            JavaScript Algorithms and Data Structures
                          </p>
                          <p className={`text-sm ${mutedTextColor}`}>
                            freeCodeCamp
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
