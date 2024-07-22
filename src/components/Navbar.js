import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Quick-News-React-App">QuickNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Quick-News-React-App">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Quick-News-React-App/about">About</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/General">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Quick-News-React-App/Science">Science</Link></li>
                        </ul>
                        <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={this.props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
