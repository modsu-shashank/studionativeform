import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects';

const Landscaping = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const landscapingProjects = projectsData.filter(project => project.category === 'Landscaping');
            setProjects(landscapingProjects);
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
        <div className="landscaping-page">
            {/* Page Header */}
            <section className="hero" style={{ height: '70vh', minHeight: '500px' }}>
                <img
                    src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
                    alt="Landscaping"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Landscaping</h1>
                    <p className="hero-subtitle">Harmony with Nature</p>
                    <p className="hero-description">
                        We design outdoor spaces that are in perfect harmony with their surroundings,
                        creating beautiful and functional landscapes that enhance the beauty of your property.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            Natural Environments
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            Our landscaping designs are inspired by the natural beauty of the environment.
                            We use native plants and sustainable practices to create landscapes that are not only
                            beautiful but also environmentally responsible. Whether it's a small garden or a large
                            estate, we treat every landscape with the same care and attention to detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Portfolio</p>
                        <h2 className="section-title">Landscaping Projects</h2>
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <>
                            {projects.length > 0 ? (
                                <div className="projects-grid">
                                    {projects.map((project) => (
                                        <div
                                            key={project._id}
                                            className="project-card"
                                            onClick={() => openModal(project.images && project.images.length > 0
                                                ? project.images[0].url
                                                : 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80')}
                                        >
                                            <img
                                                src={project.images && project.images.length > 0
                                                    ? project.images[0].url
                                                    : 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80'}
                                                alt={project.title}
                                                className="project-card-image"
                                            />
                                            <div className="project-card-overlay">
                                                <h3 className="project-card-title">{project.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: 'var(--spacing-4xl)' }}>
                                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>
                                        No landscaping projects available yet
                                    </h3>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Please check back later for our latest landscaping works
                                    </p>
                                </div>
                            )}
                        </>
                    )}
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

export default Landscaping;
