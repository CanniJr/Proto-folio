import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Home</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/discover'>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/services'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>Contact</NavLink>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>    
        </>
    )
}

export default Navbar
