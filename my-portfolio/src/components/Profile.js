import React from 'react';
import '../styles/Profile.css';
import logo from './logo/Profile-image.jpg';

function Profile() {
    return (
        <>
            <div className="profile">
                <div className="left">
                    {/* <div className="profile-wrap"> */}
                    <div className="hexagon">
                        <div className="shape">
                            <img src={logo}
                                width="350px"
                                height="400px"
                                // style={{ display: "inline-block", border: "1px solid black", borderRadius: "40px " }}
                                alt="avatar"
                            />
                            
                        </div>
                        
                    </div>
                </div>
                <div className="right">
                    <div className="profile-text">
                        <h1>Bio</h1>
                        <p>I am an enthusiastic and dedicated Full Stack Web developer with a number of successful projects bagged.
                            I have background in both manual and software test automation frameworks with a degree in Computing.</p>
                        <br />
                        <p>However, I recently graduated from the Full Stack Web developer bootcamp and have gained extensive knowledge of
                            Front end and backend web development with a number of creative projects worked on. These applications in addition are intuitive and responsive user interactive applications.</p>
                        <br />
                        <p>My attention to detail and problem-solving skills is my best attribute when working and consulting with a
                            client so that there is a good understanding of the project requirements and objectives before embarking on a specific project.
                        </p>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Profile;
