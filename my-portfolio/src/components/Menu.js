import React from 'react';
import '../styles/Menu.css';
import { Button } from './Button';

function Menu({menuItem}) {
    return (
        <>
            <div className="menu">
                {/* <h1>Portfolio</h1> */}
                <div className="menu-container">
                    {
                        menuItem.map((item) => {
                            return <div className="grid-item" key={item.id}>
                                <div className="portfolio-content">
                                    <div className="portfolio-image">
                                        <img src={item.img} alt="" />

                                        <ul>
                                            <li>
                                                <Button
                                                    className="portfolio-btns"
                                                    buttonStyle="btn--primary"
                                                    buttonSize="btn--medium"
                                                >
                                                    <a target="_blank" href={item.link1} rel="noreferrer">
                                                        View Repo:
                                                    </a>
                                                </Button>
                                                {/* <a href={item.link1}></a> */}
                                            </li>
                                            <li>
                                                <Button
                                                    className="portfolio-btns"
                                                    buttonStyle="btn--primary"
                                                    buttonSize="btn--medium"
                                                >
                                                    <a target="_blank" href={item.link2} rel="noreferrer">
                                                        View App:
                                                    </a>
                                                </Button>
                                                {/* <a href={item.link2}></a> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <h6>{item.title}</h6>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu