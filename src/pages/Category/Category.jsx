import "./product.css"
import {Link} from "react-router-dom";
import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import {useHistory, useParams} from "react-router-dom"
import { useState , useContext , useEffect } from "react";
import storage from "../../firebase"
import {Publish} from "@material-ui/icons"
import axios from "../../axios"

export default function Category() {
  const {updateCategory} = useContext(CategoryContext)
  const {id1} = useParams()
  const [name1 , setName1] = useState("")
  const [category , setCategory] = useState({})
  
  
  const history = useHistory();


  useEffect(() => {
    const getCategory = async () => {
       
        try {
           const res = await axios.get(`/categories/${id1}`);
            // console.log(res.data)
            const {data} = res.data
            setCategory(data)
          
        } catch (err) {
            console.log(err)
           
        }
    }
    getCategory()
}, [id1])



   
  

   const {id , name } = category;

   

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    const data ={
      name:name1? name1 : name,
    }
       updateCategory(id ,data);
        history.push('/categories')
       alert("Update Successful")
       
   
   
  }


    return (
        <div className="product">
            <div className="productTitleContainer">
              <h2 className="productTitle">Category</h2>
              <Link to="/newProduct">
               <button className="productAddButton">Create</button>
               </Link>
            </div>
            <div className="productTop">
              {/* <div className="productTopLeft">
               <Chart data={productData} dataKey="Sales" title="Sales Proformance"/>
              </div> */}
              <div className="productTopRight">
                <div className="productInfoTop">
                   
                     <span className="productInfoName">{name}</span>
                </div>
                 <div className="productInfoBotton">
                    
                    {/* <div className="productInfoItems">
                      <span className="productInfoKey" >Sales:</span>
                      <span className="productInfoValue" >5123</span>
                    </div> */}
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Active:</span>
                      <span className="productInfoValue" >yes</span>
                    </div>
                    {/* <div className="productInfoItems">
                      <span className="productInfoKey" >In Stock:</span>
                      <span className="productInfoValue" >no</span>
                    </div> */}
                 </div>
              </div>
            </div>
             <div className="productBottom">
                <form className="productForm" onSubmit={handleSubmit}>
                 <div className="productFormLeft">
                   <label>Product Name</label>
                   <input  value={name1} onChange={(e)=> setName1(e.target.value)} type="text"/>
                   
                    {/* <label>Active</label>
                    <select name="active" id="active">
                       <option value="yes">yes</option>
                       <option value="no">no</option>
                    </select> */}
                 </div>
               
                  <button className="productButton">Update</button>
                
                </form>
             </div>
        </div>
    )
}
