import React, { useState } from 'react';
import '../../App.css';
import { Button } from '../Button';

const  Contact = () => {

    // Create state for holding input data
    const [contactInput, setContactInput] = useState({ name: '', email: '', message: ''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactInput({ ...contactInput, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = contactInput;
      
            if (!response.ok) {
              throw new Error('Something went wrong');
            }
      
        } catch (err) {
            console.error(err);
            
        }
      
        setContactInput({
            name: '',
            email: '',
            message: '',
        });
    };
    return (
        <>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        value={contactInput.name} required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={contactInput.email} required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        className="form-control" 
                        rows="5"
                        placeholder="Type your message here"
                        value={contactInput.message} required>
                        </textarea>
                    </div>
                    <Button
                        disabled={!(contactInput.name && contactInput.email && contactInput.messaqge)}
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        Submit
                    </Button>

                </form>
            </div>
        </>
     
    );
};

export default Contact;