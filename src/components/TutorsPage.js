// src/components/TutorsPage.js

import React from 'react'; 
import { Link } from 'react-router-dom';
import tutor1 from '../assets/images/tutor1.jpg'; 
import tutor2 from '../assets/images/tutor2.jpg'; 
import tutor3 from '../assets/images/tutor3.jpg'; 
import '../styles/TutorsPage.css'; 
import '../styles/NavBar.css'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 



function TutorsPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}
        
        <div className="imageGallery"> 
          <p><b>Our tutors: </b></p>
          <div className="galleryBlock">
          <Link to="/"><img src={tutor1} alt="Tutor 1" className="tutor" /></Link>
          <p>Tutor 1</p>
          {/* <a target="_blank" href={redirerectedLink}></a>  */} 
          </div> 

          

          <div className="galleryBlock">
          <Link to="/"><img src={tutor2} alt="Tutor 2" className="tutor" /></Link>
          <p>Tutor 3</p>
          </div>

          <div className="galleryBlock">
          <Link to="/"><img src={tutor3} alt="Tutor 3" className="tutor" /></Link>
          <p>Tutor 4</p>
          </div>
          

        </div>

        <div>


        {/* <div className="newsLetter">
            <p>Carousel of photos of tutors</p>  */}
            
            
        </div>
      </div> 
      {<Footer />}
    </div>
  );
}

export default TutorsPage;