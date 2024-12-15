import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"

const ReactRouter = () => {
  return (
    <div>
      ReactRouter:
      <BrowserRouter>
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ReactRouter
