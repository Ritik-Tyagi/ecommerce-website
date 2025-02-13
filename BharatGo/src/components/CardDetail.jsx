import React, { useContext } from 'react'
import { ProductData } from '../ContextApi'
import "./CardDetail.css"
import {addCard} from "./addcard"
import Navbar from './Navbar'
function CardDetail() {
    const {cardDetail,setCard}=useContext(ProductData)
    // console.log(cardDetail)
  return (
    <>
    <Navbar/>
    <div className='card-detail-container'>
        
      <img src={cardDetail.image} alt="img" />
      <div style={{display:"flex",padding:"2px",justifyContent:"end"}}>
          <span>ratings:</span>
         <span style={{backgroundColor:"green",color:'white',fontSize:"12px",padding:"2px",borderRadius:"4px"}} >{cardDetail.rating.rate} ⭐</span>

        </div>
      <p>{cardDetail.title}</p>
      <h4>Price: ${cardDetail.price}</h4>
      <p>{cardDetail.description}</p>
      
      <button onClick={(e) => addCard(e, cardDetail.id, setCard)}>Add Cart</button>
      <button onClick={()=>alert("Buy successful")}>Buy</button>

    </div>
    </>
  )
}

export default CardDetail
