import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avater} alt="" />
                    {params.row.userName}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 190,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 190,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 190,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                 
                )
            }
          },
      ];
      
    return (
        <div className="userList">
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
