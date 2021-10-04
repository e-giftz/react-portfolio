import React from 'react';
import '../styles/ButtonPortfolio.css';

function ButtonPortfolio({filter, button}) {
    return (
        <div className="portfolio-btns">
            {
                button.map((but, i) => {
                    return <button 
                            className="portfolio-btn" 
                            key={i} 
                            onClick={() => filter(but)}
                        >
                            {but}
                    </button>
                })
            }
            
        </div>
    )
}

export default ButtonPortfolio
