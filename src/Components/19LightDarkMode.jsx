import { useTheme } from "./19ThemeContext"

const LightDarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div>
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      DarkMode
    </div>
  )
}

export default LightDarkMode
