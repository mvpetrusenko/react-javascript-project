// src/components/TutorsPage.js

import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../TutorsPage/TutorsPage.css'
import '../NavBar/NavBar.css' 
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import tutor1 from '../../assets/images/tutor1.jpg'; 
import tutor2 from '../../assets/images/tutor2.jpg'; 
import tutor3 from '../../assets/images/tutor3.jpg'; 
import tutor4 from '../../assets/images/tutor4.jpg'; 
import tutor5 from '../../assets/images/tutor5.jpg'; 
import tutor6 from '../../assets/images/tutor6.jpg'; 




function TutorsPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}
        
        <div className="imageGallery">
        <div className="galleryBlock">
          <Link to="/"><img src={tutor1} alt="Tutor 1" className="tutor" /></Link>
          <section>
            <p><b>Mrs. Smith</b></p><br></br>
            <p>Common English classes</p>
            <p>5 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
          {/* <a target="_blank" href={redirerectedLink}></a>  */} 
          </div> 

          

          <div className="galleryBlock">
          <Link to="/"><img src={tutor2} alt="Tutor 2" className="tutor" /></Link>
          <section>
            <p><b>Mrs. Brown</b></p><br></br>
            <p>Business English classes</p>
            <p>3 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
          </div>

          <div className="galleryBlock">
          <Link to="/"><img src={tutor3} alt="Tutor 3" className="tutor" /></Link>
          <section>
            <p><b>Mrs. Swan</b></p><br></br>
            <p>Conversational English classes</p>
            <p>1 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
          </div>
          
          <div className="galleryBlock">
          <Link to="/"><img src={tutor4} alt="Tutor 4" className="tutor" /></Link>
          <section>
            <p><b>Mr. Black</b></p><br></br>
            <p>English classes for teens</p>
            <p>4 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
          </div>

          <div className="galleryBlock">
          <Link to="/"><img src={tutor5} alt="Tutor 5" className="tutor" /></Link>
          <section>
            <p><b>Mrs. Fox</b></p><br></br>
            <p>English classes for traveling</p>
            <p>2 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
          </div>

          <div className="galleryBlock">
          <Link to="/"><img src={tutor6} alt="Tutor 6" className="tutor" /></Link>
          <section>
            <p><b>Mrs. Sunshine</b></p><br></br>
            <p>English classes for kids</p>
            <p>7 years of experience</p>
            <p>TOEFL, CELTA</p>
          </section>
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