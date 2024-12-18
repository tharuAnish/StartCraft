import React, { useEffect, useReducer } from "react"

const itemsPerPage = 5

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload }
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload }
    default:
      return state
  }
}

const UseReducerPagination = () => {
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: 0,
  })

  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`)

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length })
  }, [])

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedItems = data.slice(startIndex, endIndex)

  const totalPages = Math.ceil(paginationState.totalItems / itemsPerPage)

  const handlePageClick = (newPage) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: newPage })
  }

  return (
    <div>
      <h2>UseReducerPagination</h2>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => handlePageClick(paginationState.currentPage - 1)}
        disabled={paginationState.currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageClick(paginationState.currentPage + 1)}
        disabled={paginationState.currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default UseReducerPagination
