import React from 'react';
import '../styles/Project1List.css';

export default function Project1List({ title, active, setSelected, id }) {
    return (
        <>
            <li 
                className={active ?  "project1List active" : "project1List"}
                onClick={() => setSelected(id)}
            >
                {title}
            </li>
        </>
    )
}

