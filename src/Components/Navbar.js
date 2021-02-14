import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import image from '../images/pp.jpg'
import {
    Nav,
    NavbarContainer,
    MyIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavLinkR,
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

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MyIcon src={ image } alt='me_icon' />
                    <NavLogo to='/' onClick={toggleHome}>CJ</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon >
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='projects'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLinkR to='/resume'
                            >Resume</NavLinkR>
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
