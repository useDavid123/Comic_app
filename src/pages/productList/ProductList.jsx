import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";

import { Link , useParams , useHistory } from "react-router-dom";
import { useState , useContext } from "react";
import {ProductContext} from "../../context/ProductContext/ProductContext"
import {useEffect} from  "react";
import axios from "../../axios";
export default function ProductList() {

     const { deleteProduct} = useContext(ProductContext)
     const [data, setData] = useState([]);
     const {id,name} = useParams();
     const history = useHistory();
    // const handleDelete = (id) =>{
    //     setData(data.filter((item) => item.id !== id));
    // }
    useEffect(()=>{

        const getProduct = async()=>{
            try {
                const res = await axios.get(`/categories/${id}/products`);
                const {data} = res.data
                 if(data.length=== 0){
                   history.push("/")
                 }
                //  console.log(data)
                 
                 setData(data)
                
             } catch (err) {
                 console.log(err)
               
             }
            }
                

        getProduct()
    },[id , history])


    // useEffect(()=>{
    //     const newData = categoryProduct.map((item , index)=>{
      

    //         const {title,image ,_id} = item;
    //         return  {
    //           id:index+1, 
    //           title:title,
    //           image:image,
    //           ID:_id
             
             
    //         }
           
            
    //       })
    
    //      setData(newData)
    // },[categoryProduct])
//    console.log(data)

const Delete = (id) =>{
       
    if (window.confirm('Are you sure you want to delete product') === true) {
         deleteProduct(id)
      } else {
       return
      }
} 

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: name, headerName: name, width: 400, renderCell: (params) => {
            return(
                <div className="productListUser">
                    <img className="productListImg" src={params.row.image} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        // { field: 'product', headerName: 'Product', width: 200 },
        // {
        //   field: 'category',
        //   headerName: 'Category',
        //   width: 190,
        // },
         {
          field: 'price',
          headerName: 'Price',
          width: 190,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline style={{cursor:"pionter"}} onClick={()=>Delete(params.row.id)} />
                    </>
                 
                )
            }
          },
      ];
    return (
        
        <div className="productList">
           <div className="productTitleContainer" >
 <Link to="/newProduct">
               <button className="productAddButton">Create</button>
               </Link>
        </div>
          <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
