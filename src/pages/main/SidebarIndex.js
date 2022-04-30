import React ,{useContext , useEffect , useState} from 'react'

import { Link } from 'react-router-dom';

import axios from "../../axios";

import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import { ProductContext } from '../../context/ProductContext/ProductContext';
import { useGlobalContext } from '../Cart/context';
import "../../output.css"
const SidebarIndex = () => {
  const {categories} = useContext(CategoryContext)
  const {products} = useContext(ProductContext)
  const [id ,setID] = useState(0)
  const [data , setData] = useState([])
  const {AddCart} = useGlobalContext();
  //  console.log(categories)
  //  console.log(products)


   useEffect(()=>{
        const getComic = async() =>{
           try{
             if(id === 0){
               setData(products)
             }
             else{
              const res = await axios.get(`/categories/${id}/products`)
             setData(res.data.data)
             }
             
           }
           catch(err){
             console.log(err)
           }
        }
        getComic();
   },[id , products])
// console.log(data)

   let comic =  id === 0 ? products : data;


  return (
    <>
    <div class="vertical-nav">
                <ul>
                    <h4><left>Category</left></h4>
                    <br/>
                    <li ><span onClick={()=>setID(0)} className={id === 0 && "active"}>All</span></li>
                    {
                      categories?.map((item)=>(
                        <li key={item?.id}><span onClick={()=>setID(item.id)} className={item.id === id && "active"}>{item?.name}</span></li>
                      ))
                    }
                      </ul>
            </div>
              <div class="gallery-main" style={{marginLeft:'25%',padding:'1px 16px',height:'1000px'}}>
              <div class="Adventure">
                  
                  <div class="gallery">

{
            

  comic?.map((item)=>(
     
      <div class="image-holder" key={item.id}>
          <a href="#">
              <img src={item.image} alt={item.name}/>
          </a>
          <div class="desc">
              Name : {item.name}
              <br/>
              Price : {item.price}
              <br/>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <button onClick={()=>AddCart(item)}>Buy</button>
          </div>
      </div>
))
}
</div>
</div>
</div>
</>
              
  )
}

export default SidebarIndex