import React from 'react';
import '../styles/Profile.css';
import logo from './logo/photo-avatar.png';

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
                    <p>I am a creative web developer with </p>

                </div>

            </div>

        
        </>
    )
}

export default Profile;
