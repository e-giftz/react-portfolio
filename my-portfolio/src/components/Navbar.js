import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Navbar.css';
import {  Button } from './Button';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Function to handle click events
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //  Function to remove or display button depending on screensize
    const displayButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // When you resize screen
    window.addEventListener('resize',  displayButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link  to="/" className="navbar-logo">
                        NWAKAEGO GIFT EZE
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu  active"  : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Explore Work</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
