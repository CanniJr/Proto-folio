import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    // NavBtn,
    // NavBtnLink
} from '../StyledComponents/NavbarElements'

function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    //Conditional to set NavBar Transparency
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(
        () => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>Cannigia Laluw</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon >
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='projects'>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'>Contact</NavLink>
                        </NavItem>
                        {/* <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar
