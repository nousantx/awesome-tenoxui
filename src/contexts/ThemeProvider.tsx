import React, { createContext, useContext, useState, useCallback } from 'react'

type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      // If there's no saved theme, default to true (dark mode)
      if (saved === null) return true
      // Parse boolean value
      return saved === 'true'
    } catch (error) {
      // If there's any error reading from localStorage, default to true
      console.error('Error reading theme from localStorage:', error)
      return true
    }
  })

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev: boolean) => {
      const newValue = !prev
      // Store as string 'true' or 'false'
      localStorage.setItem('theme', String(newValue))
      return newValue
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
