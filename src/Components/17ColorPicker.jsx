import React, { useState } from "react"

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000")

  return (
    <div>
      <h4>ColorPicker:</h4>
      <input type="color" onChange={(e) => setSelectedColor(e.target.value)} />
      <div
        style={{
          backgroundColor: selectedColor,
          height: "400px",
          width: "500px",
        }}
      ></div>
    </div>
  )
}

export default ColorPicker
