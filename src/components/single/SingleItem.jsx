import React from 'react'
import Leaf from "../../images/leaf.jpg"
function SingleItem() {
  return (
    
       <div className="singleItem">
       <div className="singleItem__top">
            <div className="singleItem__top--left">
                <div className="singleItemCard">
                    <div className="singleItemCard__title">
                        Information
                    </div>
                    <div className="singleItemCard__info">
                        <img src={Leaf} alt="" srcSet="" className="singleItemCard__info--img" />

                        <div className="singleItemCard__info--rightSide">
                            <div className="email"><span>
                                Email:</span>roggers@gmail.com</div>
                            <div className="phone"><span>Phone:</span>+2547 123 432 33</div>
                            <div className="address"><span>Address:</span>Og st. 254 kenya, Nairobi</div>
                            <div className="country"><span>Country:</span>Kenya</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleItem__top--right"></div>
        </div>
        <div className="singleItem__bottom"></div>
       </div>
  )
}

export default SingleItem