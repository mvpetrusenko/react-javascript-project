import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../assets/images/logo.jpg'; 


function Header() {
  return (
    <header className="sticky">
        <div> 
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            BrightFuture English School
          </h1> 
          <h3>Your Ticket to Global Opportunities</h3>
        </div>
      </header> 

  );
}

export default Header;