import { createContext, useContext, useState } from "react"

const LocalizationContext = createContext()

export const useLocalization = () => {
  return useContext(LocalizationContext)
}

export function LocalizationProvider({ children }) {
  const [local, setLocal] = useState("en")

  const localizedString = {
    en: {
      greeting: "Hello World!",
      welcome: "Welcome to my app",
    },
    es: {
      greeting: "Hola Mundo!",
      welcome: "Bienvenido a mi aplicacion",
    },
  }

  const translate = (key) => {
    return localizedString[local][key]
  }

  return (
    <LocalizationContext.Provider value={{ local, setLocal, translate }}>
      {children}
    </LocalizationContext.Provider>
  )
}
