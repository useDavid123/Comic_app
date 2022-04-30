import "./newProduct.css"
import {useState , useContext} from "react"
import storage from "../../firebase"
import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import {useHistory} from "react-router-dom"
export default function NewCategory() {


   const {createCategory} = useContext(CategoryContext)
   const history = useHistory()


   const [name , setName] = useState("")
  
  //  const [progress , setProgress] = useState(0)

  //  const handleOnchange = (e) =>{
  //   if(e.target.files[0])
  //   {  
  //       setImage(e.target.files[0])
  //   }
  // }


   const handleSubmit = (e) => {
     e.preventDefault()
    //  const uploadTask =  storage.ref(`images/${image.name}`).put(image)

    //  uploadTask.on(
    //      "state_changed",
    //      (snapshot)=>{
    //          // progress function
    //         const progress = Math.round(
    //             (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
    //         );
    //         setProgress(progress)
    //      },
    //      (error)=>{ 
    //          // error function
    //          console.log(error)
    //          alert(error.message)
    //      },
    //      ()=>{
    //      //    complete fuction
    //        storage.ref("images").child(image.name).getDownloadURL().then((image)=>{
               createCategory({name })
               
               history.push("/")
          //  })
           setName("")
          //  setImage(null)
          //  setProgress(0)
          // })
   }

    return (
        <div className="newProduct">
           <h1 className="newProductTitle">New Product</h1>
           <form className="newProductForm" onSubmit={handleSubmit} >
             {/* <div className="newProductItem">
             <progress className="newProduct_progress" value={progress} max="100" />
               <label className="newProductImg">Image</label>
               <input type="file" onChange={handleOnchange} required/>
             </div> */}
             <div className="newProductItem">
                <label>  Name</label>
               <input type="text" placeholder="Comics"
               onChange={(e)=>setName(e.target.value)}
               value={name} required/>
             </div>
             {/* <div className="newProductItem">
               <label>Stock</label>
               <input type="text" placeholder="123"/>
             </div>
              <div className="newProductItem">
             <label>Active</label>
                    <select name="active" id="active">
                       <option value="yes">yes</option>
                       <option value="no">no</option>
                    </select>
              </div> */}
             <button type="submit" className="newProductButton">Create</button>
           </form>
        </div>
    )
}
