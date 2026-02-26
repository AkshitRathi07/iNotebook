import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    }

    const userName = localStorage.getItem('userName');

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-light shadow-sm'} sticky-top`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">iNotebook</Link>
                
                {/* --- YEH BUTTON ADD KIYA HAI MOBILE KE LIYE --- */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* ------------------------------------------- */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" type="checkbox" onChange={toggleTheme} checked={isDarkMode} style={{ cursor: 'pointer' }} />
                            <label className={`form-check-label ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                                {isDarkMode ? "🌙" : "☀️"}
                            </label>
                        </div>

                        {!localStorage.getItem('token') ? (
                            <div className="d-flex">
                                <Link className="btn btn-outline-primary mx-1" to="/login" role="button">Login</Link>
                                <Link className="btn btn-outline-info mx-1" to="/signup" role="button">Sign Up</Link>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center">
                                <span className={`mx-3 fw-bold ${isDarkMode ? 'text-info' : 'text-primary'}`}>
                                    Welcome {userName ? userName.charAt(0).toUpperCase() + userName.slice(1): "User"} 
                                </span>
                                <button onClick={handleLogout} className='btn btn-outline-danger btn-sm'>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;