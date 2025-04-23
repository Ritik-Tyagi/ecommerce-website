import React, { useContext } from 'react';
import { ProductData } from '../ContextApi';
import "./Card.css";  
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Card() {
    const { card,setCard,setCardDetail } = useContext(ProductData);
    const navigate=useNavigate()
    function deleteHandle(e,id){
        e.stopPropagation()
        setCard(card.filter((item)=>item.id!==id))
    }
    if(card.length===0){
        return <><Navbar/><div className='empty-card'>Card is Empty</div></>
    }
    async function detailHandle(id){ 
        const res=await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee/${id}`)
       
        const data = await res.json()
        setCardDetail(data)
        // console.log(data)
        navigate("/card")

       }
    
    return (
        <>
        <Navbar/>
        <div className="card-container">
            {card.map((item) => (
                <div key={item.id} className="card-item" onClick={()=>detailHandle(item.id)}>
                    <img src={item.image} alt="Product" /> 
                    <div style={{display:"flex",padding:"2px",justifyContent:"end"}}>
                    <span>ratings:</span>
                    <span style={{backgroundColor:"green",color:'white',fontSize:"12px",padding:"2px",borderRadius:"4px"}} >{item.rating.rate} ⭐</span>

                    </div>
                    <p>{item.title}</p>
                    <h4>Price: ${item.price}</h4>
                    <button onClick={(e)=>deleteHandle(e,item.id)}>Delete</button>
                    <button onClick={()=>alert("Buy Successful")}>Buy</button>
                </div>
            ))}
        </div>
    </>
    );
}

export default Card;
