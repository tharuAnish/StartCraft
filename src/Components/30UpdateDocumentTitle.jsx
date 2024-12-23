import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./30Home"
import About from "./30About"

const UpdateDocumentTitle = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default UpdateDocumentTitle
