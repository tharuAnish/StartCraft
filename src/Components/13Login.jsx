import React, { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [users, setUsers] = useState([])

  const handleAuthentication = (e) => {
    e.preventDefault()

    if (isRegistered) {
      //Login
      const user = users.find(
        (u) => u.email === email && u.password === password
      )
      if (user) {
        setIsLoggedin(true)
        alert("Login successful")
      } else {
        alert("Login failed. Please check your credentials")
      }
    } else {
      //Register
      const newUser = { email, password }
      setUsers([...users, newUser])
      localStorage.setItem("users", JSON.stringify([...users, newUser]))
      setIsLoggedin(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedin(false)
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      {isLoggedin ? (
        <div>
          <h2>Welcome {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"}</h2>
          <form onSubmit={handleAuthentication}>
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Type your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account? Register"
              : "Alredy have an account? Login"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Go to Register" : "Go to Login"}
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
