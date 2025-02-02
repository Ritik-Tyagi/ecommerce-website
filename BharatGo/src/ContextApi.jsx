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

return <ProductData.Provider value={{searchData,setSearchData,products,setProducts,cardDetail,setCardDetail,card,setCard,user,setUser,formData,setFormData,searchInp,setSearchInp}}>{children}</ProductData.Provider> 
}
export default DataProvider