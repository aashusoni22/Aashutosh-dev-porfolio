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
    { icon: Github, href: "https://github.com/aashusoni22", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/soni2205/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:aashutoshsoni@proton.me", label: "Email" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-black" : "bg-white"
        } overflow-hidden`}
      >
        {/* Glassy animated blobs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-primary-500 opacity-20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute top-48 right-0 w-[500px] h-[500px] bg-primary-300 opacity-20 rounded-full blur-[180px] animate-spin-slow" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={scaleIn(0)}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/10 backdrop-blur-md text-primary-400 ring-1 ring-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
              </span>
              Available to Code
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.1)}
            className="mt-8 space-y-4"
          >
            <h1 className="text-6xl font-display font-bold tracking-tight text-white drop-shadow-sm">
              Hi, I'm Aashutosh
            </h1>
            <h2 className="text-2xl font-medium text-zinc-400">
              Frontend Developer crafting modern web experiences
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.2)}
            className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            I specialize in building fast, clean, and beautiful web apps using
            React, TypeScript, and modern UI frameworks.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.3)}
            className="mt-8 flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all shadow-md hover:scale-105"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 rounded-xl text-white border border-white/10 hover:bg-white/5 transition-all"
            >
              View Work
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              aria-label="View Resume"
              className="p-3 rounded-xl text-white border border-white/10 hover:bg-white/5 transition-all"
            >
              <FileText className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.4)}
            className="mt-6 flex items-center justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
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
