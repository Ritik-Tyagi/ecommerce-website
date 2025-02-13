import React, { useContext } from 'react'
import { ProductData } from '../ContextApi'
import Signup from '../components/Signup'
import { Link } from 'react-router-dom'
import Dashbord from '../components/Dashbord'
function Home() {
    const {isLoged} = useContext(ProductData)
    return (
        <>
            {isLoged ? <Dashbord/> : (
                <>
                    <Signup/>
                    
                </>
            )}
        </>
    )
}

export default Home
