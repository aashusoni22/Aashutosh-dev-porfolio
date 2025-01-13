import React, { useContext } from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { fadeIn, scaleIn } from "../../utils/animations";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className={`relative min-h-screen ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="absolute top-0 right-0 w-3/5 h-screen opacity-10">
          <div
            className={`w-full h-full ${
              isDarkMode ? "bg-teal-500" : "bg-teal-600"
            } blur-[120px]`}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn(0)}
              >
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  ${
                    isDarkMode
                      ? "bg-zinc-900 text-teal-400 ring-1 ring-zinc-800"
                      : "bg-zinc-50 text-teal-600 ring-1 ring-zinc-200"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isDarkMode ? "bg-teal-400" : "bg-teal-500"
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        isDarkMode ? "bg-teal-400" : "bg-teal-500"
                      }`}
                    />
                  </span>
                  Available for Projects
                </span>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn("up", 0.1)}
                className="mt-8 space-y-4"
              >
                <h1
                  className={`text-4xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Hi, I'm Aashutosh
                </h1>
                <h2
                  className={`text-xl ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Frontend Developer crafting delightful web experiences
                </h2>
              </motion.div>

              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn("up", 0.2)}
                className={`mt-6 text-lg ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                I specialize in building modern web applications with React and
                cutting-edge technologies. My focus is on creating intuitive
                interfaces that combine clean design with optimal performance.
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn("up", 0.3)}
                className="mt-8 flex flex-wrap gap-4"
              >
                {/* CTA Buttons */}
                <a
                  href="#contact"
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium 
                    ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-black text-white hover:bg-zinc-800"
                    } transition-colors`}
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#work"
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                    ${
                      isDarkMode
                        ? "bg-zinc-900 text-white ring-1 ring-zinc-800 hover:bg-zinc-800"
                        : "bg-white text-black ring-1 ring-zinc-200 hover:bg-zinc-50"
                    } transition-colors`}
                >
                  View My Work
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn("up", 0.4)}
                className="mt-12"
              >
                <div className="flex items-center gap-1">
                  {socialLinks.map((social, index) => (
                    <React.Fragment key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg transition-colors ${
                          isDarkMode
                            ? "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                            : "hover:bg-zinc-100 text-zinc-600 hover:text-black"
                        }`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                      {index < socialLinks.length - 1 && (
                        <span
                          className={`w-px h-4 ${
                            isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
