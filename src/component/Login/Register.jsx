import React,{useState , useContext} from "react"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import validator from "validator"
import {useHistory , Link} from "react-router-dom"
import "./login.css"
const Register = () => {
    const history = useHistory();
const [name , setName] = useState("")
const [password , setPassword] = useState("")
const [passwordConfirm , setPasswordConfirm] = useState("")
// const [role , setRole] = useState("user")
const [email , setEmail] = useState("")
const [errors ,setErrors] = useState("")
     const {Register , error , isFetching} = useContext(AuthContext)
 const handleRegister = (e) =>{
     e.preventDefault()
       
       if(!validator.isEmail(email)){
        setErrors("Invalid email")
        return
}
if(!validator.isLength(password , 6 , 15))
{
    setErrors("Password minimum lenght is 6")
    return
}
if(password !==  passwordConfirm){
    setErrors("Password Dosent Match")
    return
}
   
     Register({name , password , email , })
     if(!error){
         history.push("/login")
     }
    //  setUsername("")
    //  setPassword("")
 }

     return (
         <div className="login">
              <div className="login_logo">
                
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGHobdjlI9ydSUOtKyLwNaGj-3rA8GPlHdg&usqp=CAU" alt="Logo" /> 
              </div>
              <form onSubmit={handleRegister}>
               <div className="flex">
                   <label>Username:</label>
               <input type="text" required  className="loginInput" placeholder="username"value={name} onChange={(e)=>setName(e.target.value)} />
               </div>
               <div className="flex">
                   <label>Email:</label>
               <input type="text" required className="loginInput"  placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)} />
               </div>
              
             
             {/* <div className="flex">
                 <label>Role:</label>
                 <select onChange={(e)=>setRole(e.target.value)}  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    </select>
             </div> */}

                  <div className="flex">
                      <label>Password:</label>
                      <input type="password" required className="loginInput"  placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} / >
                  </div>

               <div className="flex">
                   <label>Confirm Password</label>
                   <input type="password" required className="loginInput" placeholder="confirm password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} / >
               </div>
             
              
              
              <button className="button" type="submit"  >Sign Up</button>
              {
                  error && (
                      <span> Error Registering please try again </span>
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
                  <span style={{color:"red"}} >{errors}</span>
              </div>
              <span style={{fontSize:"10"}}>Already Signed up <Link to="/login">Login</Link> </span>
              </form>
         </div>
        
     )
 }
 
 export default Register