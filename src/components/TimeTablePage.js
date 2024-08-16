import React, { useState } from 'react';
import '../styles/TimeTablePage.css'; 
import '../styles/NavBar.css'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function TimeTablePage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}



        
        <h2>Time Table</h2> 
            
      </div> 
      {<Footer />}
    </div>
  );
}

export default TimeTablePage;