import React, { useContext } from 'react';

import "./Signup.css"  // ✅ Import the new CSS
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
                if (user.name && user.email && user.password) {
                    setFormData((prev) => [...prev, user]);
                    console.log("User added successfully:", user);
                    setUser({});
                    navigate("/login")
                } else {
                    alert("Please fill all fields");
                }
            }} className='form'>
                <h1 style={{textAlign:"center"}}>Signup</h1>
                <span>Name:</span>
                <input type="text" name="name" value={user?.name || ""} onChange={handler} />
                
                <span>Email:</span>
                <input type="email" name="email" value={user?.email || ""} onChange={handler} />
                
                <span>Gender:</span>
                <select name="gender" value={user?.gender || ""} onChange={handler}>
                    <option value='-'>--</option>
                    <option value="male">Male</option>
                    <option value='female'>Female</option>
                </select>
                
                <span>Create Password:</span>
                <input type="password" name="password" value={user?.password || ""} onChange={handler} />
                
                <button className='sub-btn'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
