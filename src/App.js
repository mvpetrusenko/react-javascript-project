import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'; 
import AboutPage from './components/AboutPage'; 
import TutorsPage from './components/TutorsPage'; 
import TimeTablePage from './components/TimeTablePage';
import PriceListPage from './components/PriceListPage';
import UsefulLinksPage from './components/UsefulLinksPage';
import ContactsPage from './components/ContactsPage';
import './App.css';  // Ensure you import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/tutors" element={<TutorsPage />} />
          <Route path="/timetable" element={<TimeTablePage />} />
          <Route path="/pricelist" element={<PriceListPage />} />
          <Route path="/usefulLinks" element={<UsefulLinksPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;