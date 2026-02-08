import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

const Home = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const featured = projectsData.filter(p => p.featured).slice(0, 7);
            setFeaturedProjects(featured);
            setLoading(false);
        }, 500);
    }, []);



    return (
        <div className="home-page">
            {/* Top Text Section */}
            <section className="home-top-text">
                <div className="container">
                    <div className="top-text-content">
                        <h2 className="top-heading">TIMELESS SPACES | THOUGHTFULLY | DESIGNED</h2>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="hero-cinematic">
                {/* Intro Splash Effect */}
                <div className="hero-intro-splash">
                    <div className="intro-image-wrapper">
                        <img
                            src="https://imgs.search.brave.com/PhLSkgUaoJCn3DlKwW44gltM_9LiBC63005StRY0H2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jZ3RyYWRlci5j/b20vdmFyaWFudHMv/ZWZieDZpcWt5dG4z/N3VheHo5bGYxaWMz/bjBkeC83OGFkZDlj/MmYwMmZiZDczYTQz/ZmZiMzk3MGJlMzg2/ODNjNWYxNWVmZjZj/YTg0OWRjNzhjNjQ0/ZjRmZjljZTFiLzli/MDlkY2ViYTRiY2Zi/ZThlYjJjY2FkN2Ix/YjMxYzY2LndlYnA"
                            alt="Studio Native Form Intro"
                            className="intro-image"
                        />
                    </div>
                </div>

                {/* Horizontal Sliding Gallery */}
                <div className="hero-slider-container">
                    <div className="hero-slider-track">
                        {/* Duplicate slides for seamless infinite scroll */}
                        {[
                            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
                            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
                            "https://imgs.search.brave.com/PhLSkgUaoJCn3DlKwW44gltM_9LiBC63005StRY0H2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jZ3RyYWRlci5j/b20vdmFyaWFudHMv/ZWZieDZpcWt5dG4z/N3VheHo5bGYxaWMz/bjBkeC83OGFkZDlj/MmYwMmZiZDczYTQz/ZmZiMzk3MGJlMzg2/ODNjNWYxNWVmZjZj/YTg0OWRjNzhjNjQ0/ZjRmZjljZTFiLzli/MDlkY2ViYTRiY2Zi/ZThlYjJjY2FkN2Ix/YjMxYzY2LndlYnA",
                            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
                            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
                            "https://imgs.search.brave.com/PhLSkgUaoJCn3DlKwW44gltM_9LiBC63005StRY0H2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jZ3RyYWRlci5j/b20vdmFyaWFudHMv/ZWZieDZpcWt5dG4z/N3VheHo5bGYxaWMz/bjBkeC83OGFkZDlj/MmYwMmZiZDczYTQz/ZmZiMzk3MGJlMzg2/ODNjNWYxNWVmZjZj/YTg0OWRjNzhjNjQ0/ZjRmZjljZTFiLzli/MDlkY2ViYTRiY2Zi/ZThlYjJjY2FkN2Ix/YjMxYzY2LndlYnA"
                        ].map((url, idx) => (
                            <div className="hero-slide" key={idx}>
                                <img src={url} alt={`Architectural Interior ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section">
                <div className="container">
                    {/* <div className="section-header">
                        <p className="section-label">What We Do</p>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">
                            From concept to completion, we offer comprehensive design solutions
                            that transform spaces into extraordinary experiences.
                        </p>
                    </div> */}

                    <div className="services-grid">
                        <div className="service-card">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                alt="Architecture"
                                className="service-card-image"
                            />
                            <div className="service-card-overlay">
                                <h3 className="service-card-title">Architecture</h3>
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
                    {/* <div className="section-header">
                        <p className="section-label">Portfolio</p>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-description">
                            A curated selection of our most distinguished works,
                            showcasing our commitment to design excellence.
                        </p>
                    </div> */}

                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="featured-grid">
                            {featuredProjects.length > 0 ? (
                                featuredProjects.map((project) => (
                                    <Link
                                        key={project._id}
                                        to={`/project/${project._id}`}
                                        className="project-card"
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
                                            <p className="project-card-category">{project.category}</p>
                                        </div>
                                    </Link>
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
                        <Link to="/projects" className="btn btn-outline">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default Home;
