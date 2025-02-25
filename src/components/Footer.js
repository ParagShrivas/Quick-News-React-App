import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-body-tertiary">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>
                
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="/Quick-News-React-App"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="/Quick-News-React-App"><i className="fa-brands fa-twitter"></i></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="/Quick-News-React-App"><i className="fa-brands fa-facebook"></i></a></li>
                </ul>
                
            </footer>
        )
    }
}
