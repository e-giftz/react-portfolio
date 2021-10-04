import React, { useState } from 'react';
import '../../App.css';
import Menu from '../Menu';
import { portfolios } from '../../data';
import ButtonPortfolio from '../ButtonPortfolio';

// Array of buttons to hold the buttons with category
const allButtons = ["All", ...new Set(portfolios.map(item => item.category))];

export default function  Portfolio() {
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

            <h1>Portfolio</h1>
            <ButtonPortfolio filter={filter} button={button} />
            <Menu menuItem={menuItem} />

        </>
    );
}