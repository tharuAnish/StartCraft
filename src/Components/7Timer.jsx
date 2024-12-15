import React, { useEffect, useState } from "react"

const Timer = () => {
  const [time, setTime] = useState(60)

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div>
      <h4>Timer</h4>
      <p>Time Left : {time} seconds.</p>
    </div>
  )
}

export default Timer
