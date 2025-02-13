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
    const [allproduct,setallproduct]=useState([])
    const pageLimit=12
   

    useEffect(()=>{
      const fetchData=(async()=>{
        const res=await fetch("https://6790dd28af8442fd737812a6.mockapi.io/employee")
        const data=await res.json()

        setallproduct(data)
        
        const len=data.length
        const page=Math.ceil(len/pageLimit)
        // console.log(page)
        let arr=[]
        for(let i=1;i<=page;i++){
          arr.push(i)
        }
        setBtnarr(arr)
        // console.log(arr)
        setCurrentPage(1)
       
    })
    fetchData()
    

    },[])
    useEffect(() => {
      async function fetchProducts() {
          try {
              let startIndex = (currentPage - 1) * pageLimit;
              
              let res = await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee?page=${currentPage}&limit=${pageLimit}`);
              if (!res.ok) throw new Error("Failed to fetch data");
              
              const data = await res.json();
              // console.log(data);
              setProducts(data);
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      }

      fetchProducts(); // ✅ Call async function inside useEffect
  }, [currentPage]);
    async function detailHandle(id){ 
        const res=await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee/${id}`)
        const data = await res.json()
        setCardDetail(data)
        // console.log(data)
        navigate("/card")

       }
    
       
      // const addCard = async (event, id) => {
      //      event.stopPropagation();
      //      const res = await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee/${id}`);
      //      const data = await res.json();
           
      //      const { setCard } = useContext(ProductData); 
      //      setCard((prev) => [...prev, data]);
       
      //      alert("Added Successfully");
      // };
       
   function prevHandler(){
    if(currentPage>1){
      setCurrentPage(currentPage-1)
      // console.log(currentPage)
    }
   }
   function nextHandler(){
    if(currentPage<btnarr.length){
      setCurrentPage(currentPage+1)
      // console.log(currentPage)
    }
   }
   function buyBtn(){
    alert("Buy successful")
   }
   function selectvalue(e){
    if(e.target.value==="price"){
      let sortData=[...allproduct].sort((a,b)=>a.price-b.price)
      setProducts(sortData)

    }else if(e.target.value==="high"){
      let sortData=[...allproduct].sort((a,b)=>b.price-a.price)
      setProducts(sortData)

    }else if(e.target.value==="rating"){
      let sortData=[...allproduct].sort((a,b)=>a.rating.rate-b.rating.rate)
      setProducts(sortData)
      

    }else if(e.target.value==="h-l"){
      let sortData=[...allproduct].sort((a,b)=>b.rating.rate-a.rating.rate)
      setProducts(sortData)
      

    }else if(e.target.value==="men's clothing"){
      let filterData=allproduct.filter((item)=>item.category===e.target.value)
      setProducts(filterData)
      
    }else if(e.target.value==="jewelery"){
      let filterData=allproduct.filter((item)=>item.category===e.target.value)
      setProducts(filterData)
      
    }else if(e.target.value==="electronics"){
      let filterData=allproduct.filter((item)=>item.category===e.target.value)
      setProducts(filterData)
      // console.log(filterData)
      
    }else if(e.target.value==="women"){
      let filterData=allproduct.filter((item)=>item.category==="women's clothing")
      setProducts(filterData)
      // console.log(filterData)
    }
   }
  return (

    <>
    <div>
      <select id="selectData" onChange={selectvalue}>
        <option value="-">filter   </option>
        <option value="price">Price low-high</option>
        <option value="high">Price high-low</option>
        <option value="rating">Rating low - high</option>
        <option value="h-l">Rating high-low</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women">women's clothing</option>
      </select>
    <div className='card-container'>
      {products.map((item)=>(
        <div key={item.id} className="card-item" onClick={()=>detailHandle(item.id)}>
        <img src={item.image} alt="img" />
        <div style={{display:"flex",padding:"2px",justifyContent:"end"}}>
          <span>ratings:</span>
         <span style={{backgroundColor:"green",color:'white',fontSize:"12px",padding:"2px",borderRadius:"4px"}} >{item.rating.rate} ⭐</span>

        </div>
        
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
