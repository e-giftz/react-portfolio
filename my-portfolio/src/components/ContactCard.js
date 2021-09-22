import React from 'react';
import '../styles/ContactCard.css';

const  ContactCard = () => {
    return (
        <>
            <div className="contact">
                <h1>Contact Me</h1>

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359536.145044805!2d-76.08043828558436!3d45.25029749259219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1631770334065!5m2!1sen!2sca" 
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>

                <h4>Phone</h4>
                <p>613 252 4970</p>

                <h4>Email</h4>
                <p>n.eze@hotmail.co.uk</p>

                <h4>Address</h4>
                <p>Ottawa, ON K4A 1E5</p>

            </div>

        </>

    );
};

export default ContactCard;