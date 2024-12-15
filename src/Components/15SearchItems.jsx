import React, { useState } from "react"

const SearchItems = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>SearchItem</h2>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchItems
