import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Primary logo Brown.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Studio Native Form" style={{ height: '50px', width: 'auto' }} />
                </Link>

                <div
                    className="navbar-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/projects" className={isActive('/projects')}>
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className={isActive('/about')}>
                            About Us
                        </Link>
                    </li>


                    <li>
                        <Link to="/contact" className={isActive('/contact')}>
                            Contact Us
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
