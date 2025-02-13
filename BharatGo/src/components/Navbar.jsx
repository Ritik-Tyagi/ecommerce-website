import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"; // ✅ Import CSS
import { ProductData } from '../ContextApi';

function Navbar() {
    const { searchInp, setSearchInp,products, searchData,setSearchData,logout } = useContext(ProductData);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate=useNavigate()
    const [allproduct,setallproduct]=useState([])
    function SearchHandler(e) {
        setSearchInp(e.target.value.toLowerCase());
    }
    useEffect(()=>{
        setallproduct(products)
    },[products])
    async function SearchData(e) {
        e.preventDefault();
        // console.log(searchInp);
        let value=searchInp.trim()
        const data = allproduct.filter((item) => item.title.toLowerCase().includes(value)||item.category.toLowerCase().includes(value)||item.description.toLowerCase().includes(value));
        setSearchData(data);
        navigate("/searchData")
    }

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-shopping-logo-deisgn-modern-style-with-bag-png-image_8549828.png" alt="Logo" />
                </div>

                <div className="search">
                    <input type="search" name="search" id="search-inp" placeholder="Search..." value={searchInp || ""} onChange={SearchHandler} />
                    <button id="Search-btn" onClick={(e)=>SearchData(e)}>Search</button>
                </div>

                
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/addCart">Cart</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Signup">Signup</Link>
                    <button onClick={()=>logout()} >Logout</button>
                </div>

                
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/addCart" onClick={() => setMenuOpen(false)}>Cart</Link>
                    <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link to="/Signup" onClick={() => setMenuOpen(false)}>Signup</Link>
                    <button onClick={()=>logout()} >Logout</button>
                </div>
            )}

            
        </>
    );
}

export default Navbar;
