import "./login.scss"
import {Link,  useNavigate}from "react-router-dom"
import { useContext , useState} from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {

  const [inputs,setInputs]=useState({
    username:"",
    password:"",
    
  })
  const [err,setErr]=useState(null)

  const navigate=useNavigate()
  
  const handleChange=(e)=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  

  const {login} =useContext(AuthContext)

  const handleLogin= async(e)=>{
   e.preventDefault()
    try{
      await login(inputs);
      navigate("/") 
      console.log('Navigating to /');

   }
   catch(err){
     setErr(err.response.data)
   }
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
          <input type="text" placeholder="Username" required name="username" onChange={handleChange}/>
          <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>
          <div className="error">

          {err && err}
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Login