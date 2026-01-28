import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

const Home = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const featured = projectsData.filter(p => p.featured).slice(0, 3);
            setFeaturedProjects(featured);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
                    alt="Modern Architecture"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Studio Native Form</h1>
                    <p className="hero-subtitle">Architecture · Interiors · Landscaping</p>
                    <p className="hero-description">
                        Crafting spaces that inspire, innovate, and endure.
                        We blend contemporary design with timeless elegance to create
                        environments that resonate with your vision.
                    </p>
                    <div className="hero-cta">
                        <Link to="/our-works" className="btn btn-primary">Explore Our Work</Link>
                        <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">What We Do</p>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">
                            From concept to completion, we offer comprehensive design solutions
                            that transform spaces into extraordinary experiences.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                alt="Architecture"
                                className="service-card-image"
                            />
                            <div className="service-card-overlay">
                                <h3 className="service-card-title">Architecture</h3>
                                <p className="service-card-description">
                                    Innovative architectural solutions that balance aesthetics,
                                    functionality, and sustainability.
                                </p>
                                <Link to="/architecture" className="service-card-link">
                                    View Projects
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                                alt="Interior Design"
                                className="service-card-image"
                            />
                            <div className="service-card-overlay">
                                <h3 className="service-card-title">Interior Design</h3>
                                <p className="service-card-description">
                                    Thoughtfully curated interiors that reflect your personality
                                    and enhance daily living.
                                </p>
                                <Link to="/interiors" className="service-card-link">
                                    View Projects
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <img
                                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
                                alt="Landscaping"
                                className="service-card-image"
                            />
                            <div className="service-card-overlay">
                                <h3 className="service-card-title">Landscaping</h3>
                                <p className="service-card-description">
                                    Harmonious outdoor spaces that seamlessly integrate with
                                    architecture and nature.
                                </p>
                                <Link to="/landscaping" className="service-card-link">
                                    View Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Portfolio</p>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-description">
                            A curated selection of our most distinguished works,
                            showcasing our commitment to design excellence.
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="projects-grid">
                            {featuredProjects.length > 0 ? (
                                featuredProjects.map((project) => (
                                    <div
                                        key={project._id}
                                        className="project-card"
                                        onClick={() => openModal(project.images && project.images.length > 0
                                            ? project.images[0].url
                                            : 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80')}
                                    >
                                        <img
                                            src={project.images && project.images.length > 0
                                                ? project.images[0].url
                                                : 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
                                            }
                                            alt={project.title}
                                            className="project-card-image"
                                        />
                                        <div className="project-card-overlay">
                                            <h3 className="project-card-title">{project.title}</h3>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        No featured projects available yet. Check back soon!
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
                        <Link to="/our-works" className="btn btn-outline">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Design Philosophy Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Our Philosophy</p>
                        <h2 className="section-title">Design That Matters</h2>
                        <p className="section-description">
                            We believe great design is born from understanding context,
                            respecting heritage, and embracing innovation. Every project
                            is an opportunity to create something meaningful and enduring.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-xl)',
                        marginTop: 'var(--spacing-3xl)'
                    }}>
                        <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-3xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>01</h3>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Listen</h4>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Understanding your vision, needs, and aspirations is where every great project begins.
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-3xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>02</h3>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Create</h4>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Translating ideas into thoughtful designs that balance beauty, function, and sustainability.
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-3xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>03</h3>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Deliver</h4>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Executing with precision and care to bring your vision to life with excellence.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
                        <Link to="/design-approach" className="btn btn-outline">
                            Learn Our Process
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="section" style={{
                backgroundColor: 'var(--color-bg-dark)',
                color: 'var(--color-text-white)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-text-white)'
                    }}>
                        Ready to Start Your Project?
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        marginBottom: 'var(--spacing-2xl)',
                        maxWidth: '700px',
                        margin: '0 auto var(--spacing-2xl)',
                        color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                        Let's collaborate to create spaces that inspire and endure.
                        Get in touch with our team today.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <img src={selectedImage} alt="Full view" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
