import React, {useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { FaAngleLeft, FaCamera, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const New = ({title,inputs,}) => {

  // URL.createObjectURL(file)
const [file, setFile] = useState("")
  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <div className="container">
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home__container">
        <Navbar />

        <div className="newContainer">
          <div className="newContainer__title">
            <div className="text">{title}</div>
            <Link to='/' className="back"><FaAngleLeft /> Back</Link>
          </div>
          <div className="newContainer__form">
          <div className="newContainer__form--left">
            {/* img */}
            <div className="cameraIcon">
            <FaCamera size={100}/>
            </div>
          </div>
          <div className="newContainer__form--right">
            {/* form */}

            <div className="container__form">
            <div className="form-group">
                <label htmlFor='file'>
                     Upload: <FaUpload />
                </label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleChange}/>
              </div>
              {inputs.map((item,index)=>(
              <div className="form-group" key={index}>
                <label htmlFor={item.label}>{item.label}</label>
                <input type={item.type} id={item.label} placeholder={item.placeholder} />
              </div>
              ))}
              <button type="submit">Add</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}
export default New