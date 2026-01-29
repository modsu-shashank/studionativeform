import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects';

const Architecture = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const architectureProjects = projectsData.filter(project => project.category === 'Architecture');
            setProjects(architectureProjects);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="architecture-page">
            {/* Page Header */}
            <section className="hero" style={{ height: 'clamp(400px, 60vh, 700px)' }}>
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
                    alt="Architecture"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Architecture</h1>
                    <p className="hero-subtitle">Designing Spaces That Inspire</p>
                    <p className="hero-description">
                        Our architectural practice focuses on creating innovative, sustainable,
                        and timeless structures that respond to their context and enhance the human experience.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            Architectural Excellence
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            From residential homes to commercial complexes, our architectural designs
                            blend form and function, creating spaces that are both beautiful and practical.
                            We believe in sustainable design that respects the environment while meeting
                            the needs of modern living.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Portfolio</p>
                        <h2 className="section-title">Architecture Projects</h2>
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
                                            onClick={() => openModal(project)}
                                        >
                                            <img
                                                src={project.images && project.images.length > 0
                                                    ? project.images[0].url
                                                    : 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80'}
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
                                        No architecture projects available yet
                                    </h3>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Please check back later for our latest architectural works
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content project-details-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="modal-body">
                            <div className="modal-image-container">
                                <img
                                    src={selectedProject.images && selectedProject.images.length > 0
                                        ? selectedProject.images[0].url
                                        : 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80'}
                                    alt={selectedProject.title}
                                    className="modal-project-image"
                                />
                            </div>

                            <div className="modal-text-container">
                                <div className="modal-header">
                                    <p className="modal-category">{selectedProject.category} · {selectedProject.subcategory}</p>
                                    <h2 className="modal-title">{selectedProject.title}</h2>
                                </div>

                                <div className="modal-description">
                                    <p>{selectedProject.description}</p>
                                </div>

                                <div className="modal-info-grid">
                                    <div className="info-item">
                                        <span className="info-label">Year</span>
                                        <span className="info-value">{selectedProject.year}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">{selectedProject.location}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Area</span>
                                        <span className="info-value">{selectedProject.area}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Client</span>
                                        <span className="info-value">{selectedProject.client}</span>
                                    </div>
                                </div>

                                {selectedProject.tags && (
                                    <div className="modal-tags">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Architecture;
