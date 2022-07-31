import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
function List() {

    const rows = [
        {
            id:1,
            product: " Acer Nitro 5",
            img: "./images/avatar.jpg",
            customer: "Hellen Scate",
            date: "3 Jan",
            amount:785,
            method: "Cash on Delivery",
            status: "approved",
        },
        {
            id:2,
            product: " Hp envy",
            img: "./images/avatar.jpg",
            customer: "Joseph Still",
            date: "8 Feb",
            amount:1200,
            method: "Cash on Delivery",
            status: "approved",
        },
        {
            id:3,
            product: "Mac Book Pro",
            img: "./images/avatar.jpg",
            customer: "Rogger Toot",
            date: "3 Jan",
            amount:1350,
            method: "Online payment",
            status: "pending",
        },
        {
            id:4,
            product: "Samsung Fridge",
            img: "./images/avatar.jpg",
            customer: "Hellen Scate",
            date: "3 Jan",
            amount:1500,
            method: "Online Payment",
            status: "approved",
        },
        {
            id:5,
            product: "Electronic Mouse",
            img: "./images/avatar.jpg",
            customer: "Steve G",
            date: "3 Jan",
            amount:30,
            method: "online",
            status: "pending",
        },

    ]
  return (
    <TableContainer component={Paper} className="list">
<Table sx={{minWidth: 650}} aria-label="simple Table">
<TableHead>
    {/*
    *
    * row
    * 
    *  */}
<TableRow>
<TableCell className="tableCell heading">Tracking ID</TableCell>
<TableCell className="tableCell heading">Product</TableCell>
<TableCell className="tableCell heading">Customer</TableCell>
<TableCell className="tableCell heading">Date</TableCell>
<TableCell className="tableCell heading">Amount</TableCell>
<TableCell className="tableCell heading">Payment Method</TableCell>
<TableCell className="tableCell heading">Status</TableCell>
</TableRow>
</TableHead>
{/* *
*
* body
*/}
<TableBody>

    {/* *
    *
    map function
    *
    */}
{rows.map((row)=>(
<TableRow
key={row.id}
className='tableRowC'
>

<TableCell className='tableCell'>{row.id}</TableCell>
<TableCell className='tableCell'>
    <div className="tableCell__product">
        <img src={row.img} alt="" srcSet="" />
        {row.product}
    </div>
</TableCell>
<TableCell className='tableCell'>{row.customer}</TableCell>
<TableCell className='tableCell'>{row.date}</TableCell>
<TableCell className='tableCell'>{row.amount}</TableCell>
<TableCell className='tableCell'>{row.method}</TableCell>
<TableCell className='tableCell'>
    <span className={`status ${row.status}`}>{row.status}</span>
</TableCell>

</TableRow>
))}

</TableBody>
</Table>
</TableContainer>
  )
}

export default List