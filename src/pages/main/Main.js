import React,{useContext , useEffect , useState} from 'react'
import "../../output.css"
import { Link } from 'react-router-dom';
import axios from  "../../axios";
import { useGlobalContext } from '../Cart/context';
import { ProductContext } from '../../context/ProductContext/ProductContext';
const Main = ({id}) => {
const {AddCart , data} = useGlobalContext()
// const {products} = useContext(ProductContext)
  



 
  return (
    <div class="gallery-main" style={{marginLeft:'25%',padding:'1px 16px',height:'1000px'}}>
                <div class="Adventure">
                    <h2>ALL</h2>
                    <div class="gallery">

{
    data?.map((item)=>(
       
        <div class="image-holder">
            <a href="#">
                <img src={item.image} alt={item.name}/>
            </a>
            <div class="desc">
                Name:{item.name}
                Price : {item.price}
                <br/>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <button onClick={AddCart(item)}>Buy</button>
            </div>
        </div>
  ))
}
</div>
</div>
</div>
                  

                    
                    
  )
}

export default Main