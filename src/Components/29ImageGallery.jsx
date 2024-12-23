import React, { useReducer } from "react"

const initialState = {
  currentImageIndex: 0,
}

const imageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      }
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      }
    default:
      return state
  }
}

const images = [
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5m-g-p9piLW9repgI0lwnZRWV3eUP-1iLQ&s",
  "https://upload.wikimedia.org/wikipedia/en/2/2d/Angry_Birds_promo_art.png",
]

const ImageGallery = () => {
  const [state, dispatch] = useReducer(imageReducer, initialState)

  const currentImage = images[state.currentImageIndex]

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <img src={currentImage} />
      </div>

      <div>
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Previous
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
      </div>
    </div>
  )
}

export default ImageGallery
