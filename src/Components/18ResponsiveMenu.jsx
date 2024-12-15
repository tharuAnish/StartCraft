import React, { useState } from "react"
import "../styles/18ResponsiveMenu.css"

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h4>Responsive Menu</h4>
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default ResponsiveMenu
