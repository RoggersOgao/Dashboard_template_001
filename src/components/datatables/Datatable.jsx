import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import userRows from '../../data';
import { userColumns } from '../../data';
import { Link } from 'react-router-dom';

function Datatable() { 

 
    const actionColumns = {
        field: 'action',
        headerName: 'Actions',
        width:200,
        renderCell:()=>{
            return(
                <div className="container">
                    <div className="actionsContainer">
                        <Link to='' className="actionsContainer__view"><FaEdit size={14}/></Link>
                        <Link to='' className="actionsContainer__delete"><FaTrashAlt size={14}/></Link>
                    </div>
                </div>
            )
        }

    }

   
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className='datagridDark'
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable