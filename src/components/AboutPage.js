// src/components/AboutPage.js

import React, { useState } from 'react';
import '../styles/AboutPage.css'; 
import '../styles/NavBar.css'; 
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function AboutPage() { 
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [subscribe, setSubscribe] = useState('');


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


  const handleSubscribe = (event) => { 
    // event.preventDefault(); // Prevents the default form submission behavior
    const value = event.target.value; 
    setSubscribe(value); 
    alert('You are subscribed!\nCheck your emailbox for our subscription letter'); 

  }
 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {/* <h1><p>About BrightFuture English School</p></h1>  */} 
        {<NavBar />}
        <div className="aboutContent"> 
        
            <h4>Our Mission</h4> 
            <p>At BrightFuture English School, our mission is to empower students of all ages with the language skills and confidence needed to succeed in a globalized world.</p>
            <p>We are dedicated to providing a high-quality English education that goes beyond traditional language learning.</p>
            <p>Our focus is on developing comprehensive language skills, fostering critical thinking</p>
            <p>and building cultural awareness.</p>
         

            <h4>Our Team</h4>
            <p>Our team of highly qualified and passionate educators brings years of experience and expertise to the classroom.</p>
            <p>Each teacher is committed to creating engaging and interactive lessons that inspire and motivate students.</p>
            <p>We emphasize continuous professional development to stay current with the latest teaching methods and technologies.</p> 


            <h4>Our Programs</h4> 
            <p>We offer a diverse range of programs to accommodate different learning styles and schedules:</p> 
            <ul>
                <li><b>General English Courses:</b>Improve your reading, writing, speaking, and listening skills with our comprehensive courses.</li><br></br>
                <li><b>Business English:</b>Enhance your professional communication and presentation skills for the workplace.</li><br></br>
                <li><b>Kids and Teens Programs:</b>Fun and interactive classes designed to help younger learners build a strong foundation in English.</li>
            </ul>

            <h4>Join Us</h4> 
            <p>We invite you to join our vibrant community of learners and take the first step towards mastering the English language. </p>
            <p>At BrightFuture English School, you’ll not only gain valuable language skills but also become part of a supportive network</p>
            <p>that encourages personal and academic growth.</p><br></br>
            <p>For more information about our programs and how to get started, please <Link to="/contacts">contact us</Link> or visit our registration page.</p>
            <p>We look forward to welcoming you to BrightFuture English School!</p>
        </div> 
        <div className="newsLetter">
            <p>Subscribe to our news letters to get more up-to-date info!</p> 
            <div className="subscriptionForm">
            <form>
              <fieldset>
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
                <button type="subscribe" id="send" value={subscribe} onClick={handleSubscribe}>Subscribe</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div> 
      {<Footer />}
    </div>
  );
}

export default AboutPage;