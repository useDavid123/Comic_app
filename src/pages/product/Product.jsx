import "./product.css"
import {DeleteOutline} from "@material-ui/icons";
// import Chart from "../../component/chart/Chart";
// import {productData} from "../../dummyData";
import {Publish} from "@material-ui/icons"
import storage from "../../firebase"
import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import {ProductContext} from "../../context/ProductContext/ProductContext";
import {AuthContext} from "../../context/AuthContext/AuthContext"
import {useHistory, useParams , Link} from "react-router-dom"
import { useState , useContext , useEffect } from "react";
import axios from "../../axios";

export default function Product() {
  const { updateProduct,error} = useContext(ProductContext)
  const { categories } = useContext(CategoryContext)
  const {user} = useContext(AuthContext)
  const {id1} = useParams();
  const history=useHistory();
  // const {title}  = category
  // const catTitle = title;

  
  const [name1 , setName1] = useState("")
  const [desc1 , setDesc1] = useState("")
  const [image1 , setImage1] = useState(null)
  const [price1 , setPrice1] = useState("")
  const [category1 , setCategory1] = useState("")
  const [product , setProduct] = useState({})
  const [category , setCategory] = useState([])
  const [categoryID , setCategoryID] = useState(categories[0].id)

  const {id , name , price , description , image} = product


  useEffect(()=>{
    const singleProduct = async(id)=>{
      try {
          const res = await axios.get(`/products/${id1}`);
          
           if(res.data.length === 0){
             history.push("/")
           }
           // console.log(res.data)
           setProduct(res.data.data)
          
       } catch (err) {
          //  alert(err)
          console.log(err)
         
       }
   }

   singleProduct();
  },[id1 , history])
  
  
  useEffect(()=>{
    const productCategory = async()=>{
      try {
          const res = await axios.get(`/products/${id1}/categories`);
          
           

           setCategory(res.data.data)
          
       } catch (err) {
          //  alert(err)
          console.log(err)
         
       }
   }

   productCategory();
  },[id , history , id1])
  // console.log(product);



  const [progress , setProgress] = useState(0)
 
  

  // console.log(categoryID)
 
   const imageChange = (e) =>{
     if(e.target.files[0])
     {
         setImage1(e.target.files[0])
     }
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
    if(image1)
    {
      const uploadTask =  storage.ref(`images/${image1.name}`).put(image1)
 
      uploadTask.on(
          "state_changed",
          (snapshot)=>{
              // progress function
             const progress = Math.round(
                 (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
             );
             setProgress(progress)
          },
          (error)=>{ 
              // error function
              console.log(error)
              alert(error.message)
          },
          ()=>{
          //    complete fuction
            storage.ref("images").child(image1.name).getDownloadURL().then((image)=>{
              const data = 
              {
                title: name1 ? name1 : name,
                price: price1 ? price1 : price,
                desc: desc1 ? desc1 : description,
                image:image

              }
                updateProduct(id ,data)
                // console.log(image1)
              //  alert("success");
              if(!error){
                history.push("/products")
              }
            })
            
           })
    }
    else{
      const data = 
      {
        name: name1 ? name1 : name,
        price: category1 ? category1 : price,
        desc: desc1 ? desc1 : description,
        image:image

      }
        updateProduct(id ,data);
    }
    
 
   }




   const deleteCategory = async(categoryID) => {
    //  console.log(categoryID)
    try {
      const res = await axios.delete(`/products/${id1}/categories/${categoryID}` ,{
        headers:{
            Authorization: `Bearer ${user.access_token}`
        },  
     }
     );
       
       // console.log(res.data)
       setCategory(category.filter((item) => item.id !== categoryID))
      
   } catch (err) {
      //  alert(err)
      console.log(err)
     
   }
}
// console.log(user.access_token)
const handleCategory = async(e) =>{
e.preventDefault();
  try {
    const res = await axios.put(`/products/${id1}/categories/${categoryID}` ,{
      headers:{
          Authorization: `Bearer ${user.access_token}`
      },  
   }
   );
   
     const res2 = await axios.get(`/categories/${categoryID}`)
     const {data} = res2.data
     // console.log(res.data)
     setCategory([...category,data])
    
 } catch (err) {
    //  alert(err)
    console.log(err)
   
 }

}

   


    return (
        <div className="product">
            <div className="productTitleContainer">
              <h2 className="productTitle">Product</h2>
              <Link to="/newProduct">
               <button className="productAddButton">Create</button>
               </Link>
            </div>
            <div className="productTop">
             
              <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={image}
                     alt="" className="productInfoImg" />
                     <span className="productInfoName">{name}</span>
                     <br/>
                    
                </div>
                 <div className="productInfoBottom">
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Category:</span>
                      <span className="productInfoValue" >
                      {  category?.map((item)=>{ return (<p key={item.id}>{item.name}   <DeleteOutline style={{cursor:"pionter"}} onClick={()=>deleteCategory(item.id)} /></p>) }
                      )
                    }
                      
                      </span>
                    </div>
                   
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Description:</span>
                      {/* <p className="productInfoValue" >mpofjuysvjhshidgvogsdaicywgsachdhvgcyvidagkyfsvygeasivgkovaefrfebagadb</p> */}

                    </div>
                    <p className="productDesc">{description}</p>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Price:  {price}</span>
                      {/* <p className="productInfoValue" >mpofjuysvjhshidgvogsdaicywgsachdhvgcyvidagkyfsvygeasivgkovaefrfebagadb</p> */}

                    </div>
                   
                 </div>
              </div>
            </div>
             <div className="productBottom">
                <form className="productForm" onSubmit={handleSubmit}>
                 <div className="productFormLeft">
                   <label>Product Name</label>
                   <input  value={name1} onChange={(e)=> setName1(e.target.value)} type="text"/>

                   <label>Price Name</label>
                   <input  value={price1} onChange={(e)=> setPrice1(e.target.value)} type="text"/>
                    
                    <label>Description</label>
                   <textarea value={desc1} onChange={(e)=>setDesc1(e.target.value)}  name="Description"  />
                 </div>
                <div className="productFormRight">
                  <div className="productUpload">
                     <img src={image} 
                     alt="" className="productUploadImg"/>
                     <label for="file">
                      <Publish/>
                     </label>
                     <input type="file"   onChange={imageChange} />
                  </div>
                  <progress style={{width:"50%"}} value={progress} max="100" />
                  <button className="productBotton" type="submit" >Update</button>
                </div>
                </form>
              <br/>
              <br/>
                <form className="productForm" onSubmit={handleCategory}>
                <label>Update Category</label>
                    <select  onChange={(e)=>setCategoryID(e.target.value)}>
                      {categories?.map((item )=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                       {/* <option value="yes">yes</option>
                       <option value="no">no</option> */}
                    </select>

                    <button className="productBotton" type="submit" >Update</button>

                </form>
             </div>
        </div>
    )
}
