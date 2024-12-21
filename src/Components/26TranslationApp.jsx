import React from "react"
import { useLocalization } from "./26LocalizationContext"

const TranslationApp = () => {
  const { local, setLocal, translate } = useLocalization()
  console.log(local)

  const handleLocalChanage = (newLocal) => {
    setLocal(newLocal)
  }

  return (
    <div>
      <h2>TranslationApp:</h2>
      <h4>{translate("greeting")}</h4>
      <h4>{translate("welcome")}</h4>
      <button onClick={() => handleLocalChanage("en")}>To English</button>
      <button onClick={() => handleLocalChanage("es")}>To Espanol</button>
    </div>
  )
}

export default TranslationApp
