import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/cards/Card';
import Chart from '../../components/Charts/Chart';
import Progress from '../../components/Charts/Progress';
import Table from '../../components/table/Table';
function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home__container">
          <Navbar />
        <div className="card">
          <Card type='user'/>
          <Card type='order'/>
          <Card type='earnings'/>
          <Card type='balance'/>
        </div>
        <div className="charts">
          <Progress />
          <Chart aspect={2 / 1} title="Spending (Last 7 Months)"/>
        </div>
        <div className="table">
          <div className="table__title">
            Latest Transactions
          </div>
          <Table />
        </div>
        </div>
      </div>
      </div>
  )
}

export default Home