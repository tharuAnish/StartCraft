import React, { useState } from "react"

const MultipleStateInOneState = () => {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World!",
    isActive: true,
  })

  function incrementCount() {
    setState({ ...state, count: state.count + 1 })
  }
  function changeText() {
    setState({ ...state, text: "Changed Text" })
  }

  function toggleStatus() {
    setState({ ...state, isActive: !state.isActive })
  }

  return (
    <div>
      <h4>MultipleStateInOneState</h4>
      <p>Count:{state.count}</p>
      <p>Text:{state.text}</p>
      <p>{state.isActive ? "Active" : "NotActive"}</p>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  )
}

export default MultipleStateInOneState
