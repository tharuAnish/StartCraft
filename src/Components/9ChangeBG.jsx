import React, { useState } from "react"

const ChangeBG = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow")

  function handleClick() {
    const newColor = backgroundColor === "yellow" ? "lightblue" : "yellow"
    setBackgroundColor(newColor)
  }

  return (
    <div>
      ChangeBG:
      <div
        onClick={handleClick}
        style={{
          backgroundColor,
          width: "200px",
          height: "200px",
          cursor: "pointer",
        }}
      >
        Change color when clicked
      </div>
    </div>
  )
}

export default ChangeBG
