import React from "react"
import HelloWorld from "./Components/1HelloWorld"
import Counter from "./Components/2Counter"
import UserInput from "./Components/3UserInput"
import ListComp from "./Components/4ListComp"
import Toggle from "./Components/5Toggle"
import Fetch from "./Components/6Fetch"
import Timer from "./Components/7Timer"
import ToDo from "./Components/8ToDo"
import ChangeBG from "./Components/9ChangeBG"
import ReactRouter from "./Components/10ReactRouter"
import RandomQuote from "./Components/11RandomQuote"
import ImageUpload from "./Components/12ImageUpload"
import Login from "./Components/13Login"
import Weather from "./Components/14Weather"
import SearchItems from "./Components/15SearchItems"
import Pagination from "./Components/16Pagination"
import ColorPicker from "./Components/17ColorPicker"
import ResponsiveMenu from "./Components/18ResponsiveMenu"

export default function App() {
  // const items = ["1Notebook", "2Pen", "3Laptop", "4Book", "5Wallet", "6Keys"]

  return (
    <div>
      <h2>React Practice:</h2>
      <hr />
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <UserInput /> */}
      {/* <ListComp /> */}
      {/* <Toggle /> */}
      {/* <Fetch /> */}
      {/* <Timer /> */}
      {/* <ToDo /> */}
      {/* <ChangeBG /> */}
      {/* <ReactRouter /> */}
      {/* <RandomQuote /> */}
      {/* <ImageUpload /> */}
      {/* <Login /> */}
      {/* <Weather /> */}
      {/* <SearchItems items={items} /> */}
      {/* <Pagination items={items} itemsPerPage={2} /> */}
      {/* <ColorPicker /> */}
      <ResponsiveMenu />
    </div>
  )
}
