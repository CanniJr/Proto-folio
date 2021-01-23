import React, { useState } from 'react'
import Hero from './Hero'
import '../CSS/Home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Info from './Info'

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
            <Info/>
        </>
    )
}

export default Home
