import React, { useContext } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Code, Layout, Database, Wrench } from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/animations";

const About = () => {
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
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className={`${isDarkMode ? "bg-black" : "bg-white"} py-4`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {/* About Content */}
            <motion.div
              variants={fadeIn("up", 0)}
              className="max-w-6xl mx-auto space-y-6"
            >
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
                ${
                  isDarkMode
                    ? "bg-zinc-900 text-teal-400"
                    : "bg-zinc-100 text-teal-600"
                }`}
              >
                About Me
              </span>
              <h2
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Frontend Developer crafting modern web experiences
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                I specialize in building modern web applications with React and
                cutting-edge technologies. With a focus on user experience and
                performance, I create responsive and accessible solutions that
                solve real-world problems.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {skillSets.map((skillSet, index) => (
                <motion.div
                  key={skillSet.title}
                  variants={fadeIn("up", index * 0.1)}
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

                    <p
                      className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}
                    >
                      {skillSet.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skillSet.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-zinc-800 text-teal-400 ring-1 ring-zinc-700"
                              : "bg-zinc-100 text-teal-600"
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
    </LazyMotion>
  );
};

export default About;
