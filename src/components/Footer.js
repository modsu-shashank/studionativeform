import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Primary logo Light cream.png';
import { Icon } from './Icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Studio Native Form" style={{ height: '60px', width: 'auto' }} />
                        </Link>
                        <p className="footer-description">
                            <br />
                            TIMELESS SPACES.
                            <br />
                            THOUGHTFULLY
                            <br />
                            DESIGNED.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/architecture">Architecture</Link></li>
                            <li><Link to="/interiors">Interior Design</Link></li>
                            <li><Link to="/landscaping">Landscaping</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section footer-contact">
                        <h4>Contact</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, color: 'var(--color-bg-primary)' }}>
                            <Icon.MapPin style={{ minWidth: '18px' }} />
                            <span>Banjara Hills, Hyderabad, India</span>
                        </div>
                        <a style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, color: 'var(--color-bg-primary)', textDecoration: 'none' }} href="mailto:studionativeform@gmail.com">
                            <Icon.Mail style={{ minWidth: '18px' }} />
                            <span>studionativeform@gmail.com</span>
                        </a>
                        <a style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, color: 'var(--color-bg-primary)', textDecoration: 'none' }} href="tel:+916301768120">
                            <Icon.Phone style={{ minWidth: '18px' }} />
                            <span>+91 63017 68120</span>
                        </a>
                        <a style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--color-bg-primary)', textDecoration: 'none' }} href="https://www.instagram.com/studionativeform/" target="_blank" rel="noreferrer">
                            <Icon.Instagram style={{ minWidth: '18px' }} />
                            <span>@studionativeform</span>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Studio Native Form (SNF). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
