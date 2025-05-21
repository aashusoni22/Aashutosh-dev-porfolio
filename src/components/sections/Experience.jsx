import React, { useContext } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Building2, Code, Wrench, Calendar } from "lucide-react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/animations";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const experiences = [
    {
      title: "Frontend Developer",
      company: "CJ Jewellers",
      period: "Feb 2025 - Present",
      description:
        "Designed and developed a fully responsive e-commerce platform using React.js, HTML5, CSS3, and JavaScript. Built reusable UI components, integrated REST APIs for real-time product and order management, and implemented authentication and client-side routing. Performed code reviews, debugging, and production issue triaging to maintain a scalable, modular codebase.",
      skills: [
        "React",
        "JavaScript",
        "REST APIs",
        "Responsive Design",
        "Authentication",
        "Unit Testing (Jest)",
        "Code Reviews",
      ],
      icon: Code,
      current: true,
    },
    {
      title: "IT Support Specialist",
      company: "Transcom (Apple)",
      period: "Feb 2024 - Present",
      description:
        "Delivered Tier-2 technical troubleshooting for complex software, cloud services, and hardware issues. Performed root-cause analysis, error monitoring, and system diagnostics to resolve production incidents efficiently. Created detailed technical documentation and collaborated with backend and product teams for escalations. Gained exposure to API behavior, incident triaging, and cloud systems error monitoring.",
      skills: [
        "Technical Support",
        "Root-Cause Analysis",
        "System Diagnostics",
        "API Behavior",
        "Cloud Systems Monitoring",
        "Documentation",
        "Incident Triaging",
      ],
      icon: Wrench,
      current: true,
    },

    {
      title: "Technical Support Specialist",
      company: "Foundever (Intuit)",
      period: "Nov 2022 - Dec 2023",
      description:
        "Provided technical support for Profile (software) users, maintaining a 90% first-call resolution rate. Documented common issues and solutions in the internal knowledge base. Collaborated with team members to improve support processes.",
      skills: [
        "Technical Support",
        "Profile software",
        "Problem Solving",
        "Documentation",
        "Customer Service",
      ],
      icon: Building2,
      current: false,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={fadeIn("up", 0)} className="space-y-4 mb-16">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
                ${
                  isDarkMode
                    ? "bg-zinc-900 text-teal-400"
                    : "bg-zinc-100 text-teal-600"
                }`}
              >
                Experience
              </span>
              <h2
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Professional Journey
              </h2>
              <p
                className={`max-w-2xl ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                A timeline of my professional experience and growth in software
                development.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0)}
                  className={`relative group rounded-2xl p-6 transition-all 
                    ${
                      isDarkMode
                        ? "hover:bg-zinc-900/50 ring-1 ring-zinc-800"
                        : "hover:bg-zinc-50 ring-1 ring-zinc-200"
                    }
                    hover:scale-[1.01] transform-gpu`}
                >
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isDarkMode ? "bg-zinc-800" : "bg-zinc-100"
                          }`}
                        >
                          <experience.icon
                            className={`w-5 h-5 ${
                              isDarkMode ? "text-teal-400" : "text-teal-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-medium ${
                              isDarkMode ? "text-white" : "text-zinc-900"
                            }`}
                          >
                            {experience.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          >
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`mt-4 inline-flex items-center gap-2 text-sm ${
                          isDarkMode ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                        {experience.current && (
                          <span
                            className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                              isDarkMode
                                ? "bg-teal-400/10 text-teal-400"
                                : "bg-teal-600/10 text-teal-600"
                            }`}
                          >
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <p
                        className={`${
                          isDarkMode ? "text-zinc-300" : "text-zinc-600"
                        }`}
                      >
                        {experience.description}
                      </p>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={staggerContainer(0.05, 0.1)}
                      >
                        {experience.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            variants={fadeIn("up", 0)}
                            className={`px-3 py-1 rounded-full text-[12px] ${
                              isDarkMode
                                ? "bg-zinc-800 text-teal-400 ring-1 ring-zinc-700"
                                : "bg-zinc-100 text-teal-600"
                            }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Experience;
