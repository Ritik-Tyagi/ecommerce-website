import React, { useContext, useEffect, useState } from 'react'
import { ProductData } from '../ContextApi'
import { addCard } from './addcard'
import Navbar from './Navbar'
import "./search.css"

function Search() {
    const {searchData,products,setCard,setCardDetail}=useContext(ProductData)
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    // console.log(searchData)
    const paginationArr=[]
     const limit=15
     let pages=Math.ceil(searchData.length/limit)
        for(let i=1;i<=pages;i++){
            paginationArr.push(i)
        }
    useEffect(()=>{
        let startInd=(page-1)*limit
        let lastInd=startInd+limit
        setData(searchData.slice(startInd,lastInd))
    },[page,searchData])
    async function detailHandle(id){ 
        const res=await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee/${id}`)
        const data = await res.json()
        setCardDetail(data)
        // console.log(data)
        navigate("/card")

       }
    
   
    function prevHandler(){
        if(page>1){
          setPage(page-1)
          // console.log(page)
        }
       }
       function nextHandler(){
        if(page<paginationArr.length){
          setPage(page+1)
          // console.log(page)
        }
       }
  return (
    <>
    <div>
      <Navbar/>
    <div className='search-container'>
      {data.map((item)=>(
        <div key={item.id} className="search-card" onClick={()=>detailHandle(item.id)}>
        <img src={item.image} alt="img" />
        <div style={{display:"flex",padding:"2px",justifyContent:"end"}}>
          <span>ratings:</span>
         <span style={{backgroundColor:"green",color:'white',fontSize:"12px",padding:"2px",borderRadius:"4px"}} >{item.rating.rate} ⭐</span>

        </div>
        <p>{item.title}</p>
         <h3>Price: ${item.price}</h3>
         <div className='btn-div'>

         <button className='addBtn' onClick={(e)=>addCard(e,item.id,setCard)}>Add Card</button>
         <button className='buyBtn' onClick={()=>alert("buy Successful")}>Buy</button>
         </div>
        </div>
      ))}
      
    </div>
      <div className='pagination-btn' >
        <button onClick={prevHandler} disabled={page===1} >Prev</button>
        <button onClick={nextHandler} disabled={page===paginationArr.length} >Next</button>
      </div>
    </div>
    </>
  )
}

export default Search
