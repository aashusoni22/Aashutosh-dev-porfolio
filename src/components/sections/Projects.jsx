import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";

const { featuredProjects } = projects;

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`h-full rounded-xl overflow-hidden ring-1 transition-all duration-300 ${
          isDarkMode
            ? "bg-zinc-900/50 ring-zinc-800 group-hover:ring-teal-500/50"
            : "bg-zinc-50 ring-zinc-200 group-hover:ring-teal-500/30"
        }`}
      >
        {/* Project Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3`}
          >
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "bg-zinc-900 text-teal-400 hover:bg-zinc-800"
                    : "bg-white/90 text-teal-600 hover:bg-white"
                }`}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "bg-zinc-900 text-teal-400 hover:bg-zinc-800"
                    : "bg-white/90 text-teal-600 hover:bg-white"
                }`}
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 space-y-3">
          <div>
            <div className="flex justify-between items-center">
              <h3
                className={`text-base font-medium group-hover:text-teal-500 transition-colors ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isDarkMode
                    ? "bg-zinc-800 text-teal-400"
                    : "bg-teal-50 text-teal-700"
                }`}
              >
                {project.category}
              </span>
            </div>
            <p
              className={`mt-2 text-sm ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                  isDarkMode
                    ? "bg-zinc-800 text-teal-400 ring-1 ring-zinc-700"
                    : "bg-teal-50 text-teal-700 ring-1 ring-teal-100"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="pt-2">
            <ul className="grid grid-cols-2 gap-1">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className={`text-xs ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section
      id="projects"
      className={`${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
              ${
                isDarkMode
                  ? "bg-zinc-900 text-teal-400"
                  : "bg-teal-50 text-teal-600"
              }`}
            >
              Projects
            </span>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Featured Work
            </h2>
            <p
              className={`max-w-2xl ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              A selection of my recent full-stack applications and frontend
              projects.
            </p>
          </motion.div>

          {/* Projects Grid - 3 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isDarkMode={isDarkMode} />
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${
                  isDarkMode
                    ? "bg-teal-500 text-white hover:bg-teal-400"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
            >
              View More Projects
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
