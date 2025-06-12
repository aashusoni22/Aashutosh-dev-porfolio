import React, { useContext, useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Mail,
  MapPin,
  Send,
  Loader,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/animations";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "omsoni051@gmail.com",
      href: "mailto:omsoni051@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@soni2205",
      href: "https://www.linkedin.com/in/soni2205/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@aashusoni22",
      href: "https://github.com/aashusoni22",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, Canada",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aashusoni22", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/soni2205/",
      label: "LinkedIn",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      e.target.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="contact"
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
              Contact
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 0.1)}
              className={`mt-6 text-5xl font-display font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Let's Connect
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className={`mt-6 text-lg ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div
                className={`p-8 rounded-2xl ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                } backdrop-blur-md border ${
                  isDarkMode ? "border-white/10" : "border-zinc-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Get in Touch
                </h3>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Feel free to reach out through any of these channels. I'll get
                  back to you as soon as possible.
                </p>

                <div className="mt-6 space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        isDarkMode
                          ? "hover:bg-white/5 text-zinc-300 hover:text-white"
                          : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                      } transition-colors`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          isDarkMode ? "bg-white/10" : "bg-zinc-100"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 ${
                            isDarkMode ? "text-primary-400" : "text-primary-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-zinc-400" : "text-zinc-500"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                } backdrop-blur-md border ${
                  isDarkMode ? "border-white/10" : "border-zinc-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Connect on Social
                </h3>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Follow me on social media to stay updated with my latest
                  projects and insights.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
                          : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900"
                      } transition-colors`}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className={`p-8 rounded-2xl ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                } backdrop-blur-md border ${
                  isDarkMode ? "border-white/10" : "border-zinc-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Send a Message
                </h3>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`mt-1 block w-full rounded-lg border ${
                        isDarkMode
                          ? "border-white/10 bg-white/5 text-white placeholder-zinc-500"
                          : "border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400"
                      } px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`mt-1 block w-full rounded-lg border ${
                        isDarkMode
                          ? "border-white/10 bg-white/5 text-white placeholder-zinc-500"
                          : "border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400"
                      } px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`mt-1 block w-full rounded-lg border ${
                        isDarkMode
                          ? "border-white/10 bg-white/5 text-white placeholder-zinc-500"
                          : "border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400"
                      } px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500`}
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isSubmitting
                        ? isDarkMode
                          ? "bg-white/10 text-zinc-400 cursor-not-allowed"
                          : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                        : isDarkMode
                        ? "bg-primary-500 text-white hover:bg-primary-600"
                        : "bg-primary-500 text-white hover:bg-primary-600"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {submitStatus && (
                    <div
                      className={`mt-4 rounded-lg p-4 text-sm ${
                        submitStatus.type === "success"
                          ? isDarkMode
                            ? "bg-green-500/10 text-green-400"
                            : "bg-green-50 text-green-600"
                          : isDarkMode
                          ? "bg-red-500/10 text-red-400"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Contact;
