import React, { useState } from "react"

const Toggle = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <h4>Toggle</h4>
      <label>
        <input type="checkbox" onChange={() => setToggle(!toggle)} />
      </label>
      <p>{toggle ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Toggle
