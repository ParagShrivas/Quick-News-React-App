import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const [mode, setMode] = useState('light');
  const api_key = process.env.REACT_APP_NEWS_API_KEY;

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/Quick-News-React-App" element={<News key="Home" category="" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/business" element={<News key="business" category="business" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/Entertainment" element={<News key="entertainment" category="entertainment" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/General" element={<News key="general" category="general" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/Health" element={<News key="health" category="health" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/Science" element={<News key="science" category="science" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/Sports" element={<News key="sports" category="sports" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/Technology" element={<News key="technology" category="technology" API_key={api_key} />} />
          <Route exact path="/Quick-News-React-App/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
