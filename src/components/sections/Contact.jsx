import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { Mail, MapPin, Send, Loader, Linkedin } from "lucide-react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

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
      icon: MapPin,
      title: "Location",
      value: "Toronto, Canada",
      href: null,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

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

  return (
    <section id="contact" className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
              ${
                isDarkMode
                  ? "bg-zinc-900 text-teal-400"
                  : "bg-zinc-100 text-teal-600"
              }`}
            >
              Contact
            </span>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Get in Touch
            </h2>
            <p
              className={`max-w-2xl ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    isDarkMode
                      ? "bg-zinc-900/50 ring-1 ring-zinc-800 hover:bg-zinc-900"
                      : "bg-zinc-50 ring-1 ring-zinc-200 hover:bg-zinc-100"
                  } transition-colors`}
                  target="_blank"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
                    }`}
                  >
                    <info.icon
                      className={`w-5 h-5 ${
                        isDarkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-900"
                      }`}
                    >
                      {info.title}
                    </p>
                    <p
                      className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1.5 ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg text-sm ${
                      isDarkMode
                        ? "bg-zinc-900/50 ring-1 ring-zinc-800 text-white focus:ring-teal-500"
                        : "bg-zinc-50 ring-1 ring-zinc-200 focus:ring-teal-500"
                    } focus:outline-none focus:ring-2 transition-shadow`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1.5 ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg text-sm ${
                      isDarkMode
                        ? "bg-zinc-900/50 ring-1 ring-zinc-800 text-white focus:ring-teal-500"
                        : "bg-zinc-50 ring-1 ring-zinc-200 focus:ring-teal-500"
                    } focus:outline-none focus:ring-2 transition-shadow`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1.5 ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm ${
                      isDarkMode
                        ? "bg-zinc-900/50 ring-1 ring-zinc-800 text-white focus:ring-teal-500"
                        : "bg-zinc-50 ring-1 ring-zinc-200 focus:ring-teal-500"
                    } focus:outline-none focus:ring-2 transition-shadow`}
                  />
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? isDarkMode
                          ? "bg-green-950 text-green-400 ring-1 ring-green-900"
                          : "bg-green-50 text-green-800 ring-1 ring-green-200"
                        : isDarkMode
                        ? "bg-red-950 text-red-400 ring-1 ring-red-900"
                        : "bg-red-50 text-red-800 ring-1 ring-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isDarkMode
                      ? "bg-teal-600 hover:bg-teal-500 text-white"
                      : "bg-teal-600 hover:bg-teal-700 text-white"
                  } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
