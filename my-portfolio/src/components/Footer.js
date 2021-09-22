import React from 'react';
import  '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <h3>GIFT.NE PRODUCTIONS © 2021</h3>
            <a href="https://linkedin.com/in/nwakaegogifteze"
                target="_blank"
                rel="noreferrer"
                className="linkedin social"
                aria-label="LinkedIn"
            >
                <i className="fab fa-linkedin-in fa-2x" />
            </a>
            <a href="https://github.com/e-giftz"
                target="_blank"
                rel="noreferrer"
                className="github social"
                aria-label="GitHub"
            >
                <i className="fab fa-github fa-2x" />
            </a>
        </footer>
    )
}

export default Footer
