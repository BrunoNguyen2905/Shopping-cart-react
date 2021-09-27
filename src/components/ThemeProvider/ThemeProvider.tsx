import { useState, createContext, useEffect } from "react";
import { Theme, ThemeContextProps } from "../../type";

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
      const initialValue = localStorage.getItem("theme") || 'light';
      return initialValue;
    });
    const isDarkTheme = theme === "dark";

     const toggleTheme = () => {
      setTheme(isDarkTheme ? "light" : "dark");
    };
    //didMount
    useEffect(() => {
      try {
        const themeFromLocalStorage =  localStorage.getItem('theme') || 'light'
        setTheme(themeFromLocalStorage)
      } catch (err) {}
    }, [])
  
    //didUpdate
    useEffect(() => {
      window.localStorage.setItem('theme',  theme)
    }, [theme])

   
  
    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";
  
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.transition= 'background 0.3s ease-in, color 0.3s ease-in'
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
