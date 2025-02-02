import React, { useContext } from 'react';

import "./Login.css"  // ✅ Import the new CSS
import { ProductData } from '../ContextApi';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { user, setUser, formData, setFormData } = useContext(ProductData);
    const navigate=useNavigate()
    function handler(e) {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className='signup-container'>
            <form onSubmit={(e) => {
                e.preventDefault();
                formData.filter((item)=>{if(item.email===user.email && item.password===user.password){
                    alert("login Successful")
                    navigate("/")

                }
            })
            }} className='form'>
                <h1 style={{textAlign:"center"}}>Login</h1>
                
                <span>Email:</span>
                <input type="email" name="email" value={user?.email || ""} onChange={handler} />
                
                

                
                <span>Password:</span>
                <input type="password" name="password" value={user?.password || ""} onChange={handler} />
                
                <button className='sub-btn'>Login</button>
            </form>
        </div>
    );
}

export default Login;
