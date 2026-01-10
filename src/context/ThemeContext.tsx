import { useState, useContext, createContext, useEffect, Children } from "react";
import { theme } from "../styles/theme";

interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
    currentTheme: typeof theme.dark | typeof theme.light
}

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: true,
    toggleTheme: () => { },
    currentTheme: theme.dark

})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const currentTheme = isDarkMode ? theme.dark : theme.light


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark")
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode)
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')

    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext)




