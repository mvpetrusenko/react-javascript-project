// src/components/ContactsPage.js

import React, { useState } from 'react';
import '../styles/ContactsPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { faFacebook, faInstagram, faInstagramSquare, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactsPage() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);

    if (value.length > 9) {
      setMessageError('Message cannot be more than 10 symbols');
    } else {
      setMessageError('');
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
      {<NavBar />}
        <div className="contactsInfo">
          <p>If you have any questions, feel free to contact us!</p>
          <p><b>Phone Number:</b> +1.....</p>
          <p><b>Email:</b> test@gmail.com</p>
          <p><b>Address:</b> St. ....</p> 
          <div className="socialMedias">
            <p><FontAwesomeIcon icon={faFacebook} className="fa-icon"/><a href="https://www.facebook.com/">Facebook Link</a></p>
            <p><FontAwesomeIcon icon={faInstagram} className="fa-icon"/><a href="https://www.instagram.com/">Instagram Link</a></p>
            <p><FontAwesomeIcon icon={faYoutube} className="fa-icon"/><a href="https://www.youtube.com/">YouTube Link</a></p>
          </div>
        </div>
        <div className="contactsFormSection">
          <p>Write your question here:</p>
          <div className="contactsForm">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend><b>Contact Us</b></legend>
                <label htmlFor="firstName">Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Mark"
                  required
                /><br /><br />
                <label htmlFor="email">Your email:</label>
                <div id="emailError" className="validateFormError">{emailError}</div><br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="test@gmail.com"
                  required
                /><br /><br />
                <div id="messageError" className="validateFormError">{messageError}</div><br />
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows="10"
                  cols="30"
                  placeholder=" Write your message here... "
                  maxLength="10"
                  required
                ></textarea><br /><br />
                <button type="submit" id="send">Send</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div> 
      {<Footer />}
    </div>
  );
}

export default ContactsPage;