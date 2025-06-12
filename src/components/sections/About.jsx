import React, { useContext } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Code,
  Layout,
  Database,
  Wrench,
  Award,
  Users,
  Zap,
  Briefcase,
} from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/animations";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, performant web applications with React, Next.js, and modern JavaScript frameworks.",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on accessibility and user experience.",
      skills: [
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      icon: Database,
      title: "Backend Integration",
      description:
        "Developing robust API integrations and working with various backend technologies.",
      skills: ["REST APIs", "GraphQL", "Node.js", "MongoDB"],
    },
    {
      icon: Wrench,
      title: "Development Tools",
      description:
        "Utilizing modern development tools and practices for efficient workflow.",
      skills: ["Git & GitHub", "VS Code", "npm/yarn", "Webpack"],
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Technical Excellence",
      description:
        "Consistently delivering high-quality, maintainable code with a focus on performance and scalability.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Strong experience in agile environments, working closely with designers, backend developers, and product managers.",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description:
        "Proven track record of solving complex technical challenges and implementing innovative solutions.",
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      description:
        "Continuously learning and adapting to new technologies and industry best practices.",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
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
              About Me
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 0.1)}
              className={`mt-6 text-5xl font-display font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Crafting Digital Experiences
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className={`mt-6 text-lg ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              I'm a passionate Frontend Developer with a strong focus on
              creating performant, accessible, and user-friendly web
              applications. With expertise in modern JavaScript frameworks and a
              keen eye for design, I help businesses build digital products that
              users love.
            </motion.p>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 mb-20"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn("up", index * 0.1)}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                } backdrop-blur-md border ${
                  isDarkMode ? "border-white/10" : "border-zinc-200"
                } hover:border-primary-500/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isDarkMode ? "bg-primary-500/10" : "bg-primary-100"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-primary-400" : "text-primary-600"
                      }`}
                    />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}
                    >
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-white/5 text-primary-400 ring-1 ring-white/10"
                              : "bg-zinc-100 text-primary-600 ring-1 ring-zinc-200"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn("up", index * 0.1)}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                } backdrop-blur-md border ${
                  isDarkMode ? "border-white/10" : "border-zinc-200"
                } hover:border-primary-500/50 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isDarkMode ? "bg-primary-500/10" : "bg-primary-100"
                    } w-fit`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-primary-400" : "text-primary-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
