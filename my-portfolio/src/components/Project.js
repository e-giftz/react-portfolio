import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/Project.css'

function Project() {
    return (
        <div  className="project">
            <h1>Check out these amazing projects</h1>
            <div className="project__container">
                <div  className="project__wrapper">
                    <ul className="project__items">
                        <ProjectItem 
                        src="images/birdwatcher.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/Team-profile-webpage.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="project__items">
                        <ProjectItem 
                        src="images/birdwatcher.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/Team-profile-webpage.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="project__items">
                        <ProjectItem 
                        src="images/birdwatcher.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/Team-profile-webpage.png"
                        text="Quack - The birdwatcher App"
                        label="Full Stack App"
                        path="/portfolio"
                        />
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Project
