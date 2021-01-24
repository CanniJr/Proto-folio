import React, { useState } from 'react'
import Hero from './Hero'
import '../CSS/Home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Info from './Info'
import { homeObj1 } from './Data'

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={ toggle }/>
            <Navbar toggle={toggle} />
            <Hero />
            <Info  {...homeObj1}/>
        </>
    )
}

export default Home
