import React from "react"

const RandomQuote = () => {
  let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is never too late to be what you might have been. - George Eliot",
    "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain. - Vivian Greene",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  ]

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  return (
    <div>
      RandomQuote:
      <p>{quote}</p>
    </div>
  )
}

export default RandomQuote
