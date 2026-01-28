import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects';

const OurWorks = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setProjects(projectsData);
            setFilteredProjects(projectsData);
            setLoading(false);
        }, 500);
    }, []);

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

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
        <div className="our-works-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '70vh', minHeight: '500px' }}>
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80"
                    alt="Our Works"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Our Works</h1>
                    <p className="hero-subtitle">A Portfolio of Excellence</p>
                    <p className="hero-description">
                        Explore our complete collection of architectural, interior, and landscape projects
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            Creating Spaces That Inspire
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            Each project in our portfolio represents a unique collaboration and a commitment
                            to design excellence. From intimate residential spaces to large-scale commercial
                            developments, we approach every project with the same dedication to quality and innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter and Projects Grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-3xl)',
                        flexWrap: 'wrap'
                    }}>
                        {['All', 'Architecture', 'Interiors', 'Landscaping'].map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilter(category)}
                                className={`btn ${activeFilter === category ? 'btn-primary' : 'btn-outline'}`}
                                style={{ minWidth: '150px' }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <>
                            {filteredProjects.length > 0 ? (
                                <div className="projects-grid">
                                    {filteredProjects.map((project) => (
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
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: 'var(--spacing-4xl)' }}>
                                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>
                                        No projects found
                                    </h3>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Please check back later for our latest works
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-2xl)',
                        textAlign: 'center'
                    }}>
                        <div>
                            <h3 style={{
                                fontSize: 'var(--font-size-4xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>
                                {projects.length}+
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Projects Completed
                            </p>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: 'var(--font-size-4xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>
                                15+
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: 'var(--font-size-4xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>
                                100+
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Happy Clients
                            </p>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: 'var(--font-size-4xl)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)'
                            }}>
                                25+
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Awards Won
                            </p>
                        </div>
                    </div>
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

export default OurWorks;
