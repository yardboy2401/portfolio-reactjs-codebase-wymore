import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section className="container contactContainerForm">
        <h2 className="top-title">Contact Form</h2>
        <hr></hr>
        <form className="contact-form" id="contact-form">
            <div className="mt-5 contact-name" >
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div className="mt-5 contact-email" >
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="mt-5 contact-message" >
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div className="mt-5 mb-5" >
            <button data-testid='button' className="btn btn-outline-dark " type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;