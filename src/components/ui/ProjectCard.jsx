import { useState } from "react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  X,
  Code,
  Star,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectDetails from "../../data/projectDetails.json";

const ProjectDetails = ({ project, isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;
  const details = projectDetails[project.id];

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-3/5 transform bg-zinc-900"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="h-full overflow-y-auto">
            {/* Hero */}
            <div className="relative h-[40vh] md:h-[50vh]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 p-8">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-md text-primary-400 ring-1 ring-white/20">
                  {project.category}
                </span>
                <h2 className="text-4xl font-bold text-white mt-3">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-12">
              {/* Overview */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Project Overview
                </h3>
                <p className="text-lg leading-relaxed text-zinc-400">
                  {details.overview}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(details.keyFeatures).map(([title, desc]) => (
                    <div
                      key={title}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                    >
                      <h4 className="font-medium text-white mb-2">{title}</h4>
                      <p className="text-sm text-zinc-400">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Implementation */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Technical Implementation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(details.technicalDetails).map(
                    ([key, val]) => (
                      <div
                        key={key}
                        className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                      >
                        <div className="p-2 rounded-lg bg-primary-500/10">
                          <Code className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{key}</h4>
                          <p className="text-sm text-zinc-400">{val}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-primary-400 ring-1 ring-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Challenges & Solutions
                </h3>
                {details.challenges.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary-500" />
                    <p className="text-zinc-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, isDarkMode }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group h-full cursor-pointer"
        onClick={() => setShowDetails(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-300 flex flex-col">
          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center text-white gap-1 text-sm font-medium"
                >
                  View Details <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </div>
            </div>
          </div>

          {/* Content - Flex grow to fill remaining space */}
          <div className="p-6 flex flex-col flex-1">
            {/* Title and Description */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-primary-400 ring-1 ring-white/10 flex-shrink-0">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-primary-400 ring-1 ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-400 ring-1 ring-white/10">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-2">
                {project.features.slice(0, 3).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <Star className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons - Always at bottom */}
            <div className="flex gap-3 pt-4 mt-auto">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-all text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectDetails
        project={project}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default ProjectCard;
