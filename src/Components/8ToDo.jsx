import React, { useState } from "react"

const ToDo = () => {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, todo])
    setTodo("")
  }

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index))
    console.log("Item deleted with index:", index)
  }

  return (
    <div>
      <h4>ToDo</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <p>Todo:Lists</p>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Todo list Empty, add item.</p>
        )}
      </div>
    </div>
  )
}

export default ToDo
