import React from 'react'
import '../styles/Button.css';
import { Link } from 'react-router-dom';

// Creating CSS styling for the button
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ 
    children,
    type,
    onClick, 
    buttonStyle,  
    buttonSize
}) => {
    // Applying the buttonstyle to the button
    const addButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const addButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/resume" className="btn-mobile">
            <button  
            className={`btn ${addButtonStyle} ${addButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>

        </Link>
    )
};