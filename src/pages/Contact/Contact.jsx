
import { useState , useEffect , useContext } from "react";
import axios from "../../axios";
import Swal from "sweetalert2"
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Contact = () => {
    const {user} =  useContext(AuthContext)
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contact , setContact] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        // createContact({phone , email , address});
    }

    // const createContact = async(cont) =>{
    //     try{
    //         const res =  await axios.put(`/contact/${something?._id}` , cont , {
    //            headers:{
    //               token: `Bearer ${user.accessToken}`
    //             },
    //          });
            
            
           
    //          const rest =  await axios.get(`/contact/${something?._id}`)
             
         
    //          setContact(
    //             contact.map((item) => {
    //               if (item._id === something._id) {
    //                 return    item = rest.data.data;
    //               }
    //               return item;
    //             })
    //           );
    //           Swal.fire("Success","Update Successful","success");
    //           setPhone("")
    //           setAddress("")
    //           setEmail("")
            
               
    //          }
             
    //         catch(error){
    //             console.log(error)
    //             Swal.fire({icon:"error" ,
    //             title: 'Oops...',
    //             text:"Something went Wrong. Refresh and try again"
    //         })
    //         }
    // }

    useEffect(()=>{

         
         
        const getContact = async () => {
         
              try {
                 const res = await axios.get("/contact");
                 
                  const {data} = res.data
                  
                  setContact(data)
         
         
              } catch (err) {
                 console.log(err)
              
             }
           }
           getContact();
           
          },[])

    const something = contact[0]
  return (

    <div className="event">
    <div className="main">
    <h2 className="text-center">Contact</h2>
<ul className="list-group list-group-flush  e-list">
<li className="list-group-item ">

<div className ="row">
  <div className="col-md-8">
      <div className="column">
      <h3>Phone :</h3>
     
  <p>{something?.phone}</p>
  

  </div>
      </div>
     
         
   
  </div>
</li>
<li class="list-group-item">

<div className ="row">
  <div className="col-md-8">
      <div className="column">
      <h3>Address :</h3>
     
      <p>{something?.address}</p>
 

  </div>
      </div>
     
         
   
  </div>
</li>
<li class="list-group-item">

<div className ="row">
  <div className="col-md-8">
      <div className="column">
      <h3>Email :</h3>
  
      <p>{something?.email}</p>
 

  </div>
      </div>
     
         
   
  </div>
</li>

</ul>
 <form onSubmit={handleSubmit}>
   <div className="contact_form">
     <input type="text" className="aboutInput mb-3" placeholder='phone' onChange={(e)=>setPhone(e.target.value)} required/>
     <input type="text" className="aboutInput mb-3" placeholder='address' onChange={(e)=>setAddress(e.target.value)} required/>
     <input type="text" className="aboutInput mb-3" placeholder="email" onChange={(e)=>setEmail(e.target.value)} required/>
     <button className="contact_button">Update</button>
     {/* <Link to="/" className="link">Home</Link> */}
     </div>
 </form>

 </div>
</div>

  )
}

export default Contact