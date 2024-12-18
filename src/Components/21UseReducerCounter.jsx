import React, { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "RESET":
      return { count: 0 }
    default:
      return state
  }
}

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>UseReducerCounter</h2>

      <h4>{state.count}</h4>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

export default UseReducerCounter
