import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import axios from "../../axios"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
const initialState ={
  
  loading : false,
  amount :  0,
  total : 0,
  cart : JSON.parse(localStorage.getItem("cart")) || [],
  // data:[]
}

  const [state, dispatch] = useReducer(reducer,initialState)
  // const [data , setData] = useState([])
  
  // const [cart, setCart] = useState(cartItems)

  const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
  }

  const removeItem = (id) =>{
    dispatch({type:"REMOVE_ITEM",unique:id})
  }
  const increase = (id) =>{
    dispatch({type:"INCREASE", unique:id})
  }

  const decrease = (id) =>{
    dispatch({type:"DECREASE", unique:id})
  }

  const toggleAmount = (type,id) =>{
    // console.log(type)
    dispatch({type:"TOGGLE", unique:{type,id}})

  }


  const AddCart = (item)  =>{
    // console.log(item)



    dispatch({type:'ADDCART' , unique:item})
  }


  // const fetchData = async() => {
  //   dispatch({type:"LOADING"})
  //   const response = await fetch(url)
  //   const cart = await response.json()
  //   dispatch ({type:"DISPLAY_ITEM" , unique:cart})
  // }

  // useEffect(() => {
  //   fetchData()
   
  // }, [])
  

  useEffect(() => {
    if(state.cart){
      dispatch({type:"TOTAL"})
    }
  
}, [state?.cart])


useEffect(()=>{

 localStorage.setItem('cart' , JSON.stringify(state.cart))


},[state.cart])


 

  return (
    <AppContext.Provider
      value={{
        ...state,clearCart,removeItem,increase,decrease,toggleAmount,AddCart 
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
