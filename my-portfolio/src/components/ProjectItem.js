import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem(props) {
    return (
        <>
            <li  className="project__item">
                <Link className="project__item__link" to={props.path}>
                    <figure className="project__item__picwrap" data-category={props.label}>
                        <img src={props.src} alt="project figure" className="project__item__img"/>
                    </figure>
                    <div className="project__item__info">
                        <h5 className="project__item__text">{props.text}</h5>
                    </div>    
                </Link>
            </li>
        </>
    )
}

export default ProjectItem
