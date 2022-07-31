import React from 'react'
import {FaSearch, FaLanguage, FaMoon, FaBell,FaListAlt} from 'react-icons/fa'
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import {useContext} from 'react'
import DarkModeContext from '../context/AppContext'
const Navbar = () => {

  const {state, dispatch} = useContext(DarkModeContext)
  return (
    <div className="container">
      <div className="navbar">
{/*
navbar search
*/}
        <div className="navbar__search">
          <input type="text" name="" id="" placeholder='Search' />
          <FaSearch className='icon'/>
        </div>

{/* 
*
navbar items
*
*/}
        <div className="navbar__items">
          <div className="navbar__items--item">
          <FaLanguage size={25}className='icon'/>&nbsp;
          English
          </div>
          <div onClick={()=>dispatch({type:'TOGGLE'})} className="navbar__items--item">
          <FaMoon size={15} className='icon'/>

          </div>
          <div className="navbar__items--item">
          <FullscreenExitOutlinedIcon className='icon1'/>
          </div>
          <div className="navbar__items--item">
          <FaBell size={15} className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="navbar__items--item">
          <ChatBubbleOutlineOutlined className='icon1'/>
          <div className="counter">2</div>
          </div>
          <div className="navbar__items--item">
          <FaListAlt size={15} className='icon'/>
          </div>
          <div className="navbar__items--item">
          <div className="avatar">
            <img src="../../images/avatar.jpg" alt="" srcSet="" className="avatar__img" />
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar