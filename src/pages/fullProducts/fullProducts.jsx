import "./fullProduct.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";

import { Link  } from "react-router-dom";
import { useState , useContext } from "react";
import {ProductContext} from "../../context/ProductContext/ProductContext"
// import {useEffect} from  "react";
export default function FullProducts() {

     const {products , deleteProduct} = useContext(ProductContext)

     
    const Delete = (id) =>{
       
        if (window.confirm('Are you sure you want to delete product') === true) {
             deleteProduct(id)
          } else {
           return
          }
    } 
   
   
    console.log(products)

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: "Products", headerName: "Products", width: 400, renderCell: (params) => {
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
        rows={products}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
