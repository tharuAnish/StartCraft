import React, { useState } from "react"

const ImageUpload = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  return (
    <div>
      <h4>ImageUpload:</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <hr />
      {file && <img src={URL.createObjectURL(file)} alt="Preview Image" />}
    </div>
  )
}

export default ImageUpload
