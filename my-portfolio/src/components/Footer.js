import React from 'react';
import  '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">GIFT.NE PRODUCTIONS © 2021</small>
                    <div className="social-icons">
                        <a style={{display:  "table-cell"}}
                            href="https://linkedin.com/in/nwakaegogifteze"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-link linkedin"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in fa-3x" />
                        </a>

                        <a  style={{display:  "table-cell"}}
                            href="https://github.com/e-giftz"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-link github"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github fa-3x" />
                        </a>
                        <a  style={{display:  "table-cell"}}
                            href="https://linkedin.com/e-giftz"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-link twitter"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter fa-3x" />
                        </a>
                        
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
