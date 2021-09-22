import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Navbar.css';
// import {  Button } from './Button';



function Navbar() {
    const [click, setClick] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    // const [button, setButton] = useState(true);

    // Function to handle click events
    const handleClick = ()=> setClick(!click);
    //const closeMobileMenu = () => setClick(false);

    //  Function to remove or display button depending on screensize
    const displayButton = () => {
        const width = window.innerWidth;
        setScreenWidth(width);

        if(width > 600) {
            setClick(true);
        } 
    };

    const handleClose = () => {
        if (screenWidth < 600) {
          setClick(false);
        }
      };

    // To prevent the button from showing up on refersh
    useEffect(() => {
        displayButton();

        // When you resize screen
        window.addEventListener('resize', displayButton);
        return () => window.removeEventListener('resize', displayButton);
    }, []);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-wrapper">
                    <div className="logo-wrapper">
                        <Link to="/"  className="logo">
                            NWAKAEGO GIFT EZE
                        </Link>
                    </div>
                    <div className={"menu-list " + (click && "active")}> 
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}   */}
                    
                       <i className="fas fa-bars"
                        style={{ opacity: !click ? 1 : 0 }} 
                         //onClick={handleClick}
                        onClick={() => {
                            setClick(!click);
                         }}
                        />
                        <i className="fas fa-times"
                        style={{ opacity: click ? 1 : 0 }} 
                        // onClick={handleClick}
                        onClick={() => {
                            setClick(!click);
                          }} 
                        /> 

                        <ul className="nav-menu" 
                        style={{ left: click ? "0" : "-100vw" }}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={handleClose}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-links" onClick={handleClose}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className="nav-links" onClick={handleClose}>
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-links" onClick={handleClose}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-links" onClick={handleClose}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className="nav-links" onClick={handleClose}>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* {button && <Button buttonStyle="btn--outline">View Resume</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
