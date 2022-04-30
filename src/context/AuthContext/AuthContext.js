
import { createContext, useEffect, useReducer , useState} from "react";
import AuthReducer from "./AuthReducer";
import axios from "../../axios"
import {useHistory} from "react-router-dom"


const INTITIAL_START = {
    user:  JSON.parse(localStorage.getItem("users")) || null,
    isFetching: false,
    error: false

}

export const AuthContext = createContext(INTITIAL_START);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTITIAL_START);
    const [admin , setAdmin] = useState(false)
    const history = useHistory()

  const Register = async (user) => {
      dispatch({type:"REGISTER_START"})
     
      try{
          const res = await axios.post("/auth/register" , user)
          console.log(res.data)
          dispatch({type:"REGISTER_SUCCESS"})
         
        
      }
      catch(error){
          console.log(error)
          dispatch({type:"REGISTER_FAIL"})
      }
  }

  const Login =  async (user) => {
    //   const {username , password} = user
      dispatch({type:"LOGIN_START" })
      try{
        
         const res = await axios.post("/auth/login" ,user  )
        
         localStorage.setItem("users", JSON.stringify(res.data));
      
         dispatch({type:"LOGIN_SUCCESS" , payload:res.data})
         
        
      }
      catch(error){
           dispatch({type:"LOGIN_FAILURE" , payload:error})
      }
  }
  
  

 const LogOut = () => {
    // console.log("something")
    dispatch({type:"LOG_OUT"})
    localStorage.removeItem('users')
}

//   export const logOut = () => async dispatch => {
//     await auth.signOut()
//     dispatch({
//        type: LOG_OUT,
//     })
 
//     sessionStorage.removeItem('ytc-access-token')
//     sessionStorage.removeItem('ytc-user')
//  }

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(state.user));
    // }, [state.user]);

    return <AuthContext.Provider 
    value={{
        user: state.user, 
   
        isFetching: state.isFetching,
         error: state.error, Login , LogOut, Register, admin , setAdmin ,
          dispatch
        }}
    > 
        {children}
    </AuthContext.Provider>
}