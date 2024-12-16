import React from "react"
import { useTheme } from "./19ThemeContext"
import "../styles/19LightDarkMode.css"

const Comp = () => {
  const { isDarkMode } = useTheme()
  const themeClass = isDarkMode ? "dark-theme" : "light-theme"

  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  )
}

export default Comp
