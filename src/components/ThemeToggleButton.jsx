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
      className="fixed top-4 left-2 p-2 rounded-full duration-300 shadow-md 
                 shadow-black/25 dark:shadow-white/50 
                 sm:hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] 
                 sm:dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] 
                 transition-shadow
                 border"
      aria-label="Toggle Theme"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="3 3 25 25"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black dark:text-white transition-all duration-300"
      >
        <path d="M14.392 17.894h6.432v1.608h-6.432v-1.608zM9.568 19.502l4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z" />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
