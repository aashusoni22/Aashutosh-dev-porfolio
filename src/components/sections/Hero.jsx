import React, { useContext, useState } from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { fadeIn, scaleIn } from "../../utils/animations";
import ResumeModal from "../shared/ResumeModal";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aashusoni22",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/soni2205/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:aashutoshsoni@proton.me",
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
                  Available to Code
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

              {/* Updated CTA Buttons */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn("up", 0.3)}
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4"
              >
                <a
                  href="#contact"
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium 
                    ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-black text-white hover:bg-zinc-800"
                    } transition-all hover:scale-105`}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="#projects"
                      className={`p-3 rounded-lg transition-all hover:scale-110 ${
                        isDarkMode
                          ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                          : "text-zinc-600 hover:text-black hover:bg-zinc-100"
                      }`}
                    >
                      View Work
                    </a>
                    <button
                      onClick={() => setIsResumeOpen(true)}
                      className={`p-3 rounded-lg transition-all hover:scale-110 ${
                        isDarkMode
                          ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                          : "text-zinc-600 hover:text-black hover:bg-zinc-100"
                      }`}
                      aria-label="View Resume"
                    >
                      <FileText className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    {socialLinks.map((social, index) => (
                      <React.Fragment key={social.href}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg transition-all hover:scale-110 ${
                            isDarkMode
                              ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                              : "text-zinc-600 hover:text-black hover:bg-zinc-100"
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
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          isDarkMode={isDarkMode}
        />
      </section>
    </LazyMotion>
  );
};

export default Hero;
