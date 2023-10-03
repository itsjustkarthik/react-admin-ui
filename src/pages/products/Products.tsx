import { useState } from 'react'
import './products.scss'
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add'
import { GridColDef } from '@mui/x-data-grid'
import { productRows } from '../../data'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { 
        field: 'img', headerName: 'IMAGE', width: 100,
        renderCell: (params) => {
          return <img src={params.row.img} alt="" />
        }
      },
      {
        field: 'title',
        type: 'string',
        headerName: 'Title',
        width: 250
      },
      {
        field: 'color',
        type: 'string',
        headerName: 'Color',
        width: 150
      },
      {
        field: 'price',
        type: 'string',
        headerName: 'Price',
        width: 150
      },
      {
        field: 'producer',
        type: 'string',
        headerName: 'Producer',
        width: 200
      },
      {
        field: 'createdAt',
        type: 'string',
        headerName: 'Created At',
        width: 200
      },
      {
        field: 'inStock',
        type: 'boolean',
        headerName: 'In Stock',
        width: 150
      },
]
const Products = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add new Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={productRows}/>
            {open && <Add slug="products" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Products