import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatables/Datatable';

function List() {
  return (
    <div className="container">
      <div className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home__container">
          <Navbar />

          <div className="datatable">
            <Datatable />
          </div>
    </div>
    </div>
    </div>
  )
}

export default List