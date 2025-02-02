import React, { useContext, useEffect, useState } from 'react'
import { ProductData } from '../ContextApi'
import { addCard } from './addcard'
import "./HomePage.css"
import { useNavigate } from 'react-router-dom'
function HomePage() {
    const {products,setProducts,cardDetail,setCardDetail,card,setCard}=useContext(ProductData)
    const navigate=useNavigate()
    const [btnarr,setBtnarr]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const pageLimit=15
   

    useEffect(()=>{
      const fetchData=(async()=>{
        const res=await fetch("https://api.escuelajs.co/api/v1/products")
        const data=await res.json()

        
        
        const len=data.length
        const page=Math.ceil(len/pageLimit)
        // console.log(page)
        let arr=[]
        for(let i=1;i<=page;i++){
          arr.push(i)
        }
        setBtnarr(arr)
        console.log(arr)
        setCurrentPage(1)
       
    })
    fetchData()
    

    },[])
    useEffect(() => {
      async function fetchProducts() {
          try {
              let startIndex = (currentPage - 1) * pageLimit;
              
              let res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${startIndex}&limit=${pageLimit}`);
              if (!res.ok) throw new Error("Failed to fetch data");
              
              const data = await res.json();
              console.log(data);
              setProducts(data);
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      }

      fetchProducts(); // ✅ Call async function inside useEffect
  }, [currentPage]);
    async function detailHandle(id){ 
        const res=await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const data = await res.json()
        setCardDetail(data)
        // console.log(data)
        navigate("/card")

       }
    
       
      // const addCard = async (event, id) => {
      //      event.stopPropagation();
      //      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      //      const data = await res.json();
           
      //      const { setCard } = useContext(ProductData); 
      //      setCard((prev) => [...prev, data]);
       
      //      alert("Added Successfully");
      // };
       
   function prevHandler(){
    if(currentPage>1){
      setCurrentPage(currentPage-1)
      console.log(currentPage)
    }
   }
   function nextHandler(){
    if(currentPage<btnarr.length){
      setCurrentPage(currentPage+1)
      console.log(currentPage)
    }
   }
   function buyBtn(){
    alert("Buy successful")
   }
  return (

    <>
    <div>
    <div className='container'>
      {products.map((item)=>(
        <div key={item.id} className="card" onClick={()=>detailHandle(item.id)}>
        <img src={item.images[0]} alt="img" />
        <p>{item.title}</p>
         <h4>Price: ${item.price}</h4>
         <button className='addBtn' onClick={(e)=>addCard(e,item.id,setCard)}>Add Cart</button>
         <button className='buyBtn' onClick={buyBtn}>Buy</button>
        </div>
      ))}
      
    </div>
      <div className='pagination-btn'>
        <button onClick={prevHandler} disabled={currentPage===1} >Prev</button>
        <button onClick={nextHandler} disabled={currentPage===btnarr.length} >Next</button>
      </div>
    </div>
    </>
  )
}

export default HomePage
