export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username',
        headerName: 'User',
        // sortable: false,
        width: 230,
        renderCell:(params)=>{
          return (
              <>
              <div className="cellwithimg">
                <img src={params.row.img} alt="" srcSet="" className="cellimg"/>
                {params.row.username}
              </div>
              </>
          )
        }
      },
      {
        field:'status',
        headerName:'Status',
        width:170,
        renderCell:(params)=>{
            return(
                <>
                <div className={`status ${params.row.status}`}>{params.row.status}</div>
                </>
            )
        }
      },
      {
        field:'email',
        headerName:"Email",
        width:230,
      },
      {
        field:'age',
        headerName:'age',
        width:120
      }
]



const userRows = [
    { 
        id: 1, 
        username: 'Snow', 
        img: "./images/avatar.jpg",
        status: "active",
        email: "lsnow@gmail.com",
        age: 35 
    },
    { 
        id: 2, 
        username: 'Lannister', 
        img: "./images/avatar.jpg",
        status: "active",
        email:"lcersei@gmail.com", 
        age: 42 
    },
    { 
        id: 3, 
        username: 'Lannister', 
        img:"./images/avatar.jpg",
        status: "active",
        email: "ljaime@gmail.com",
        age: 45 
    },
    { 
        id: 4, 
        username: 'Stark', 
        img: "./images/avatar.jpg",
        status:"passive",
        email:"starka@gmail.com",
        age: 16 
    },
    { 
        id: 5, 
        username: 'Targaryen', 
        img: "./images/avatar.jpg",
        status: "active",
        email: "targaryen@gmail.com",
        age: 20
    },
    { 
        id: 6, 
        username: 'Melisandre', 
        img: "./images/avatar.jpg",
        status:"active",
        email: "melisandre@gmail.com",
        age: 150 
    },
    { 
        id: 7, 
        username: 'Clifford', 
        img: "./images/avatar.jpg",
        status: "passive",
        email: "cliffordf@gmail.com",
        age: 44 
    },
    { 
        id: 8, 
        username: 'Frances', 
        img: "./images/avatar.jpg",
        status: "active",
        email: "francesr@gmail.com",
        age: 36 
    },
    { 
        id: 9, 
        username: 'Roxie',
        img: "./images/avatar.jpg",
        status:"active",
        email:"roxieharvey@gmail.com",
        age: 65 
    },
        
]

export default userRows
