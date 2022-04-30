import { createContext,  useReducer  , useEffect , useState , useContext} from "react";
import CategoryReducer from "./CategoryReducer";
// import axios from "axios"
import {useHistory} from "react-router-dom";
import {AuthContext} from "../AuthContext/AuthContext"
import axios from "../../axios";


const INTITIAL_START = {
  categories: [],
    isFetching: false,
    error: false
}

export const CategoryContext = createContext(INTITIAL_START);

export const CategoryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CategoryReducer, INTITIAL_START);
    // const fetchData = async() =>{
    //     const request = await axios.get(fetchUrl)
    //     setMovies(request.data.results)
        
    // }
    const {user} =  useContext(AuthContext)
   
   
    
  
 const createCategory = async (data) => {
         dispatch({type:"createCategoryStart"})
         try{
             const res = await axios.post("/categories" , data ,{
                headers:{
                    Authorization: `Bearer ${user.access_token}`
                },
              } );
            
             dispatch({type:"createCategorySuccess", payload:res.data.data})
             console.log("success")
             }
             catch(error){
                 console.log(error)
            //    dispatch({type:"createCategoryFailure"})
             }
             
         }

     const deleteCategory = async(id) => {
         try{
             const res = await axios.delete(`/categories/${id}`, {
                headers:{
                    Authorization: `Bearer ${user.access_token}`
                },  
             })
            //  console.log(res)
             dispatch({type:"deleteSuccess" , payload:id})
         }
         catch(error) {
             dispatch({type:"deleteFailure"})
         }
     }    
         
     
     const updateCategory = async(id , name)=>{
        // console.log(data);
        try{
           const res = await axios.put(`/categories/${id}` , name , {
              headers:{
                Authorization: `Bearer ${user.access_token}`
              },
           });
           dispatch({type:"updateCategory" , payload:{id,name}})
        //    dispatch({type:"CreateProductSuccess", payload:res.data})
        //    history.push("/categories")
        //    alert("success")

           }
           catch(error){
               console.log(error)
           //   dispatch({type:"CreateProductFailure"})
           }
           
    }



    useEffect(() => {
        const getCategories = async () => {
            dispatch({type:"CategoryStart"});
            try {
               const res = await axios.get("/categories");
                // console.log(res.data)
                const {data} = res.data
                // console.log(data)
                dispatch({type:"CategorySuccess", payload:data});
            } catch (err) {
                console.log(err)
                dispatch({type:"CategoryFailure" });
            }
        }
        getCategories()
    }, [])


   
    // console.log(state.categories)
    return <CategoryContext.Provider 
    value={{
        categories: state.categories, 
        isFetching: state.isFetching,
         error: state.error, 
          dispatch ,  createCategory , deleteCategory 
          , updateCategory
        }}
    > 
        {children}
    </CategoryContext.Provider>
}