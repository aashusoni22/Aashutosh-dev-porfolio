import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";

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
        {/* Main content sections */}
        <main className="min-h-screen">
          {/* Hero section */}
          <section id="home">
            <Hero />
          </section>

          {/* About section */}
          <section id="about" className="py-20">
            <About />
          </section>

          {/* Experience section */}
          <section id="experience" className="py-20">
            <Experience />
          </section>

          {/* Projects section */}
          <section id="projects" className="py-20">
            <Projects />
          </section>

          {/* Contact section */}
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default App;
