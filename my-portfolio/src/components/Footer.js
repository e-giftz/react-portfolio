import React from 'react';
import  '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            NWAKAEGO GIFT EZE
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>GIFT.NE PRODUCTIONS © 2021</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin-in' />
                        </Link>
                        <Link
                            className='social-icon-link github'
                            to='/'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
