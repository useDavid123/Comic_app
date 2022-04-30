import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {categoryRows} from "../../dummyData";
import { Link  , useHistory} from "react-router-dom";
import { useState , useContext  ,  useEffect } from "react";
import {CategoryContext} from "../../context/CategoryContext/CategoryContext";
import {AuthContext} from "../../context/AuthContext/AuthContext"
import axios from "../../axios"

export default function CategoryList() {
   
    const {categories , deleteCategory } = useContext(CategoryContext);
    const {user} = useContext(AuthContext)
    const history = useHistory()


    useEffect(()=>{
        const Verify  = async()=>{
            
            try{
               const res = await axios.get(`auth/admin` ,  {
                  headers:{
                   Authorization: `Bearer ${user.access_token}`
                  },
               });
               
              
      
               }
               catch(error){
                   console.log(error)
                   history.push('/')
               //   dispatch({type:"CreateProductFailure"})
               }
            }
      

            Verify();

    },[user , history])

    const Delete = (id) =>{
       
        if (window.confirm('Are you sure you want to delete product') === true) {
             deleteCategory(id)
          } else {
           return
          }
    } 
 

//  console.log(categories)


  
    // useEffect(()=>{
    //     const newData = categories.map((item , index)=>{
      

    //         const {_id,title,image} = item;
    //         return  {
    //           id:index+1, 
    //           title:title,
    //           image:image,
    //           props:_id
             
             
    //         }
           
            
    //       })
    
    //      setData(newData)
    // },[categories])

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
         { field: 'product', headerName: 'Categories', width: 200, renderCell: (params) => {
            return(
                <div className="productListUser">
                    {/* <img className="productListImg" src={params.row.image} alt="" /> */}
                    {params.row.name}
                </div>
            )
        } },
        // { field: 'product', headerName: 'Product', width: 200 },
       
        // {
        //   field: 'price',
        //   headerName: 'Price',
        //   width: 190,
        // },
        // {
        //     field: 'stock',
        //     headerName: 'Stock',
        //     width: 190,
        //   },
        {
            field: 'action',
            headerName: 'Action',
            width: 190,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/category/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>Delete(params.row.id)}/>
                    </>
                 
                )
            }
          },
          {
            field: 'Products',
            headerName: 'Products',
            width: 190,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/C/" + params.row.id + "/" + params.row.name}>
                        <button className="productListEdit">Comics</button>
                    </Link>
                    
                    </>
                 
                )
            }
          },
      ];
    return (
        <div className="productList">
             <div className="productTitleContainer" >
 <Link to="/newCategory">
               <button className="productAddButton">Create</button>
               </Link>
        </div>
          <DataGrid
        rows={categories}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
