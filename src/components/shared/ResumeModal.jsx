import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ResumeModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 py-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl rounded-2xl ${
              isDarkMode ? "bg-zinc-900" : "bg-white"
            }`}
          >
            {/* Modal Header */}
            <div
              className={`sticky top-0 z-10 px-4 py-3 flex items-center justify-between ${
                isDarkMode
                  ? "bg-zinc-900/80 border-b border-zinc-800"
                  : "bg-white/80 border-b border-zinc-200"
              } backdrop-blur-sm`}
            >
              <h3
                className={`font-medium ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Resume
              </h3>
              <button
                onClick={onClose}
                className={`p-1.5 rounded-lg transition-colors ${
                  isDarkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Content */}
            <div className="p-6 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Aashutosh Soni
                </h1>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                  >
                    Toronto, Canada
                  </span>
                  <span
                    className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                  >
                    •
                  </span>
                  <a
                    href="mailto:aashutoshsoni@proton.me"
                    className="text-teal-500 hover:underline"
                  >
                    aashutoshsoni@proton.me
                  </a>
                  <span
                    className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                  >
                    •
                  </span>
                  <a
                    href="https://github.com/aashusoni22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "JavaScript (ES6+)",
                    "Redux",
                    "Tailwind CSS",
                    "Firebase",
                    "Appwrite",
                    "Node.js",
                    "MongoDB",
                    "Git",
                    "REST APIs",
                    "Framer Motion",
                    "React Hook Form",
                    "Vite",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? "bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700"
                          : "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Featured Projects
                </h2>
                <div className="space-y-6">
                  {/* DevProject Generator */}
                  <div
                    className={`p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-zinc-800/50 ring-1 ring-zinc-700"
                        : "bg-zinc-100"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        DevProject Generator
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/aashusoni22/DevProject"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://dev-generator.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      React.js, Tailwind CSS, Context API, RapidAPI, Vercel
                    </p>
                    <ul
                      className={`list-disc list-inside space-y-1 text-sm mt-3 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      <li>
                        Built AI-powered platform generating personalized
                        portfolio projects for junior developers
                      </li>
                      <li>
                        Implemented interactive UI with skill selection,
                        experience level indicators, and project complexity
                        controls
                      </li>
                      <li>
                        Integrated job board API to match developer skills with
                        relevant employment opportunities
                      </li>
                    </ul>
                  </div>

                  {/* WealthWise */}
                  <div
                    className={`p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-zinc-800/50 ring-1 ring-zinc-700"
                        : "bg-zinc-100"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        WealthWise
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/aashusoni22/wealthwise"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://wealthwise-eta.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      React.js, Redux, Tailwind CSS, Recharts, Appwrite, Framer
                      Motion
                    </p>
                    <ul
                      className={`list-disc list-inside space-y-1 text-sm mt-3 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      <li>
                        Developed comprehensive financial management application
                        with expense tracking and goal setting
                      </li>
                      <li>
                        Created interactive dashboard with data visualization
                        using Recharts
                      </li>
                      <li>
                        Implemented secure authentication and cloud storage
                        using Appwrite backend services
                      </li>
                      <li>
                        Built responsive design that works seamlessly across
                        desktop and mobile devices
                      </li>
                    </ul>
                  </div>

                  {/* MConverter */}
                  <div
                    className={`p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-zinc-800/50 ring-1 ring-zinc-700"
                        : "bg-zinc-100"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        MConverter
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/aashusoni22/MConverter/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://m-converter.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:underline text-sm"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      React.js, Redux, Firebase, Tailwind CSS, Cloudinary,
                      Framer
                    </p>
                    <ul
                      className={`list-disc list-inside space-y-1 text-sm mt-3 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      <li>
                        Developed real-time markdown editor with preview
                        functionality
                      </li>
                      <li>
                        Implemented cloud synchronization for data persistence
                      </li>
                      <li>Integrated Cloudinary for asset management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Experience
                </h2>
                {/* Technical Support Specialist */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        Technical Support Specialist
                      </h3>
                      <p className="text-teal-500">Transcom (Apple)</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      Feb 2024 - Present
                    </span>
                  </div>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <li>
                      Resolved 150+ technical issues weekly with 95%
                      satisfaction rate
                    </li>
                    <li>
                      Implemented structured problem-solving methodologies
                    </li>
                    <li>
                      Collaborated with development teams on software defects
                    </li>
                  </ul>
                </div>

                {/* Frontend Developer */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        Frontend Developer
                      </h3>
                      <p className="text-teal-500">CJ Jewellers (Freelance)</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      Feb 2025 - Present
                    </span>
                  </div>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <li>
                      Developed responsive e-commerce website using React.js
                    </li>
                    <li>
                      Implemented pixel-perfect UI components from Figma designs
                    </li>
                    <li>Optimized website achieving 90+ PageSpeed score</li>
                  </ul>
                </div>

                {/* IT Support Specialist */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        IT Support Specialist
                      </h3>
                      <p className="text-teal-500">Foundever (Inuit)</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      May 2022 - November 2023
                    </span>
                  </div>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <li>
                      Maintained 90% first-call resolution rate supporting
                      Profile software users
                    </li>
                    <li>
                      Created comprehensive documentation reducing average
                      resolution time by 30%
                    </li>
                    <li>
                      Collaborated in an Agile team environment to improve
                      support processes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Education
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-teal-500">Algoma University</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      2019 - 2021
                    </span>
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
