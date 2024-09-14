import React, { useState } from 'react';
import '../UsefulLinksPage/UsefulLinksPage.css'
import '../NavBar/NavBar.css'
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 


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