import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LecturePage from "./LecturePage";
import Chatbot from "./Chatbot";
import './App.css'; // Import the styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/">Lecture Information</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<LecturePage />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
