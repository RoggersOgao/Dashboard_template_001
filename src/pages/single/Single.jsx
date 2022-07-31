
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import SingleItem from '../../components/single/SingleItem';
import Chart from '../../components/Charts/Chart';
import Datatable from '../../components/datatables/Datatable';
const Single = () => {
  return (
    <div className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home__container">
          <Navbar />
          <div className="singlePage">
           <div className="singlePage__top">

            <div className="left">
            <SingleItem />
            </div>
          <div className="right">
          <Chart aspect={2 / 1} title="User Spending (Last 7 Months)"/>
          </div>
           </div>
           <div className="singlePage__bottom">
            <Datatable />
           </div>
          </div>
          </div>
          </div>
  )
}

export default Single