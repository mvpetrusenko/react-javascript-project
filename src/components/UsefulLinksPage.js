import React, { useState } from 'react';
import '../styles/UsefulLinksPage.css'; 
import '../styles/NavBar.css'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function UsefulLinksPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}


       
        
        <h2>Useful Links</h2> 
            

        
      </div> 
      {<Footer />}
    </div>
  );
}

export default UsefulLinksPage;