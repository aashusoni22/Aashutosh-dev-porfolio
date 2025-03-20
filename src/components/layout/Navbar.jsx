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
    href: "https://www.linkedin.com/in/aashutosh22/",
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sectionElements = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      // Find the current section
      let currentSection = null;
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const { id, element } of sectionElements) {
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          currentSection = id;
          break;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle link clicks
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // Wait for mobile menu animation to complete
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 300);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
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
              onClick={(e) => handleNavClick(e, "#home")}
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
                  onClick={(e) => handleNavClick(e, item.href)}
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
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Social Links & Theme Toggle */}
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
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Positioned relative to viewport */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed right-0 top-0 bottom-0 w-3/4 max-w-sm z-50 md:hidden ${
                isDarkMode ? "bg-zinc-900" : "bg-white"
              }`}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-6 pb-8">
                  <div className="pt-10 space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          activeSection === item.href.substring(1)
                            ? isDarkMode
                              ? "bg-zinc-800 text-teal-400"
                              : "bg-zinc-100 text-teal-600"
                            : isDarkMode
                            ? "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <div className="absolute bottom-8 left-6 right-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
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
                        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
