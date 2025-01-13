import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
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

      // Update active section based on scroll position
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

  const slideInVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? `${
              isDarkMode ? "bg-black/90" : "bg-white/90"
            } backdrop-blur-md shadow-sm`
          : `${isDarkMode ? "bg-transparent" : "bg-transparent"}`
      } transition-all duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            A.
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative text-sm tracking-wide ${
                  activeSection === item.href.substring(1)
                    ? isDarkMode
                      ? "text-white"
                      : "text-zinc-900"
                    : isDarkMode
                    ? "text-zinc-400"
                    : "text-zinc-600"
                } transition-colors duration-200`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 w-full h-[2px] ${
                      isDarkMode ? "bg-white" : "bg-zinc-900"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Section: Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`${
                  isDarkMode
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                } transition-colors duration-200`}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              } transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`md:hidden mt-4 rounded-lg ${
                isDarkMode ? "bg-zinc-900" : "bg-white"
              } shadow-lg`}
            >
              <div className="px-4 py-6 space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg ${
                      activeSection === item.href.substring(1)
                        ? isDarkMode
                          ? "text-white"
                          : "text-zinc-900"
                        : isDarkMode
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="pt-6 flex items-center space-x-6 border-t border-zinc-200 dark:border-zinc-800">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className={`${
                        isDarkMode
                          ? "text-zinc-400 hover:text-white"
                          : "text-zinc-600 hover:text-zinc-900"
                      } transition-colors duration-200`}
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
