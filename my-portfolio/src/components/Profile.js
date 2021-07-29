import React from 'react';
import '../styles/Profile.css';

function Profile() {
    return (
        <div className="profile-container">
        <div className="profile-img" style={{ backgroundImage: "url(/photo-avatar.png)" }}>
        </div>  
        <h1>About Me</h1> 
        <p>I am a creative web developer with </p>     
        </div>
    )
}

export default Profile;
