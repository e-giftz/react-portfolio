import React from 'react';
import '../styles/SkillsCard.css';
import { Button } from './Button';
import Pdf from '../documents/WebDeveloperResume.pdf'

const SkillsCard = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>Bootstrap</li>
                    <li>Express.js</li>
                    <li>Handlebars</li>
                    <li>Material-ui</li>
                    <li>React.js</li>
                </div>
                <div>
                    <strong>Tools:</strong>
                    <li>Eslint</li>
                    <li>Webpack</li>
                    <li>Chrome Dev</li>
                    <li>Heroku</li>
                    <li>Git & Github</li>
                </div>
                <div>
                    <strong>Databases:</strong>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                </div>
                <div>
                    <strong>Uint Test:</strong>
                    <li>Jest</li>
                    <li>Enzyme</li>
                </div>
            </div>
            <div className="resume">
                    <strong>Resume:</strong>
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        <a href={Pdf} target="_blank" rel="noreferrer" className="resume-link">
                             View Profile
                        </a>
                    </Button>
            
                </div>
        </div>
    )
}

export default SkillsCard;
