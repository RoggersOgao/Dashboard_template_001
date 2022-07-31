import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import {FaAngleDown} from 'react-icons/fa'
function Progress() {
  return (
    <div className="progressContainer">
        <div className="progressContainer__top">
            <div className="progressContainer__top--title">
                Total Sales
            </div>
            <div className="progressContainer__top--icon">
            <MoreVertIcon />
            </div>
        </div>
        <div className="progressContainer__bottom">
        <div className="progressContainer__bottom--chart">
        <CircularProgressbar value={80} text="80%" strokeWidth={2}/>
        </div>
        <div className="progressContainer__bottom--title">Total Sales Made Today</div>
        <div className="progressContainer__bottom--amount">$200</div>
        <div className="progressContainer__bottom--desc">Previous Transactions processing. Last payments may not be included</div>
       
        <div className="progressContainer__bottom--stats">
<div className="progressContainer__bottom--stats__target">
    <div className="progressContainer__bottom--stats__target--title">
        Target
    </div>
    <div className="progressContainer__bottom--stats__target--desc">
<FaAngleDown /> 10.3K
    </div>
</div>
<div className="progressContainer__bottom--stats__lastWeek">
<div className="progressContainer__bottom--stats__lastWeek--title">
        Last Week
    </div>
    <div className="progressContainer__bottom--stats__lastWeek--desc">
<FaAngleDown /> 12.3K
    </div>
</div>
<div className="progressContainer__bottom--stats__lastMonth">
<div className="progressContainer__bottom--stats__lastMonth--title">
        Last Month
    </div>
    <div className="progressContainer__bottom--stats__lastMonth--desc positive">
<FaAngleDown /> 17.3K
    </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Progress