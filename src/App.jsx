import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import { motion } from "framer-motion";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <Layout>
        <main className="relative">
          {/* Background gradient */}
          <div
            className={`fixed inset-0 bg-gradient-to-b ${
              isDarkMode
                ? "from-black via-black to-zinc-900"
                : "from-white via-zinc-50 to-zinc-100"
            } -z-10`}
          />

          {/* Main content sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero section */}
            <section id="home">
              <Hero />
            </section>

            {/* About section */}
            <section id="about">
              <About />
            </section>

            {/* Experience section */}
            <section id="experience">
              <Experience />
            </section>

            {/* Projects section */}
            <section id="projects">
              <Projects />
            </section>

            {/* Contact section */}
            <section id="contact">
              <Contact />
            </section>
          </motion.div>
        </main>
      </Layout>
    </div>
  );
};

export default App;
