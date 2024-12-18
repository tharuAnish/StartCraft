import React, { useReducer, useState } from "react"

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload }]
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload)
    case "TOGGLE_TASK_COMPLETED":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )
    default:
      return state
  }
}

const UseReducerToDo = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [currentTask, setCurrentTask] = useState("")

  const addTask = (e) => {
    e.preventDefault() // Prevent page reload on form submission
    if (currentTask.trim() !== "") {
      // Avoid adding empty tasks
      dispatch({ type: "ADD_TASK", payload: currentTask })
      setCurrentTask("") // Clear the input after adding the task
    }
  }

  return (
    <div>
      <h2>UseReducerToDo</h2>
      <form>
        <input
          type="Text"
          value={currentTask}
          placeholder="Write ToDo"
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <br />
        <button onClick={addTask}>Add</button>
      </form>

      <ul>
        ToDo Lists:
        {tasks.map((task, index) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK_COMPLETED", payload: task.id })
              }
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TASK", payload: task.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseReducerToDo
