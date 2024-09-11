import React, { useState, useEffect } from 'react';
import '../styles/TimeTablePage.css'; 
import '../styles/NavBar.css'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function TimeTablePage() { 
  // The useState hook is used to store the current time in the component's state 
  // The useEffect hook is used to set up a timer that updates the time every second using setInterval 
  // The time is rendered inside the <p> tag with the Current Local Time: {time}. 
  // The return () => clearInterval(interval); inside the useEffect hook ensures that the interval is 
  // cleared when the component unmounts, avoiding potential memory leaks or performance issues
  
  const [time, setTime] = useState(new Date().toLocaleTimeString()); 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  // const actualTime = new Date(); 
  // actualTime.toLocaleTimeString();


  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}



        
      <h2>Time Table</h2> 
      <p>Current Local Time: {time}</p>
            
      </div> 
      {<Footer />}
    </div>
  );
}

export default TimeTablePage;