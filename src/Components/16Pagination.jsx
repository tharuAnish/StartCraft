import React, { useState } from "react"

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  //from which index to which index items to be in page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexofFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexofFirstItem, indexOfLastItem)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <h4>Pagination:</h4>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {pageNumbers.map((number, index) => (
        <button key={index} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
    </div>
  )
}
export default Pagination
