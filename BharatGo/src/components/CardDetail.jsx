import React, { useContext } from 'react'
import { ProductData } from '../ContextApi'
import "./CardDetail.css"
import {addCard} from "./addcard"
function CardDetail() {
    const {cardDetail,setCard}=useContext(ProductData)
    console.log(cardDetail)
  return (
    <div className='card-detail-container'>
        
      <img src={cardDetail.images} alt="img" />
      <p>{cardDetail.title}</p>
      <h4>Price: ${cardDetail.price}</h4>
      <p>{cardDetail.description}</p>
      
      <button onClick={(e) => addCard(e, cardDetail.id, setCard)}>Add Cart</button>
      <button onClick={()=>alert("Buy successful")}>Buy</button>

    </div>
  )
}

export default CardDetail
