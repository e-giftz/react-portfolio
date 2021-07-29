import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/Project.css';

function Project() {    
    return (
        <div  className="project">
            <h1>PORTFOLIO</h1>
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
                        src="images/budget_tracker.png"
                        text="PWA Budget Tracker"
                        label="Progressive Web Apps"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="project__items">
                        <ProjectItem 
                        src="images/book_search_engine.png"
                        text="Book Search Engine"
                        label="MERN Stack/Apollo Server/ React Js"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/SportsReel.png"
                        text="Project-Sports Reel App"
                        label="JavaScript/JQuery"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/Weatherdashboard.png"
                        text="Weather-Dashboard App"
                        label="JavaScript/Bootstrap/Serverside APIs"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="project__items">
                        <ProjectItem 
                        src="images/code-refactor-small.png"
                        text="The Code Refactor Webpage"
                        label="HTML/CSS Technologies"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/notetaker-landingpage.png"
                        text="The Note-Taker App"
                        label="Express JS Technologies"
                        path="/portfolio"
                        />
                        <ProjectItem 
                        src="images/Team-profile-webpage.png"
                        text="Quack - The Team Profile Generator App"
                        label="Node JS Technologies"
                        path="/portfolio"
                        />
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Project;
