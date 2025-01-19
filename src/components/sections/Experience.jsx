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
      title: "Technical Support Specialist",
      company: "Transcom (Apple)",
      period: "2023 - Present",
      description:
        "Resolved complex technical issues for iOS and macOS systems with 95% customer satisfaction. Created technical documentation to improve team knowledge base. Identified and reported software bugs through internal ticketing systems.",
      skills: [
        "Technical Support",
        "iOS Troubleshooting",
        "Customer Service",
        "Bug Reporting",
        "Knowledge Base Management",
      ],
      icon: Code,
      current: true,
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - 2023",
      description:
        "Built responsive web applications using React and Tailwind CSS for small businesses. Implemented user interfaces following design specifications and optimized website performance. Collaborated with clients to gather requirements and deliver solutions.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "Responsive Design",
      ],
      icon: Wrench,
      current: false,
    },
    {
      title: "IT Support Specialist",
      company: "Foundever (Intuit)",
      period: "2021 - 2022",
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
