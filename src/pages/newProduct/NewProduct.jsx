import "./newProduct.css"
import {useState , useContext} from "react"
import storage from "../../firebase"
// import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import {ProductContext} from "../../context/ProductContext/ProductContext";
import {useHistory} from "react-router-dom"


export default function NewProduct() {
 
  
  const history = useHistory()
  const {createProduct} = useContext(ProductContext)
  
  // useEffect(()=>{
  //   categories.map((item , index) =>{
  //     let first
  //     if(index === 0){
  //       first = item._id
  //       setCategoryID(first)
  //     }
  //    });
  
  // },[categories])
 
  const [name , setName] = useState("")
  const [image , setImage] = useState(null)
  const [description , setDescription] = useState("")
  const [price , setPrice] = useState("");
  
  const [progress , setProgress] = useState(0)
 
  

//  console.log(categoryID)

  const imageChange = (e) =>{
    if(e.target.files[0])
    {
        setImage(e.target.files[0])
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadTask =  storage.ref(`images/${image.name}`).put(image)

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
          storage.ref("images").child(image.name).getDownloadURL().then((image)=>{
              createProduct({name , image , description , price})
              // console.log(image)
              history.push("/products")
          })
          
         })

  }


    return (
        <div className="newProduct">
           <h1 className="newProductTitle">New Product</h1>
           <form className="newProductForm" onSubmit={handleSubmit}>
             <div className="newProductItem">
             <progress style={{width:"100%"}} value={progress} max="100" />
               <label className="newProductImg">Image</label>
               <input type="file" id="file" onChange={imageChange}/>
             </div>
             <div className="newProductItem">
               <label>  Name</label>
               <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Apple Airpods"/>
             </div>
             <div className="newProductItem">
               <label>Price</label>
               <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="200"/>
             </div>
             
             <div className="newProductItem">
               <label>Description</label>
               <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="description here"/>
             </div>
              {/* <div className="newProductItem"> */}
             {/* <label>Category</label>
                    <select  onChange={(e)=>setCategoryID(e.target.value)}>
                      {categories.map((item )=>(<option key={item._id} value={item._id}>{item.title}</option>))} */}
                       {/* <option value="yes">yes</option>
                       <option value="no">no</option> */}
                    {/* </select> */}
              {/* </div> */}
             <button className="newProductButton">Create</button>
           </form>
        </div>
    )
}
