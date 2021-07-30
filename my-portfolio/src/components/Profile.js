import React from 'react';
import '../styles/Profile.css';
import logo from './logo/Image-profile.jpg';

function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-wrapper">
                    <div className="logo-wrap">
                        <img src={logo}
                            width="150px"
                            height="150px"
                            style={{ display: "inline", border: "1px solid black", borderRadius: "5px ! important" }}
                            alt="avatar"
                        />
                    </div>

                    <h1>About Me</h1>
                    <p>I am enthusiastic and dedicated Web developer with a number of successful projects bagged. 
                        I have background in both manual and software automation testing with a degree in Computing.</p> 
                    <p>However, I recently graduated from the Full Stack Web developer bootcamp and have gained extensive knowledge of 
                        Front end and backend web development with a number of creative Apart from being creative and intuitive responsive user interactive applications.</p>
                    <p>My attention to detail and problem-solving skills is my best attribute when working and consulting with a 
                        client so that there is a good understanding of the project requirements and objectives before embarking on a specific project. 
                    </p>

                </div>

            </div>

        
        </>
    )
}

export default Profile;
