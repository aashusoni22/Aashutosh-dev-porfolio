import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/aashusoni22", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aashutosh-soni-225a12177/",
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200
        ${
          isScrolled
            ? isDarkMode
              ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800"
              : "bg-white/80 backdrop-blur-md border-b border-zinc-200"
            : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className={`text-2xl font-bold transition-colors ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            A.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? isDarkMode
                      ? "text-teal-400"
                      : "text-teal-600"
                    : isDarkMode
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                      isDarkMode ? "bg-teal-400" : "bg-teal-600"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop: Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}

            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDarkMode
                ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`border-b md:hidden overflow-hidden ${
              isDarkMode
                ? "bg-zinc-900 border-zinc-800"
                : "bg-white border-zinc-200"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? isDarkMode
                          ? "bg-zinc-800 text-teal-400"
                          : "bg-zinc-100 text-teal-600"
                        : isDarkMode
                        ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          isDarkMode
                            ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                        }`}
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setTheme(isDarkMode ? "light" : "dark");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    }`}
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
