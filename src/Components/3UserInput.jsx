import React, { useState } from "react"

const UserInput = () => {
  const [input, setInput] = useState("")

  return (
    <div>
      <h4>User Input</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>User Input: {input}</p>
    </div>
  )
}

export default UserInput
