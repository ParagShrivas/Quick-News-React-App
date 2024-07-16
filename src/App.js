import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <News/>
          <Routes>
            <Route exact path="/Quick-News-React-App" element={<News />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
