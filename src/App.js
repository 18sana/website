import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          
        </header>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
          <Route path="/blog" element={<h2>Blog Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
