// src/components/AboutPage.js

import React, { useState } from 'react'; 
import '../AboutPage/AboutPage.css'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js'; 
import Header from '../Header/Header.js'; 
import Footer from '../Footer/Footer.js'; 
import { ways } from '../../data/data.js';


// we read difference of content from object props. Props can be renamed as you wish 
// props is an object which contains keys (title, description) 
// we can also can move ContentElement function in the other component and import it here
function ContentElement(props) {
  return (
    <li>
      <h4>{props.title}</h4>
      {props.description.map((paragraph, index) => ( //In the ContentElement component, the description is mapped to render each paragraph inside a <p> element.
        <p key={index}>{paragraph}</p> // The key={index} ensures that each paragraph has a unique key for React's rendering system.
      ))}
    </li>
  )
}

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
        
          <ul> 
            <ContentElement {...ways[0]} />
            <ContentElement {...ways[1]} />

            <h4>Our Programs</h4> 
            <p>We offer a diverse range of programs to accommodate different learning styles and schedules:</p> 
            <ul>
                <li><b>General English Courses:</b>Improve your reading, writing, speaking, and listening skills with our comprehensive courses.</li><br></br>
                <li><b>Business English:</b>Enhance your professional communication and presentation skills for the workplace.</li><br></br>
                <li><b>Kids and Teens Programs:</b>Fun and interactive classes designed to help younger learners build a strong foundation in English.</li>
            </ul>

            <ContentElement {...ways[1]} />

          </ul>
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