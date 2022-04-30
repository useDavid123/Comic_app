import React,{useState , useContext , useEffect} from "react"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import {useHistory , Link} from "react-router-dom"
import "./login.css"
import { SentimentSatisfiedAltRounded } from "@material-ui/icons"
const Login = () => {
    const history = useHistory()
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
     const {Login , error , isFetching , user } = useContext(AuthContext)
 const handleLogin = (e) =>{
     e.preventDefault()
     Login({email , password})
    //  if(!error && !isFetching ){
    //      history.push("/")
    //  }
    
     setEmail("")
     setPassword("")
 }
 useEffect(()=>{

      if(user){
         history.push("/")
      }

 },[isFetching , error , history , user])

     return (
         <div className="login">
              <div className="login_logo">
                
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGHobdjlI9ydSUOtKyLwNaGj-3rA8GPlHdg&usqp=CAU" alt="Logo" /> 
              </div>
              <form>
              <div className="flex">
                   <label>Email:</label>
               <input type="text" required className="loginInput" placeholder="username"value={email} onChange={(e)=>setEmail(e.target.value)} />
               </div>
               <div className="flex">
                      <label>Password:</label>
                      <input type="password" required className="loginInput"  placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} / >
                  </div>
              
              
              <button className="button" type="submit" onClick={handleLogin} >Sign In</button>
              {
                  error && (
                      <div>
                      <span style={{color:"red"}}> Invalid Credential</span>
                      </div>
                  )
              }

{
                  isFetching && (
                      <div>
                      <span style={{color:"blue"}}>Loading.....</span>
                      </div>
                  )
              }

              <div>
              <span style={{fontSize:"10"}}>Dont have an account? <Link to="/register">Register</Link> </span>
              </div>
              </form>
         </div>
        
     )
 }
 
 export default Login