import React, { useState } from "react"

const api = {
  key: "859fd9e814d09b2cd18f0bb03665726a",
  base: "https://api.openweathermap.org/data/2.5/",
}

const WeatherApp = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState(null)

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result)
          setQuery("")
          console.log(result)
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error)
          setWeather(null) // Clear weather data if there's an error
        })
    }
  }

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    let date = d.getDate()
    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <main>
        <h4>Weather App</h4>
        <input
          type="text"
          placeholder="Search City..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />

        {typeof weather.main != "undefined" ? (
          <div>
            <div>
              <h2>
                {weather.name}, {weather.sys?.country}{" "}
              </h2>
              <p>{dateBuilder(new Date())}</p>
            </div>
            <h1>{Math.round(weather.main?.temp)}°C</h1>
            <p>{weather.weather[0].main}</p>
          </div>
        ) : (
          <p>Enter a valid city to see the weather</p>
        )}
      </main>
    </div>
  )
}

export default WeatherApp
