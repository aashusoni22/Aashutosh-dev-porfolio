import React, { useContext, useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Building2,
  Code,
  Wrench,
  Calendar,
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/animations";
import education from "../../data/education.json";
import certifications from "../../data/certifications.json";
import experiences from "../../data/experiences.json";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: ShieldCheck },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                className="group relative"
              >
                <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-px bg-white/10 group-hover:bg-primary-500/50 transition-colors duration-300" />
                <div className="hidden md:block absolute -left-5 top-0 w-2 h-2 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors duration-300" />

                <div className="md:pl-8">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-primary-400">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 ring-1 ring-primary-500/20">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-white/5 text-primary-400 ring-1 ring-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                className="group relative"
              >
                <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-px bg-white/10 group-hover:bg-primary-500/50 transition-colors duration-300" />
                <div className="hidden md:block absolute -left-5 top-0 w-2 h-2 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors duration-300" />

                <div className="md:pl-8">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-4">{edu.description}</p>

                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-zinc-400"
                        >
                          <Award className="w-4 h-4 text-primary-400" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "certifications":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                className="group"
              >
                <div className="h-full w-[22rem] p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary-500/10">
                      <cert.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-primary-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-sm text-zinc-400">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>

                    <p className="text-zinc-400">{cert.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-white/5 text-primary-400 ring-1 ring-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="experience"
        className={`py-24 ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span
              variants={fadeIn("up", 0)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase ${
                isDarkMode ? "bg-white/10" : "bg-zinc-100"
              } backdrop-blur-md text-primary-400 ring-1 ${
                isDarkMode ? "ring-white/20" : "ring-zinc-200"
              }`}
            >
              Experience
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 0.1)}
              className={`mt-6 text-5xl font-display font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              My Journey
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className={`mt-6 text-lg ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              A timeline of my professional experience, education, and
              certifications that have shaped my career in web development.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mb-12"
          >
            <div
              className={`inline-flex p-1 rounded-xl ${
                isDarkMode ? "bg-white/5" : "bg-zinc-100"
              } backdrop-blur-md border ${
                isDarkMode ? "border-white/10" : "border-zinc-200"
              }`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? "bg-white/10 text-white"
                        : "bg-white text-zinc-900 shadow-sm"
                      : isDarkMode
                      ? "text-zinc-400 hover:text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <tab.icon className="md:w-4 md:h-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {renderContent()}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Experience;
