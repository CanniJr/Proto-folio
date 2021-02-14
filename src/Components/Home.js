import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom'
import Hero from './Hero'
import '../CSS/Home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Info from './Info'
import Projects from './Projects'
import Footer from './Footer'
import Message from './Message'
import Resume from './Resume'
import { homeObj1, homeObj2, homeObj3 } from './Data'

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
                <Navbar toggle={toggle} />
                    <Sidebar isOpen={isOpen} toggle={ toggle }/>
                    <Hero />
                    <Info  {...homeObj1} />
                    <Info  {...homeObj2} />
                    <Projects />
                    <Info  {...homeObj3} />
                    <Route exact path='/resume'>
                        <Resume />
                    </Route>
                    <Message />
                <Footer />
        </>
    )
}

export default Home
