import React, { useContext, useEffect, useState } from 'react'
import { ProductData } from '../ContextApi'
import { addCard } from './addcard'

function Search() {
    const {searchData,products,setCard}=useContext(ProductData)
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    console.log(searchData)
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
        const res=await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const data = await res.json()
        setCardDetail(data)
        // console.log(data)
        navigate("/card")

       }
    
   
    function prevHandler(){
        if(page>1){
          setPage(page-1)
          console.log(page)
        }
       }
       function nextHandler(){
        if(page<paginationArr.length){
          setPage(page+1)
          console.log(page)
        }
       }
  return (
    <>
    <div>
    <div className='container'>
      {data.map((item)=>(
        <div key={item.id} className="card" onClick={()=>detailHandle(item.id)}>
        <img src={item.images[0]} alt="img" />
        <p>{item.title}</p>
         <h4> $ {item.price}</h4>
         <button className='addBtn' onClick={(e)=>addCard(e,item.id,setCard)}>Add Card</button>
         <button className='buyBtn' onClick={()=>alert("buy Successful")}>Buy</button>
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
