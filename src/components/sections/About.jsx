import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Code, Laptop, Layers, Rocket, Monitor, Database } from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const services = [
    {
      icon: Layers,
      title: "Custom Web Apps",
      description:
        "Building scalable web applications with modern technologies and best practices.",
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description:
        "Creating fluid layouts that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Enhancing load times and overall application performance for better user experience.",
    },
    {
      icon: Database,
      title: "API Integration",
      description:
        "Seamlessly connecting frontend interfaces with backend services and APIs.",
    },
  ];

  const coreCompetencies = [
    "Modern Frontend Frameworks & Libraries",
    "Responsive & Mobile-First Design",
    "Performance Optimization",
    "Clean & Maintainable Code",
    "UI/UX Best Practices",
    "API Integration & State Management",
  ];

  return (
    <section id="about" className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
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
                Building digital experiences with code
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p
                  className={`text-lg ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  I'm a passionate Frontend Developer with a keen eye for design
                  and a strong foundation in modern web technologies. My journey
                  in web development started with a deep curiosity for creating
                  engaging user interfaces.
                </p>
                <p
                  className={`text-lg ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Through continuous learning and hands-on experience, I've
                  developed expertise in building responsive, accessible, and
                  performant web applications. I specialize in React and its
                  ecosystem, always staying current with the latest industry
                  trends.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-zinc-900/50 ring-1 ring-zinc-800"
                    : "bg-zinc-50 ring-1 ring-zinc-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Core Competencies
                </h3>
                <ul className="space-y-3">
                  {coreCompetencies.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isDarkMode ? "bg-teal-400" : "bg-teal-600"
                        }`}
                      />
                      <span
                        className={
                          isDarkMode ? "text-zinc-300" : "text-zinc-700"
                        }
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                What I Do
              </h2>
              <p
                className={`max-w-2xl ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Specialized services I offer to help businesses create
                exceptional digital experiences.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    isDarkMode
                      ? "bg-zinc-900/50 ring-1 ring-zinc-800"
                      : "bg-zinc-50 ring-1 ring-zinc-200"
                  } hover:scale-[1.02] transition-transform`}
                >
                  <div className="space-y-4">
                    <div
                      className={`inline-flex p-2 rounded-lg ${
                        isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
                      }`}
                    >
                      <service.icon
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
                      {service.title}
                    </h3>
                    <p
                      className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
