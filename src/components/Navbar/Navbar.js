import { Nav, NavLink, Bars, NavMenu, NavLogo, Separator, NavMenuMobile, NavLinkMobile} from './NavbarElements';
import {Link} from 'react-scroll'
import React, { useState } from 'react';

function Navbar() {
    const [isOpen , setOpen] = useState(false);
    const openMenu = () => setOpen(!isOpen);
    /*  |<div style={{cursor: 'pointer', fontStyle: 'italic', padding: '0 0.5rem', color: '#808080' }}>blog</div> */
    return (
        <>
            <Nav>
                <NavLogo to='/'>Samuel</NavLogo>
                <Bars onClick={openMenu} toggle={() => setOpen(!isOpen)}></Bars>

                {isOpen && <NavMenuMobile onClick={openMenu}>
                    <NavLinkMobile>
                        <Link onClick={openMenu} toggle={() => setOpen(isOpen)} to='about' spy={true} smooth={true}>
                            ABOUT
                        </Link>
                    </NavLinkMobile>
                    <NavLinkMobile>
                        <Link onClick={openMenu} toggle={() => setOpen(isOpen)} to='skills' spy={true} smooth={true}>
                            SKILLS
                        </Link>
                    </NavLinkMobile>
                    <NavLinkMobile>
                        <Link onClick={openMenu} toggle={() => setOpen(isOpen)} to='projects' spy={true} smooth={true}>
                            PROJECTS
                        </Link>
                    </NavLinkMobile>
                    <NavLinkMobile>
                        <Link onClick={openMenu} toggle={() => setOpen(isOpen)} to='contact' spy={true} smooth={true}>
                            CONTACT
                        </Link>
                    </NavLinkMobile>
                </NavMenuMobile>}
                <NavMenu>
                    <NavLink>
                        <Link to='about' spy={true} smooth={true}>
                            ABOUT ME
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='skills' spy={true} smooth={true}>
                            SKILLS
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='projects' spy={true} smooth={true}>
                            PROJECTS
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='contact' spy={true} smooth={true}>
                            CONTACT
                        </Link>
                    </NavLink>
                </NavMenu>
            </Nav>

        </>
    );
}

export default Navbar