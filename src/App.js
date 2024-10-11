import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className='main-body'>
        <div className='App'>
          {/* Globall components */}
          <Sidebar />
          <Navbar />

          {/* This div holds the page content to the right of the sidebar */}
          <div className='content'>
            <Routes>
              {/* Define routes for each component/page */}
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
