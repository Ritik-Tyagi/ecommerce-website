import React, { useContext } from 'react';
import { ProductData } from '../ContextApi';
import "./Card.css";  // ✅ Import the CSS

function Card() {
    const { card,setCard } = useContext(ProductData);
    function deleteHandle(id){
        setCard(card.filter((item)=>item.id!==id))
    }
    if(card.length===0){
        return <div className='empty-card'>Card is Empty</div>
    }
    return (
        <div className="card-container">
            {card.map((item) => (
                <div key={item.id} className="card-item">
                    <img src={item.images?.[0]} alt="Product" /> 
                    <p>{item.title}</p>
                    <h4>Price: ${item.price}</h4>
                    <button onClick={()=>deleteHandle(item.id)}>Delete</button>
                    <button onClick={()=>alert("Buy Successful")}>Buy</button>
                </div>
            ))}
        </div>
    );
}

export default Card;
