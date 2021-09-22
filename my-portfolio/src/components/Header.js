import React from 'react';
import { Button } from './Button';
// import '../App.css';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import headerImage from './logo/img-22.jpeg';


function Header() {
    return (
        <div className="header">
            <div className="header-image" style={{ backgroundImage: `url(${headerImage})` }}>
            </div>
            <div className="header-title">
                <h1>CREATIVE WEB DEVELOPER</h1>
                <p>Solving complex challenges  with  simple solutions</p>
            </div>

            <div className="header-btns">
                <Link to="/about">
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
