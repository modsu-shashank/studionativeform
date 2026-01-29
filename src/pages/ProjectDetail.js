import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            const found = projectsData.find(p => p._id === id);
            setProject(found || null);
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) {
        return (
            <div className="loading" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="spinner"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '300' }}>Project Not Found</h2>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem' }}>The project you're looking for doesn't exist or has been moved.</p>
                <Link to="/projects" className="btn btn-primary">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    const primaryImage = project.images.find(img => img.isPrimary) || project.images[0];

    return (
        <div className="project-detail-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '70vh', minHeight: '500px' }}>
                <img
                    src={primaryImage?.url || 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80'}
                    alt={project.title}
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-category" style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        display: 'block',
                        color: 'var(--color-accent)'
                    }}>
                        {project.category} / {project.subcategory}
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>{project.title}</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        {/* Summary & Description */}
                        <div>
                            <div style={{ marginBottom: '3rem' }}>
                                <Link to="/projects" className="link-hover" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '2rem',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    <span>←</span> BACK TO PROJECTS
                                </Link>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '400' }}>Project Overview</h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: '1.8',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '2rem'
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Project Meta Details */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '2rem',
                                padding: '2.5rem',
                                background: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</h4>
                                    <p style={{ fontWeight: '500' }}>{project.location}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Year</h4>
                                    <p style={{ fontWeight: '500' }}>{project.year}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Area</h4>
                                    <p style={{ fontWeight: '500' }}>{project.area}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Status</h4>
                                    <p style={{ fontWeight: '500' }}>{project.status}</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {project.images.map((img, i) => (
                                <div key={i} className="gallery-item" style={{ overflow: 'hidden', borderRadius: '15px' }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption || project.title}
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            transition: 'transform 0.5s ease',
                                            cursor: 'pointer'
                                        }}
                                        className="hover-zoom"
                                    />
                                    {img.caption && (
                                        <p style={{
                                            padding: '1rem 0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--color-text-secondary)',
                                            fontStyle: 'italic',
                                            textAlign: 'center'
                                        }}>
                                            {img.caption}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Next/Prev Navigation could be added here */}
        </div>
    );
};

export default ProjectDetail;
