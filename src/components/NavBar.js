// src/components/NavBar.js 

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool, faPersonChalkboard, faTable, faMoneyCheckDollar, faExternalLink, faAddressBook } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="fa-icon"/> Home
          </Link>
        </li>
        <li><Link to="/about"><FontAwesomeIcon icon={faSchool} className="fa-icon"/>About School</Link></li> 
        <li><Link to="/tutors"><FontAwesomeIcon icon={faPersonChalkboard} className="fa-icon"/>Our Tutors</Link></li> 
        <li><Link to="/timetable"><FontAwesomeIcon icon={faTable} className="fa-icon"/>Time Table</Link></li>
        <li><Link to="/pricelist"><FontAwesomeIcon icon={faMoneyCheckDollar} className="fa-icon"/>Price list</Link></li> 
        <li><Link to="/usefulLinks"><FontAwesomeIcon icon={faExternalLink} className="fa-icon"/>Useful links</Link></li>
        <li><Link to="/contacts"><FontAwesomeIcon icon={faAddressBook} className="fa-icon"/>Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;