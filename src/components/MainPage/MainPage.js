// figma community - find design model, in Figma hints in css properties 
// in program pixel perfect lay over this model to do website like in the model 

// to run: npm start

// src/components/MainPage.js 

//Element to appear after some time:

  // const [isHide, setIsHide] = useState(true);
  // setTimeout(() => setIsHide(false), 5000); 
  /* {!isHide ? <div>show after 5 seconds</div> : null} */
  

  // element to appear on scroll: 

  // import { motion } from 'framer-motion'; + 
  // install: npm install framer-motion
  /* 

    <motion.img 
           initial={{opacity: 0, y: 50}} - at the beginning not visible, y - to appear on vertical scroll
           whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} - on scroll appears
           viewport={{once: false, amount: 1}} once: false - several times appear if 
                                                we scroll down/up, amount: 1 - appears 100% 
                                                of an element, .5 - 50%
                                                transition to appear not very quick 

  */ 



import React from 'react';
import { Link } from 'react-router-dom';
import '../MainPage/MainPage.css'
import article1 from '../../assets/images/article1.jpg'; 
import article2 from '../../assets/images/article2.jpg'; 
import article3 from '../../assets/images/article3.jpg'; 
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 

import { motion } from 'framer-motion';

function MainPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
      <div className='video-container'>
        <iframe
          className="introductionVideo"
          src="https://www.youtube.com/embed/BF83GlBo-d0?autoplay=1&mute=1&controls=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Introduction Video"
        ></iframe>
      </div>
      <div className="content">
        <motion.h3
         initial={{opacity: 0, y: 50}} 
          whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.9}}}
          viewport={{once: false, amount: .4}}
        >Welcome to BrightFuture English School!</motion.h3>
        <motion.div
          initial={{opacity: 0, y: 50}} 
          whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.9}}}
          viewport={{once: false, amount: .4}} 
          className='atSchool'>
            <p style={{ textAlign: 'center' }}>
            At <mark>BrightFuture English School</mark>, we are dedicated to empowering students with the language skills
            </p>
            <p style={{ textAlign: 'center' }}>and confidence they need to succeed in an ever-changing world. Our experienced teachers,</p>
            <p style={{ textAlign: 'center' }}>engaging curriculum, and supportive community create the perfect environment for learners of all</p>
            <p style={{ textAlign: 'center' }}>ages to thrive. Join us and embark on a journey towards mastering the English language, achieving</p>
            <p style={{ textAlign: 'center' }}>your goals, and unlocking a brighter future.</p>
        </motion.div>
      </div>
        <div className="content-container"> 
          <h1>Empowering Minds, Enriching Lives</h1>
          <p>At BrightFuture English School, we believe that mastering the English language is a gateway to a</p>
          <p>world of opportunities. Our mission is to provide top-quality English education that not only</p>
          <p>enhances language skills but also builds confidence, critical thinking, and cultural awareness.</p><br></br><br></br>

          <h1>Why Choose Us?</h1>

          <div className='article-cards'>
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

        </div>
      {<Footer />}
      
    </div>
  );
}

export default MainPage;