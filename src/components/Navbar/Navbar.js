import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__brand">
                <div className="navbar__logo"><img src="/images/GitLab.svg" alt="logo" /></div>
            </div>
            <div className="navbar__links">
                <a className="navbar__link" href="#landing">Home</a>
                <a className="navbar__link" href="#work">Work</a>
                <a className="navbar__link" href="#contact-form">Hire Me</a>
            </div>
        </div>
    )
}

export default Navbar
