import React, { useState } from 'react';
import '../PriceListPage/PriceListPage.css'
import '../NavBar/NavBar.css'
import NavBar from '../NavBar/NavBar'; 
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 


function PriceListPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}


        <div class="tariffContainer"> 
        {/* <h2>Price List</h2>  */}
        <div className="card">
          <ul className="price">
            <li className="tariffName">Basic Plan</li> 
            <li className="tariffPrice">$100 / month</li>
            <li>10 lessons</li>
            <li>Interactive exercises</li>
            <li>Brief assessment</li>
            <li>Email support</li>
            <li>Schedule: available slots</li> 
            <li className="tariffConclusion">Ideal for beginners to build foundational skills</li> 
            <button type="button" id="redirect" className="registerButton">Register</button>
          </ul> 

          <ul className="price">
            <li className="tariffName">Pro Plan</li> 
            <li className="tariffPrice">$200 / month</li>
            <li>20 lessons</li>
            <li>Premium content</li>
            <li>Detailed feedback</li>
            <li>Priority email support</li>
            <li>Schedule: flexible</li> 
            <li className="tariffConclusion">Perfect for advancing skills with personalized attention.</li>
            <button type="button" id="redirect" className="registerButton">Register</button>
          </ul> 

          <ul className="price">
            <li className="tariffName">Premium Plan</li> 
            <li className="tariffPrice">$300 / month</li>
            <li>40 lessons</li>
            <li>Full access</li>
            <li>In-depth feedback</li>
            <li>24/7 priority support</li>
            <li>Schedule: fully customizable</li> 
            <li className="tariffConclusion">For those seeking the highest level of personalized instruction</li>
            <button type="button" id="redirect" className="registerButton">Register</button>
          </ul>
        </div>
        </div>
            
            

      </div> 
      {<Footer />}
    </div>
  );
}

export default PriceListPage;