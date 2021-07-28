import React from 'react';
import { Button } from './Button';
import '../App.css';
import '../styles/Header.css';


function Header() {
    return (
        <div className="header-container">
            <div className="header-image" style={{ backgroundImage: "url(/images/img-1.jpg)"  }}>
            <h1>CREATIVE WEB DEVELOPER</h1>
            <p>Solving complex challenges  with  simple solutions</p>
            </div>
            <div className="header-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    View Profile
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    Explore Projects
                </Button>
            </div>
        </div>
    )
}

export default Header
