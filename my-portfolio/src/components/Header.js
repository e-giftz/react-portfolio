import React from 'react';
import { Button } from './Button';
import '../App.css';
import '../styles/Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header-container">
            <div className="header-image" style={{ backgroundImage: "url(/images/img-1.jpg)"  }}>
            </div>
            <h1>CREATIVE WEB DEVELOPER</h1>
            <p>Solving complex challenges  with  simple solutions</p>
            <div className="header-btns">
                <Link to="/about-me">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        View Profile
                    </Button>
                </Link>
                <Link to="/portfolio">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                    >
                        Explore Projects
                    </Button>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;
