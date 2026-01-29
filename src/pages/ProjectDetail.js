import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const found = projectsData.find(p => p._id === id);
            setProject(found || null);
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
            <div style={{ textAlign: 'center', padding: '5rem' }}>
                <h2>Project not found</h2>
                <Link to="/projects" className="btn btn-primary">
                    Back to Projects
                </Link>
            </div>
        );
    }

    // return (
    // <div className="project-detail-page">
    //     <section className="section">
    //         <div className="container">

    //             <Link to="/projects">← Back to Projects</Link>

    //             <h1>{project.title}</h1>
    //             <p>{project.description}</p>

    //             <p>Location: {project.location}</p>
    //             <p>Year: {project.year}</p>
    //             <p>Area: {project.area}</p>
    //             <p>Status: {project.status}</p>

    //             {project.images.map((img, i) => (
    //                 <img
    //                     key={i}
    //                     src={img.url}
    //                     alt={img.caption}
    //                     style={{ width: '100%', marginTop: '2rem' }}
    //                 />
    //             ))}

    //         </div>
    //     </section>
    // </div>
    // );
};

export default ProjectDetail;
