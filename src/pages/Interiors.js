import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects';

const Interiors = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const interiorsProjects = projectsData.filter(project => project.category === 'Interiors');
            setProjects(interiorsProjects);
            setLoading(false);
        }, 500);
    }, []);

    const goToProject = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div className="interiors-page">
            {/* Page Header */}
            <section className="hero" style={{ height: 'clamp(400px, 60vh, 700px)' }}>
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
                    alt="Interior Design"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Interior Design</h1>
                    <p className="hero-subtitle">Creating Soulful Interiors</p>
                    <p className="hero-description">
                        We transform interior spaces into environments that reflect your personality,
                        enhance your lifestyle, and evoke a sense of comfort and sophistication.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            Personalized Design
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            Our interior design philosophy is centered around the belief that every space should
                            tell a story. We work closely with our clients to understand their needs and
                            preferences, selecting materials, textures, and furnishings that create a
                            harmonious and welcoming atmosphere.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Portfolio</p>
                        <h2 className="section-title">Interior Projects</h2>
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
                                            onClick={() => goToProject(project._id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img
                                                src={project.images && project.images.length > 0
                                                    ? project.images[0].url
                                                    : 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'}
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
                                        No interior projects available yet
                                    </h3>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Please check back later for our latest interior design projects
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Interiors;
