import { Nav, NavLink, Bars, Cross, NavMenu, NavLogo, NavMenuMobile, NavLinkMobile} from './NavbarElements';
// import {Link} from 'react-scroll'
import React, { useState } from 'react';

function Navbar() {
    const [isOpen , setOpen] = useState(false);
    const openMenu = () => setOpen(!isOpen);
    /*  |<div style={{cursor: 'pointer', fontStyle: 'italic', padding: '0 0.5rem', color: '#808080' }}>blog</div> */
    return (
        <>
            <Nav>
                <NavLogo to='/'>Samuel</NavLogo>
                { !isOpen && <Bars onClick={openMenu} toggle={() => setOpen(!isOpen)}></Bars>}
                { isOpen && <Cross onClick={openMenu} toggle={() => setOpen(!isOpen)}></Cross>}

                {isOpen && <NavMenuMobile onClick={openMenu}>
                    <NavLinkMobile onClick={openMenu} toggle={() => setOpen(isOpen)} to='about' spy={true} smooth={true}>
                        ABOUT ME
                    </NavLinkMobile>
                    <NavLinkMobile onClick={openMenu} toggle={() => setOpen(isOpen)} to='skills' spy={true} smooth={true}>
                        SKILLS
                    </NavLinkMobile>
                    <NavLinkMobile onClick={openMenu} toggle={() => setOpen(isOpen)} to='projects' spy={true} smooth={true}>
                        PROJECTS
                    </NavLinkMobile>
                    <NavLinkMobile onClick={openMenu} toggle={() => setOpen(isOpen)} to='contact' spy={true} smooth={true}>
                        CONTACT
                    </NavLinkMobile>
                </NavMenuMobile>}
                <NavMenu>
                    <NavLink to='about' spy={true} smooth={true}>
                        ABOUT ME
                    </NavLink>
                    <NavLink to='skills' spy={true} smooth={true}>
                        SKILLS
                    </NavLink>
                    <NavLink to='projects' spy={true} smooth={true}>
                        PROJECTS
                    </NavLink>
                    <NavLink to='contact' spy={true} smooth={true}>
                        CONTACT
                    </NavLink>
                </NavMenu>
            </Nav>

        </>
    );
}

export default Navbar