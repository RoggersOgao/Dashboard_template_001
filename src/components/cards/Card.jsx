import React from 'react'
import {FaAngleRight,FaAngleUp, FaUsers, FaShoppingCart, FaMoneyBill, FaBalanceScaleRight} from 'react-icons/fa'
function Card({type}) {

    let data;

    //temporary money

    const amount = 100
    const diff = 20

    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney:false,
                link:<FaAngleRight />,
                icon: <FaUsers size={40} className="icon" style={{color:"lightBlue"}}/>,
            }
            break
        case "order":
            data = {
                title:"ORDERS",
                isMoney:false,
                link:<FaAngleRight />,
                icon: <FaShoppingCart size={40} className="icon"style={{color:"orange"}}/>,
            }
                break
        case "earnings":
            data = {
                title:"EARNINGS",
                isMoney:false,
                link:<FaAngleRight />,
                icon: <FaMoneyBill size={40} className="icon" style={{color:"lightGreen"}}/>,
            }
                break   
        case "balance":
            data = {
                title:"BALANCE",
                isMoney:false,
                link:<FaAngleRight />,
                icon: <FaBalanceScaleRight size={40} className="icon" style={{color:"orangeRed"}}/>,
            }
                break           
        default:
            
    }
    
  return (
    <div className="container">
        <div className="card">
           <div className="card__container">
           <div className="card__container__left">
                <div className="card__container__left--title">{data.title}</div>
                <div className="card__container__left--counter">{data.isMoney && "$"}{amount}</div>
                <div className="card__container__left--link">{data.link}&nbsp; All</div>
            </div>
            <div className="card__container__right">
                <div className="card__container__right--percentage positive">
                    <FaAngleUp /> &nbsp; {diff}%
                </div>
                {data.icon}
            </div>
           </div>
        </div>
    </div>
  )
}

export default Card