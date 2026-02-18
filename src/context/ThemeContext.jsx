import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        // Body par class toggle karne ke liye taaki poora background change ho
        if (isDarkMode) {
            document.body.classList.add("bg-dark", "text-white");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("bg-dark", "text-white");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};