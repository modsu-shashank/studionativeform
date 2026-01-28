import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const foundProject = projectsData.find(p => p._id === id);
            setProject(foundProject || null);
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) {
        return (
            <div className="loading" style={{ minHeight: '100vh' }}>
                <div className="spinner"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Project not found</h2>
                    <Link to="/projects" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            {/* Project Header */}
            <section style={{
                paddingTop: 'calc(80px + var(--spacing-3xl))',
                paddingBottom: 'var(--spacing-3xl)',
                backgroundColor: 'var(--color-bg-secondary)'
            }}>
                <div className="container">
                    <Link to="/projects" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)'
                    }}>
                        ← Back to Projects
                    </Link>

                    <div style={{ maxWidth: '900px' }}>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 'var(--font-weight-semibold)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--color-accent)',
                            marginBottom: 'var(--spacing-sm)'
                        }}>
                            {project.category}
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            {project.title}
                        </h1>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            {project.description}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-xl)',
                        marginTop: 'var(--spacing-2xl)',
                        paddingTop: 'var(--spacing-2xl)',
                        borderTop: '1px solid var(--color-border)'
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--font-size-xs)',
                                fontWeight: 'var(--font-weight-semibold)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-light)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Location
                            </p>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>{project.location}</p>
                        </div>

                        <div>
                            <p style={{
                                fontSize: 'var(--font-size-xs)',
                                fontWeight: 'var(--font-weight-semibold)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-light)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Year
                            </p>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>{project.year}</p>
                        </div>

                        {project.area && (
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-xs)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-light)',
                                    marginBottom: 'var(--spacing-xs)'
                                }}>
                                    Area
                                </p>
                                <p style={{ fontSize: 'var(--font-size-base)' }}>{project.area}</p>
                            </div>
                        )}

                        <div>
                            <p style={{
                                fontSize: 'var(--font-size-xs)',
                                fontWeight: 'var(--font-weight-semibold)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-light)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Status
                            </p>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>{project.status}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Images */}
            <section className="section">
                <div className="container">
                    {project.images && project.images.length > 0 ? (
                        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                            {project.images.map((image, index) => (
                                <div key={index} style={{
                                    width: '100%',
                                    maxWidth: '1200px',
                                    margin: '0 auto'
                                }}>
                                    <img
                                        src={image.url}
                                        alt={image.caption || `${project.title} - Image ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {image.caption && (
                                        <p style={{
                                            marginTop: 'var(--spacing-sm)',
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-secondary)',
                                            textAlign: 'center',
                                            fontStyle: 'italic'
                                        }}>
                                            {image.caption}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    maxWidth: '1200px',
                                    height: 'auto',
                                    margin: '0 auto'
                                }}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                        Interested in working with us?
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--spacing-2xl)',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-2xl)'
                    }}>
                        Let's discuss your project and bring your vision to life
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
