import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
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
    <footer className={`${isDarkMode ? "bg-black" : "bg-white"} pt-20 pb-10`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Aashutosh.
            </h2>
            <p
              className={`${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              } text-sm max-w-md`}
            >
              Frontend developer crafting digital experiences through clean code
              and thoughtful design. Available for freelance work and
              collaborations.
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center text-sm font-medium gap-1 ${
                isDarkMode ? "text-teal-400" : "text-teal-600"
              } hover:gap-2 transition-all duration-200`}
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
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
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transform transition-all duration-200 ${
                    isDarkMode
                      ? "text-zinc-400 hover:text-teal-400 hover:translate-x-1"
                      : "text-zinc-600 hover:text-teal-600 hover:translate-x-1"
                  }`}
                >
                  {link.label}
                </a>
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
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transform transition-all duration-200 hover:-translate-y-1 ${
                    isDarkMode
                      ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div
              className={`text-sm ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <p>your.email@example.com</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`text-sm ${
              isDarkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            © {currentYear} Aashutosh. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg 
            transition-all duration-200 transform hover:-translate-y-1 ${
              isDarkMode
                ? "bg-zinc-900 text-zinc-400 hover:text-white ring-1 ring-zinc-800"
                : "bg-zinc-50 text-zinc-600 hover:text-zinc-900 ring-1 ring-zinc-200"
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
