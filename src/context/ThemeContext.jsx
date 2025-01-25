import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state with dark theme as default
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Return dark if no theme is saved or if saved theme is null/undefined
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Set initial theme in localStorage if not already set
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    }

    // Apply theme class to body
    document.body.className = theme;

    // Optional: Also set data-theme attribute for components that might use it
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Provide both the current theme value and methods to change it
  const value = {
    theme,
    toggleTheme,
    setTheme,
    isDarkMode: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
