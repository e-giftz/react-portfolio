import React from 'react';
import '../styles/ResumeCard.css';
// import { Link } from 'react-router-dom';
import Pdf from '../documents/WebDeveloperResume.pdf';


function ResumeCard() {
    return (
        <>
            <div className="resume">
                <div className="embed-wrapper">
                    <h1>My Resume</h1>
                    <iframe 
                        src="https://drive.google.com/file/d/1eSs4B81jdSwwcIZdTYBVueDq1hE6Q3UR/preview" 
                        title="file" 
                        width="640" 
                        height="650" 
                        allow="autoplay">

                    </iframe>
                </div>
                <div className="display-wrapper">
                    <strong>
                        <a href={Pdf} target="_blank" rel="noreferrer" className="resume-link">
                            Click to download resume:
                        </a>
                    </strong>

                </div>
        
            </div>
        </>
        
    )
}

export default ResumeCard;
