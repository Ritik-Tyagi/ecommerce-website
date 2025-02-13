import { createContext, useState } from "react";

export const ProductData=createContext()
const DataProvider=({children})=>{
    const [products,setProducts]=useState([])
    const [cardDetail,setCardDetail]=useState({})
    const [card,setCard]=useState([])
    const [formData,setFormData]=useState([])
    const [user,setUser]=useState({})
    const [searchInp,setSearchInp]=useState("")
    const [searchData,setSearchData]=useState([])
    const [isLoged,setisLoged]=useState(()=>!!localStorage.getItem("userToken"))
    const login=()=>{
        setisLoged(true)
        localStorage.setItem("userToken","123456wiendfck")
    }
    const logout=()=>{
        setisLoged(false)
        localStorage.removeItem("userToken")
    }
return <ProductData.Provider value={{isLoged,login,logout,searchData,setSearchData,products,setProducts,cardDetail,setCardDetail,card,setCard,user,setUser,formData,setFormData,searchInp,setSearchInp}}>{children}</ProductData.Provider> 
}
export default DataProvider