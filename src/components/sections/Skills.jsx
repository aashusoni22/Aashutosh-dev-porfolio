import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Code, Layout, Wrench, Database } from "lucide-react";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const skillSets = [
    {
      icon: Code,
      title: "Core Development",
      description:
        "Building robust web applications with modern frameworks and tools",
      skills: ["React.js", "JavaScript", "TypeScript", "Next.js"],
    },
    {
      icon: Layout,
      title: "UI & Design",
      description: "Creating beautiful and responsive user interfaces",
      skills: [
        "Tailwind CSS",
        "Styled Components",
        "Framer Motion",
        "Material UI",
      ],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Developing server-side solutions and API integrations",
      skills: ["Node.js", "RESTful APIs", "MongoDB", "Express"],
    },
    {
      icon: Wrench,
      title: "Development Tools",
      description:
        "Utilizing industry-standard development and deployment tools",
      skills: ["Git & GitHub", "VS Code", "npm/yarn", "Webpack"],
    },
  ];

  return (
    <section id="skills" className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
              ${
                isDarkMode
                  ? "bg-zinc-900 text-teal-400"
                  : "bg-zinc-100 text-teal-600"
              }`}
            >
              Skills & Technologies
            </span>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              My Technical Expertise
            </h2>
            <p
              className={`max-w-2xl text-lg ${
                isDarkMode ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              A comprehensive overview of the technologies and tools I use to
              create modern web applications and digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillSets.map((skillSet, index) => (
              <motion.div
                key={skillSet.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-zinc-900/50 ring-1 ring-zinc-800"
                    : "bg-zinc-50 ring-1 ring-zinc-200"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
                      }`}
                    >
                      <skillSet.icon
                        className={`w-5 h-5 ${
                          isDarkMode ? "text-teal-400" : "text-teal-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {skillSet.title}
                    </h3>
                  </div>

                  <p className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}>
                    {skillSet.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
