import React from "react"
import { useAuth } from "./24AuthContext"

const UseContextAuthentication = () => {
  const { user, login, logout } = useAuth()

  return (
    <div>
      <h2>User Authentication</h2>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login({ username: "user123" })}>Login</button>
        )}
      </div>
    </div>
  )
}

export default UseContextAuthentication
