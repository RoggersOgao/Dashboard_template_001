import React,{useContext} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import {FaUsers, FaProductHunt, FaFirstOrder, FaChartBar, FaBell,FaHandHoldingMedical,FaNewspaper,FaHouseUser,FaAssistiveListeningSystems,FaSignOutAlt,FaTools,FaCloudMoon, FaMoon, FaSun, FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DarkModeContext from '../context/AppContext'

const Sidebar = () => {
const {state,dispatch} =useContext(DarkModeContext)
  return (
    <div className="container">
      <div className="sidebar">
{/* top */}
        <div className="sidebar__top">
          <div className="sidebar__top--logo">
          <FaHome /> Intellisirn
          </div>
         
        </div>

        {/* center */}
        <div className="sidebar__center">
{/* 
*
Beginning of the unordered list
*
*/}
          <ul>


{/* 
 Main Section
*/}
            <p className="title">MAIN</p>
            <li>
            <Link to='/' className="sidebarLinks"> 
            <DashboardIcon className="icon"/>Dashboard
            </Link>
            </li>

            <li>
            <Link to='/users' className="sidebarLinks">  
              <FaUsers className="icon"/>Users
              </Link>
            </li>

            <li>
            <Link to='/products' className="sidebarLinks"> 
            <FaProductHunt className="icon"/>Products
            </Link>
            </li>

            <li> 
            <Link to='' className="sidebarLinks"> 
            <FaFirstOrder className="icon"/>Orders
            </Link>
            </li>

            <li>
            <Link to='' className="sidebarLinks"> 
            <FaAssistiveListeningSystems className="icon"/>Delivery
            </Link>
            </li>


{/* 
*
Statistics section
*
*/}
            <p className="title">STATISTICS</p>
            <li>
            <Link to='/products' className="sidebarLinks"> 
            <FaChartBar className="icon"/>Stats
            </Link>
            </li>

            <li>
            <Link to='' className="sidebarLinks"> 
            <FaBell className="icon"/>Notifications
            </Link>
            </li>

{/* 
*
System Section
*
*/}
            <p className="title">SYSTEM</p>
            <li>
            <Link to='' className="sidebarLinks"> 
            <FaHandHoldingMedical className="icon"/>System Health
            </Link>
            </li>

            <li>
            <Link to='' className="sidebarLinks"> 
            <FaNewspaper className="icon"/>Logs
            </Link>
            </li>

            <li>
            <Link to='' className="sidebarLinks"> 
            <FaTools className="icon"/>Settings
            </Link>
            </li>
{/* 
*
this is the user section
*
*/}
            <p className="title">USER</p>
            <li>
            <Link to='' className="sidebarLinks"> 
            <FaHouseUser className="icon"/>profile
            </Link>
            </li>

            <li>
            <Link to='' className="sidebarLinks"> 
            <FaSignOutAlt className="icon"/>Logout
            </Link>
            </li>

          </ul>

{/* 
*
End of the UL section
*
*/}
        </div>
        {/* bottom */}
        <div className="sidebar__bottom">
          <div className="sidebar__bottom--color-options">
          <FaCloudMoon className='icon'/> <span>color-options</span> 
          </div>
          <div className="options">
            <button onClick={()=>dispatch({type:'LIGHT'})} className="options--1"><FaSun /></button>
            <button onClick={()=>dispatch({type:'DARK'})} className="options--2"><FaMoon /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar