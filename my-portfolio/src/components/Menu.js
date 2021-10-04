import React, { useState } from 'react';
import '../styles/Menu.css';
import { Button } from './Button';
import ButtonPortfolio from '../components/ButtonPortfolio';
import { portfolios }  from '../components/data';

// Array of buttons to hold the buttons with category
const allButtons = ["All", ...new Set(portfolios.map(item => item.category))];
function Menu() {

    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    // Set filter function to filter data
    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <>
            <div className="menu">
                <h1>Portfolio</h1>  
                <ButtonPortfolio filter={filter} button={button} />
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
                                                    // className="portfolio-btns"
                                                    buttonStyle="btn--primary"
                                                    buttonSize="btn--medium"
                                                >
                                                    <a target="_blank" href={item.link1} rel="noreferrer">
                                                        View Repo:
                                                    </a>
                                                </Button>
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