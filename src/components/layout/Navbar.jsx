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
    href: "https://www.linkedin.com/in/soni2205/",
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
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        el: document.getElementById(item.href.substring(1)),
      }));

      const pos = window.scrollY + 100;
      for (const { id, el } of sections) {
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const position =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      setIsMobileMenuOpen(false);
      setTimeout(
        () => window.scrollTo({ top: position, behavior: "smooth" }),
        300
      );
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? isDarkMode
              ? "bg-black/50 backdrop-blur-lg"
              : "bg-white/50 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-2xl font-bold text-white"
            >
              A.
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-400"
                      : "text-zinc-400 hover:text-white"
                  } transition`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-400"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.4,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
                >
                  <Icon size={18} />
                </a>
              ))}

              {/* <button
                onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button> */}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
              aria-label="Toggle mobile menu"
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed top-0 bottom-0 right-0 w-3/4 max-w-sm bg-black/90 z-50`}
            >
              <div className="p-6 pt-16 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block text-lg font-medium rounded-lg px-4 py-3 ${
                      activeSection === item.href.substring(1)
                        ? "bg-white/10 text-primary-400"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    } transition`}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="flex space-x-2">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                  {/* <button
                    onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                    className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button> */}
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
