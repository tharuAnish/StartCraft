import axios from "axios"
import React, { useEffect, useState } from "react"

const FetchMultipleAPIs = () => {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData1(response.data))
      .catch((error) => console.log("Error", error))

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => setData2(response.data))
      .catch((error) => console.log("Error", error))
  }, [])

  console.log(data1, data2)

  return <div>FetchMultipleAPIs</div>
}

export default FetchMultipleAPIs
