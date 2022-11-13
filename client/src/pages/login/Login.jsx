import "./login.scss"
import {Link}from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {

  const {login} =useContext(AuthContext)

  const handleLogin=()=>{
    login()
  }
  return (
  <div className="login">
    <div className="card">
      <div className="left">
          <h1>Chat Book.</h1>
          <p>Interactive technology that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.</p>

          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
      </div>

      <div className="right">
        <h1>Login</h1>
        <form >
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button onClick={handleLogin}>Login</button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Login