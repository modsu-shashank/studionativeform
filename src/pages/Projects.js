import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);

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
            setFilteredProjects(
                projects.filter(project => project.category === category)
            );
        }
    };

    return (
        <div className="projects-page">
            {/* Page Header */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px' }}>
                <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80"
                    alt="Projects"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                {/* <div className="hero-content">
                    <h1 className="hero-title">Our Projects</h1>
                    <p className="hero-subtitle">Explore Our Portfolio</p>
                    <p className="hero-description">
                        A comprehensive showcase of our architectural, interior, and landscaping works
                    </p>
                </div> */}
            </section>

            {/* Filter Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-3xl)',
                        flexWrap: 'wrap'
                    }}>
                        {['All', 'Architecture', 'Interiors', 'Landscaping'].map(category => (
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
                                    {filteredProjects.map(project => (
                                        <Link
                                            key={project._id}
                                            to={`/project/${project._id}`}
                                            className="project-card"
                                        >
                                            <img
                                                src={
                                                    project.images?.[0]?.url ||
                                                    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
                                                }
                                                alt={project.title}
                                                className="project-card-image"
                                            />
                                            <div className="project-card-overlay">
                                                <h3 className="project-card-title">
                                                    {project.title}
                                                </h3>
                                                <p className="project-card-category">
                                                    {project.category}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: 'var(--spacing-4xl)' }}>
                                    <h3>No projects found in this category</h3>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Please check back later or explore other categories
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

export default Projects;
