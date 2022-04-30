

const reducer = (state,action) =>{
    if(action.type === "CLEAR_CART"){
        return {...state,cart:[]}
    }
    if(action.type === "REMOVE_ITEM"){
     
     return {...state,cart:state.cart.filter((item)=>item.id !== action.unique)}
      }

      if(action.type === "ADDCART"){
   
         
           
          let cartItem = {
              id:action.unique.id,
              name:action.unique.name,
              price:action.unique.price,
              image:action.unique.image,
              amount:1
          }
        return {...state,cart:[...state.cart.filter(item=>item.id !== action.unique.id),cartItem]}
      }
      if(action.type === "SETDATA"){
          return {...state , data:action.unique}
      }

      if(action.type === "INCREASE"){
          let cartItem = state.cart.map((item)=>{
           
              
              if(item.id === action.unique){
               
             return  {...item,amount:item.amount + 1}
              }
              return item
          })
           return {...state,cart:cartItem}
      }  
    if(action.type === "DECREASE"){
        let cartItem =  state.cart.map((item)=>{
            if(item.id === action.unique){
               
                return {...item,amount:item.amount - 1}
            
            }
            return item
        }).filter((item)=>item.amount !== 0)
        return {...state,cart:cartItem}
    }

    if(action.type === "TOGGLE"){
        console.log(action.unique.id)
        let cartItem = state.cart.map((item) =>{
       if(item.id === action.unique.id){
           
           if(action.unique.type === "inc"){
            return  {...item,amount:item.amount + 1}
           }
           if(action.unique.type === "des"){
            return  {...item,amount:item.amount - 1}
           }
       }
         return item
        }).filter((item)=>item.amount !== 0)
        return {...state,cart:cartItem}

    }

    

    if(action.type === "TOTAL"){
        let {total , amount} = state.cart?.reduce((cartTotal,cartItem)=>{
        const {price,amount} = cartItem
       const itemTotal = price * amount;
       cartTotal.total += itemTotal;
        cartTotal.amount += amount
        return cartTotal
        },{
        total:0 ,
        amount :0
        }

        )
        total = parseFloat(total.toFixed(2))
        return {...state,amount,total}
    }

    if(action.type === "LOADING"){
        return {...state,loading:true}
    }
    if(action.type === "DISPLAY_ITEM"){
        return {...state, cart:action.unique , loading:false}
    }

    return state

   
}

export default reducer;