import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({navLinks}) {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg border-bottom border-body nav-container nav-bg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-fill" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link 
                            to={link.path} 
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                            {link.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

