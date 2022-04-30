import { createContext,  useReducer , useEffect , useState , useContext } from "react";
import ProductReducer from "./ProductReducer";
import axios from "../../axios"
import {useHistory} from "react-router-dom";
import {AuthContext} from "../AuthContext/AuthContext"
 

const INTITIAL_START = {
  products: [],
    isFetching: false,
    error: false
}


export const ProductContext = createContext(INTITIAL_START);

export const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, INTITIAL_START);
    const history = useHistory();
    
    const {user} =  useContext(AuthContext)
    

  
 const createProduct = async (data) => {
  
         dispatch({type:"createProductStart"})
         try{
             const res = await axios.post("/products" , data 
             , {
                headers:{
                    Authorization: `Bearer ${user.access_token}`
                },
             }
             );
            //  const {data} = res.data
             dispatch({type:"CreateProductSuccess", payload:res.data.data})
           
             console.log("success")
             }
             catch(error){
                 console.log(error)
               dispatch({type:"CreateProductFailure"})
             }
             
         }

         const updateProduct = async(id , data)=>{
             console.log(data);
             try{
                const res = await axios.put(`/products/${id}` , data , {
                   headers:{
                    Authorization: `Bearer ${user.access_token}`
                   },
                });
                dispatch({type:"updateProductSuccess", payload:{id ,data}})
                alert("success")

                }
                catch(error){
                    console.log(error)
                //   dispatch({type:"CreateProductFailure"})
                }
                
         }

     const deleteProduct = async(id) => {
        
         try{
             
             const res = await axios.delete(`/products/${id}` 
             ,  {
                headers:{
                    Authorization: `Bearer ${user.access_token}`
                },  
             }
             )
             dispatch({type:"deleteSuccess" , payload:id})
         }
         catch(error) {
             dispatch({type:"deleteFailure"})
         }
     }    
         
 
  



    useEffect(() => {
        const getProducts = async () => {
            dispatch({type:"ProductStart"});
            try {
               const res = await axios.get("/products");
                const {data} = res.data
                dispatch({type:"ProductSuccess", payload:data});
            } catch (err) {
                console.log(err)
                dispatch({type:"ProductFailure" });
            }
        }
        getProducts()
    }, [])

    // console.log(state.products)
   



    return <ProductContext.Provider 
    value={{
        products: state.products, 
        isFetching: state.isFetching,
         error: state.error, 
          dispatch , createProduct ,  updateProduct  , deleteProduct
        }}
    > 
        {children}
    </ProductContext.Provider>
}