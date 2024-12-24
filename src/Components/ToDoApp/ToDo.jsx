import React, { useState } from "react"

const Todo = () => {
  // State variables
  const [inputValue, setInputValue] = useState() // Tracks input field value for adding new todo
  const [todos, setTodos] = useState([]) // Stores the list of todo items
  const [editMode, setEditMode] = useState(false) // Indicates whether the app is in edit mode
  const [editId, setEditId] = useState(null) // Stores the id of the todo being edited
  const [editValue, setEditValue] = useState("") // Tracks the current value in the edit input

  // Function to add a new todo
  const addTodo = () => {
    // Check if input is not empty
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(), // Generate a unique id using current timestamp
        text: inputValue, // Set the text of the new todo
      }
      // Update the todo list with the new todo
      setTodos([...todos, newTodo])
      setInputValue("") // Clear the input field after adding
    }
  }

  // Function to delete a todo by its id
  const deleteTodo = (id) => {
    // Filter out the todo with the matching id from the todos array
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos) // Update the todos state with the new list
  }

  // Function to enable edit mode for a todo
  const enterEditMode = (id, text) => {
    setEditMode(true) // Set editMode to true to display edit input
    setEditId(id) // Set the id of the todo to be edited
    setEditValue(text) // Set the text of the todo to be edited in the edit input field
  }

  // Function to update a todo with the edited value
  const updateTodo = () => {
    // Map through the todos and update the edited todo
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue } // Update the text of the todo with the edited value
      }
      return todo // Return other todos unchanged
    })
    setTodos(updatedTodos) // Update the todos state with the modified list
    setEditMode(false) // Disable edit mode
    setEditId(null) // Reset editId to null after update
    setEditValue("") // Clear the edit input after updating
  }

  return (
    <div>
      <h2>Todo</h2>
      {/* Input field to enter a new todo */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue on change
      />

      {/* Conditionally render add or update buttons based on editMode */}
      {editMode ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)} // Update editValue on change
          />
          <button onClick={updateTodo}>Update</button>{" "}
          {/* Button to update the todo */}
          <button
            onClick={() => {
              setEditMode(false) // Cancel edit mode without making changes
              setEditId(null) // Reset editId
              setEditValue("") // Clear the edit input
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={addTodo}>Add</button> /* Button to add a new todo */
      )}

      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {/* Display the text of the todo */}
            <button onClick={() => enterEditMode(todo.id, todo.text)}>
              Edit
            </button>{" "}
            {/* Button to edit the todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
            {/* Button to delete the todo */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
