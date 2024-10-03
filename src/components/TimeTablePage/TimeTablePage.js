// TimeTablePage/TimeTablePage.js

import React, { useState, useEffect } from 'react';
import '../TimeTablePage/TimeTablePage.css' 
import '../NavBar/NavBar.css'
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import Button from '../Button/Button';


function TimeTablePage() { 
  // The useState hook is used to store the current time in the component's state 
  // The useEffect hook is used to set up a timer that updates the time every second using setInterval 
  // The time is rendered inside the <p> tag with the Current Local Time: {time}. 
  // The return () => clearInterval(interval); inside the useEffect hook ensures that the interval is 
  // cleared when the component unmounts, avoiding potential memory leaks or performance issues


  const [time, setTime] = useState(new Date().toLocaleTimeString()); 
  const [content, setContent] = useState('Click the button'); 


  // output: button has been clicked This is click 1 (handleClick('This is click 1'))
  function handleClick(type) {
  // if button has been click type is shown 
  // not! content = type
    setContent(type);
    

}
  
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
      <div> 
      <section>

        {/* () => closure (function) and call this function with fixed parameter (This is click 1) */}
        <Button buttonClicked={() => handleClick('This is click 1')}>Click1</Button> 
        <Button buttonClicked={() => handleClick('This is click 2')}>Click2</Button> 
        <Button buttonClicked={() => handleClick('This is click 3')}>Click3</Button> 

        <p>{content}</p>
      </section>
      </div>
      {<Footer />}
    </div>
  );
}

export default TimeTablePage;