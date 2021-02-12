import React, { useState } from 'react'
import Hero from './Hero'
import '../CSS/Home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Info from './Info'
import Projects from './Projects'
import Footer from './Footer'
import { homeObj1, homeObj2, homeObj3 } from './Data'

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
            <Info  {...homeObj1} />
            <Info  {...homeObj2} />
            <Projects />
            <Info  {...homeObj3} />
            <Footer />
        </>
    )
}

export default Home
