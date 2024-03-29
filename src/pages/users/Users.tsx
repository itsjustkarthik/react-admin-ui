import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import { userRows } from '../../data';
import Add from '../../components/add/Add';
import { useState } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { 
      field: 'img', headerName: 'AVATAR', width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: 'firstName',
      type: 'string',
      headerName: 'First Name',
      width: 150
    },
    {
      field: 'lastName',
      type: 'string',
      headerName: 'Last Name',
      width: 150
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'phone',
      type: 'string',
      headerName: 'Phone',
      width: 200
    }, 
    {
      field: 'createdAt',
      type: 'string',
      headerName: 'Created At',
      width: 200
    },
    {
      field: 'verified',
      type: 'boolean',
      headerName: 'verified',
      width: 150
    },
  ];

const Users = () => {

  const [open, setOpen] = useState(false)
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add new User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Users