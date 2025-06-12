import React, { useContext } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Heart,
  Code,
} from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/animations";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/aashusoni22", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/soni2205/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:omsoni051@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LazyMotion features={domAnimation}>
      <footer className={`py-12 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${
                    isDarkMode ? "bg-white/10" : "bg-zinc-100"
                  }`}
                >
                  <Code
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-primary-400" : "text-primary-600"
                    }`}
                  />
                </div>
                <span
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Aashutosh Soni
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Crafting modern web experiences with a focus on performance,
                accessibility, and user satisfaction.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Quick Links
              </h3>
              <ul
                className={`mt-4 space-y-3 ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm hover:text-primary-500 transition-colors ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Contact
              </h3>
              <ul
                className={`mt-4 space-y-3 ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm hover:text-primary-500 transition-colors ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div
            className={`mt-12 pt-8 border-t ${
              isDarkMode ? "border-white/10" : "border-zinc-200"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                className={`text-sm ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                © {currentYear} Aashutosh Soni. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg ${
                      isDarkMode
                        ? "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900"
                    } transition-colors`}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default Footer;
