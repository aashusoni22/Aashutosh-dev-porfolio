import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
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
    <footer
      className={`${
        isDarkMode ? "bg-black text-zinc-400" : "bg-zinc-50 text-zinc-600"
      } 
      py-12 mt-20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 
          border-b border-zinc-200 dark:border-zinc-800"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2
              whileHover={{ x: 2 }}
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Aashutosh.
            </motion.h2>
            <p className="text-sm max-w-md">
              Crafting digital experiences through clean code and thoughtful
              design. Available for freelance work and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3
              className={`text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 2 }}
                  className="text-sm hover:text-blue-500 transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={12} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3
              className={`text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Get in Touch
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="hover:text-blue-500 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm">
              Email: your.email@example.com
              <br />
              Location: City, Country
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Aashutosh. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className={`group flex items-center space-x-2 text-sm ${
              isDarkMode ? "hover:text-white" : "hover:text-zinc-900"
            } transition-colors duration-200`}
          >
            <span>Back to top</span>
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform duration-200"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
