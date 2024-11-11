import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
}

const THEME_STORAGE_KEY = 'app-theme-preference'

// Helper function to get initial theme from localStorage
const getInitialTheme = (): boolean => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return true

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  // If there's no saved preference, use system preference as fallback
  if (savedTheme === null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return savedTheme === 'dark'
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light')

    // Optionally update HTML element for global CSS changes
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if there's no saved preference
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        setIsDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
