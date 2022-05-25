import React from 'react';
import '../styles/ResumeCard.css';
import Pdf from '../documents/SoftwareDeveloperResume.pdf';


function ResumeCard() {
    return (
        <>
            <div className="resume">
                <div className="embed-wrapper">
                    <h1>My Resume</h1>
                    <iframe 
                        src="https://drive.google.com/file/d/1ertgiUPTyA-eq11fvTm01B6rhN2kDFjT/preview " 
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