// src/components/NavBar.js 

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool, faPersonChalkboard, faTable, faMoneyCheckDollar, faExternalLink, faAddressBook } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} className="fa-icon"/> Home
          </NavLink>
        </li>
        <li className="activeTab"><NavLink to="/about" activeClassName="active"><FontAwesomeIcon icon={faSchool} className="fa-icon"/>About School</NavLink></li> 
        <li><NavLink to="/tutors"><FontAwesomeIcon icon={faPersonChalkboard} className="fa-icon"/>Our Tutors</NavLink></li> 
        <li><NavLink to="/timetable"><FontAwesomeIcon icon={faTable} className="fa-icon"/>Time Table</NavLink></li>
        <li><NavLink to="/pricelist"><FontAwesomeIcon icon={faMoneyCheckDollar} className="fa-icon"/>Price list</NavLink></li> 
        <li><NavLink to="/usefulLinks"><FontAwesomeIcon icon={faExternalLink} className="fa-icon"/>Useful links</NavLink></li>
        <li><NavLink to="/contacts"><FontAwesomeIcon icon={faAddressBook} className="fa-icon"/>Contacts</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;