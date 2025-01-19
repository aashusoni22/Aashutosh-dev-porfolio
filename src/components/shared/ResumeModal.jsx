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

            {/* Resume Preview Content */}
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Aashutosh
                </h1>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                  >
                    Frontend Developer
                  </span>
                  <span
                    className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                  >
                    •
                  </span>
                  <a
                    href="mailto:hello@example.com"
                    className="text-teal-500 hover:underline"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Summary
                </h2>
                <p className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}>
                  Frontend Developer with expertise in building modern web
                  applications using React and cutting-edge technologies.
                  Focused on creating intuitive user experiences with clean,
                  performant code.
                </p>
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
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Redux",
                    "RESTful APIs",
                    "GraphQL",
                    "Framer Motion",
                    "Material UI",
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

              {/* Experience */}
              <div className="space-y-6">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Experience
                </h2>

                {/* Current Role */}
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
                      <p className="text-teal-500">Tech Solutions Inc</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      2023 - Present
                    </span>
                  </div>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <li>
                      Led development of enterprise web applications using React
                      and TypeScript
                    </li>
                    <li>
                      Implemented modern React architectures and optimized
                      performance
                    </li>
                    <li>
                      Managed state with Redux and integrated RESTful APIs
                    </li>
                  </ul>
                </div>

                {/* Previous Role */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        Web Developer
                      </h3>
                      <p className="text-teal-500">Digital Agency</p>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      2022 - 2023
                    </span>
                  </div>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <li>Developed responsive websites for various clients</li>
                    <li>
                      Focused on user experience and performance optimization
                    </li>
                    <li>
                      Worked with JavaScript, React, Node.js, and modern CSS
                    </li>
                  </ul>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Featured Projects
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-zinc-800/50 ring-1 ring-zinc-700"
                        : "bg-zinc-100"
                    }`}
                  >
                    <h3
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      Modern Portfolio Website
                    </h3>
                    <p
                      className={`text-sm mt-2 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      Built with React, Next.js, and Tailwind CSS. Features dark
                      mode, animations, and responsive design.
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-zinc-800/50 ring-1 ring-zinc-700"
                        : "bg-zinc-100"
                    }`}
                  >
                    <h3
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      E-commerce Dashboard
                    </h3>
                    <p
                      className={`text-sm mt-2 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      Developed using React and TypeScript. Includes data
                      visualization and real-time updates.
                    </p>
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
