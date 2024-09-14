// figma community - find design model, in Figma hints in css properties 
// in program pixel perfect lay over this model to do website like in the model

// src/components/MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../MainPage/MainPage.css'
import article1 from '../../assets/images/article1.jpg'; 
import article2 from '../../assets/images/article2.jpg'; 
import article3 from '../../assets/images/article3.jpg'; 
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
      <main> 
      <header className="video-header">
      <iframe
          className="introductionVideo"
          src="https://www.youtube.com/embed/BF83GlBo-d0?autoplay=1&mute=1&controls=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Introduction Video"
        ></iframe>
        <h1 className="header-title">Trusted by Students for Over 20 Years, Our Expert Tutors are Here to Help</h1>
      </header>

        <h3>Welcome to BrightFuture English School!</h3>
        <div>
          <p style={{ textAlign: 'center' }}>
            At <mark>BrightFuture English School</mark>, we are dedicated to empowering students with the language skills
          </p>
          <p style={{ textAlign: 'center' }}>and confidence they need to succeed in an ever-changing world. Our experienced teachers,</p>
          <p style={{ textAlign: 'center' }}>engaging curriculum, and supportive community create the perfect environment for learners of all</p>
          <p style={{ textAlign: 'center' }}>ages to thrive. Join us and embark on a journey towards mastering the English language, achieving</p>
          <p style={{ textAlign: 'center' }}>your goals, and unlocking a brighter future.</p>
        </div>
      </main>
      {/* <section>
        <div className="content-container"> 

          <section className="article-content">
            
              <h1>Empowering Minds, Enriching Lives</h1>
              <p>At BrightFuture English School, we believe that mastering the English language is a gateway to a</p>
              <p>world of opportunities. Our mission is to provide top-quality English education that not only</p>
              <p>enhances language skills but also builds confidence, critical thinking, and cultural awareness.</p>

              <div className="why-choose-us">
              <h1>Why Choose Us?</h1>

              <div className="article-card">
                <Link to="/"><img src={article1} alt="Article 1" className="article-image" /></Link>
                <div class="container">
                <p><b>Experienced Educators:</b> Our team of passionate and experienced teachers is dedicated to helping</p>
                <p>each student reach their full potential. With years of expertise and a commitment to continuous</p>
                <p>learning, our educators employ the latest teaching methods to make learning English engaging and</p>
                <p>effective</p>
                </div>
              </div> 

              <div className="article-card">
                <Link to="/"><img src={article2} alt="Article 2" className="article-image" /></Link>
                <div class="container">
                <p><b>Flexible Learning Options:</b> We understand the busy schedules of our students, which is why we offer</p>
                <p>flexible learning options. Choose from in-person classes, online courses, or a hybrid model that</p>
                <p>combines the best of both worlds. Our online platform is user-friendly and provides access to a</p>
                <p>wealth of resources, including video lessons, interactive exercises, and forums.</p> 
                </div>
              </div> 

              <div className="article-card">
                <Link to="/"><img src={article3} alt="Article 3" className="article-image" /></Link>
                <div class="container">
                <p><b>Comprehensive Curriculum:</b> Our curriculum is designed to cater to students of all levels, from </p>
                <p>beginners to advanced learners. We offer a range of courses including General English, Business </p>
                <p>English, Exam Preparation (IELTS, TOEFL), and Conversational English. Each program is carefully</p>
                <p>crafted to meet the diverse needs of our students.</p>
                </div>
              </div>
              


              </div>
              
              <h1>Join Us Today</h1>
              <p>Whether you are looking to improve your English for academic purposes, career advancement, or</p>
              <p>personal growth, BrightFuture English School is here to guide you every step of the way. Join our</p>
              <p>vibrant community of learners and take the first step towards achieving your language goals.</p>
          </section>
        </div>
      </section>  */}
      {<Footer />}
      
    </div>
  );
}

export default MainPage;