import React from "react"

const todos = [
  "I have to learn react",
  "I have to make projects on React",
  "I have to learn NextJs",
  "I have to make projects on NextJs",
  "I have to get apply for masters",
  "I have to apply for Jobs",
  "I have to get a good job",
]

const ListComp = () => {
  return (
    <div>
      <h4>Display List</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListComp
