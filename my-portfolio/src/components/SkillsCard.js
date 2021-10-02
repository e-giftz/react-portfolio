import React from 'react';
import '../styles/SkillsCard.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const SkillsCard = () => {
    return (
        <div className="skills">
            <div className="skills-wrap">
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
                        <strong>Other Backend Proficiencies:</strong>
                        <li>REST APIs</li>
                        <li>Graphql</li>
                        <li>Sequelize</li>
                    </div>
                    <div>
                        <strong>Uint Test:</strong>
                        <li>Jest</li>
                        <li>Enzyme</li>
                    </div>

                </div>
            </div>

            <div className="resume-wrap">
                <h1>Resume:</h1>
                
                <div className="resume-btns">
                    <Link to="/resume">
                        <Button
                            className="btns"
                            buttonStyle="btn--primary"
                            buttonSize="btn--medium"
                        >
                            View Resume
                        </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default SkillsCard;