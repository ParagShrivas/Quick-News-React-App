import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light'
    }
  }
  toggleMode = () => {
    // if (this.mode === 'dark') {
    //   this.setState({ mode: 'light' });
    // }
    // else {
    //   this.setState({ mode: 'dark' });
    // }
    this.setState((prevState) => ({
      mode: prevState.mode === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/Quick-News-React-App" element={<News key="Home" category=""/>} />
            <Route exact path="/Quick-News-React-App/business" element={<News key="business" category="business"/>} />
            <Route exact path="/Quick-News-React-App/Entertainment" element={<News key="entertainment" category="entertainment"/>} />
            <Route exact path="/Quick-News-React-App/General" element={<News key="general" category="general"/>} />
            <Route exact path="/Quick-News-React-App/Health" element={<News key="health" category="health"/>} />
            <Route exact path="/Quick-News-React-App/Science" element={<News key="science" category="science"/>} />
            <Route exact path="/Quick-News-React-App/Sports" element={<News key="sports" category="sports"/>} />
            <Route exact path="/Quick-News-React-App/Technology" element={<News key="technology" category="technology"/>} />
            <Route exact path="/Quick-News-React-App/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}
