import "./register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
  <div className="register">
    <div className="card">
      <div className="left">
          <h1>Chat Book.</h1>
          <p>Interactive technology that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.</p>

          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
      </div>

      <div className="right">
        <h1>Register</h1>
        <form >
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="text" placeholder="Name"/>
          
          <button>Register</button>
        
        </form>

      </div>
    </div>
  </div>
  )
}

export default Register