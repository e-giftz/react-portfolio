import React from 'react';
import '../styles/ResumeCard.css';
// import { Link } from 'react-router-dom';
import Pdf from '../documents/WebDeveloperResume.pdf'

function ResumeCard() {
    return (
        <>
            <div className="resume-container">
                <div className="resume-column">
                    <h1>Resume</h1>
                    <h2 className="resume-group">Download my &nbsp;
                        <a href={Pdf} target="_blank" rel="noreferrer" className="resume-link">
                             Resume
                        </a>
                    </h2>
                    <h3>Front-end Proficiencies</h3>
                    <ul className="list-group">
                        <li className="list-group-item">HTML/CSS</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">JQuery</li>
                        <li className="list-group-item">Responsive Design</li>
                        <li className="list-group-item">ReactJS</li>
                    </ul>
                    <h3>Back-end Proficiencies</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Express</li>
                        <li className="list-group-item">Databases - MongoDB, MySQL, NoSQL</li>
                        <li className="list-group-item">Sequelize</li>
                        <li className="list-group-item">REST APIs</li>
                        <li className="list-group-item">Graphql</li>
                    </ul>
                </div>

            </div>
        </>
        
    )
}

export default ResumeCard;
