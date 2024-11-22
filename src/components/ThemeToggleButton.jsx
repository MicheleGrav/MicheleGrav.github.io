import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Update the HTML class on theme change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 left-4 p-2 rounded-full shadow-md transition-all duration-300 border-black dark:border-white"
      aria-label="Toggle Theme"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-current text-black dark:text-white transition-all duration-300`}
      >
        <path d="M14.392 17.894h6.432v1.608h-6.432v-1.608zM9.568 19.502l4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z" />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
