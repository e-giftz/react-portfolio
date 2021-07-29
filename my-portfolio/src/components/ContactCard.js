import React, { useState } from 'react';
import '../styles/ContactCard.css';
import { Button } from './Button';
import { validateEmail } from './utils/helpers';

const  ContactCard = () => {

    // Create state for holding input data
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {

        // Getting the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'contactName') {
            setContactName(inputValue);
        } else if (inputType === 'contactEmail') {
            setContactEmail(inputValue);
        } else {
            setContactMessage(inputValue);
        }
        
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Validating input fields
        if (!validateEmail(contactEmail)) {
            setErrorMessage('Email entered is invalid');
            
            return;
        }
        if (!contactName || !contactMessage) {
            setErrorMessage(
              `Please enter your name and message details : ${contactName}`
            );
            return;
        }
        alert(`Thanks for your message ${contactName}`);

        // clear the inputs
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        setErrorMessage('');
      
    };
    return (
        <>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        name="contactName"
                        value={contactName} required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input 
                        type="email"
                        name="contactEmail" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        value={contactEmail} required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="contactMessage"
                        className="form-control" 
                        rows="5"
                        placeholder="Type your message here"
                        onChange={handleInputChange}
                        value={contactMessage} required>
                        </textarea>
                    </div>
                    <Button
                        
                        onClick={handleFormSubmit}
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        Submit
                    </Button>

                </form>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            
        </>
     
    );
};

export default ContactCard;