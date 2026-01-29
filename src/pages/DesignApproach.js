import React from 'react';
import { Link } from 'react-router-dom';

const DesignApproach = () => {
    return (
        <div className="design-approach-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px' }}>
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
                    alt="Design Approach"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Design Approach</h1>
                    <p className="hero-subtitle">Our Process</p>
                    <p className="hero-description">
                        A systematic, collaborative journey from concept to completion
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            How We Work
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--line-height-relaxed)'
                        }}>
                            We begin by observing people, place, and purpose. Understanding how spaces are used, experienced and evolve over time.
                            <br />
                            Context, function and movement influence each decision, allowing ideas to develop through a calm and considered process.
                            <br />
                            Clarity and restraint guide the work, ensuring every space remains relevant beyond trends.
                            <br />
                            The result is architecture that feels intuitive and balanced. Spaces shaped with intention and designed to integrate naturally into everyday life.
                        </p>

                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {/* Step 1 */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'var(--spacing-2xl)',
                            marginBottom: 'var(--spacing-4xl)',
                            paddingBottom: 'var(--spacing-4xl)',
                            borderBottom: '1px solid var(--color-border)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-4xl)',
                                    fontFamily: 'var(--font-primary)',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    01
                                </div>
                                <h3 style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Discovery & Consultation
                                </h3>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    We begin by listening. Understanding your vision, needs, budget, and timeline
                                    is essential. We conduct site visits, analyze context, and discuss your goals
                                    in depth.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Understanding client needs, lifestyle, and vision</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Observing site context, purpose, and spatial requirements</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Establishing a clear design direction rooted in function and feeling</li>
                                    {/* <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Budget and timeline planning</li> */}
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'var(--spacing-2xl)',
                            marginBottom: 'var(--spacing-4xl)',
                            paddingBottom: 'var(--spacing-4xl)',
                            borderBottom: '1px solid var(--color-border)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-4xl)',
                                    fontFamily: 'var(--font-primary)',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    02
                                </div>
                                <h3 style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Concept Design
                                </h3>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    We develop initial design concepts that respond to your brief and site conditions.
                                    This phase explores multiple ideas through sketches, diagrams, and mood boards.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Translating ideas into a cohesive design concept</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Spatial planning studiesBalancing thoughtful craftsmanship with contemporary expression</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Shaping spaces that feel natural, refined, and intuitive</li>
                                    {/* <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Preliminary 3D visualizations</li> */}
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'var(--spacing-2xl)',
                            marginBottom: 'var(--spacing-4xl)',
                            paddingBottom: 'var(--spacing-4xl)',
                            borderBottom: '1px solid var(--color-border)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-4xl)',
                                    fontFamily: 'var(--font-primary)',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    03
                                </div>
                                <h3 style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Design Development
                                </h3>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Once the concept is approved, we refine the design in detail. Every element
                                    is carefully considered—from structural systems to lighting and finishes.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Refining layouts, materials, and details</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Ensuring harmony between aesthetics and everyday living</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Developing practical, functional solutions with clarity and restraint</li>
                                    {/* <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Photorealistic renderings</li> */}
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'var(--spacing-2xl)',
                            marginBottom: 'var(--spacing-4xl)',
                            paddingBottom: 'var(--spacing-4xl)',
                            borderBottom: '1px solid var(--color-border)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-4xl)',
                                    fontFamily: 'var(--font-primary)',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    04
                                </div>
                                <h3 style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Documentation
                                </h3>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    We prepare comprehensive construction documents that communicate the design
                                    intent clearly to builders and contractors, ensuring accurate execution.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Preparing detailed drawings and specifications</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Clearly defining materials, finishes, and construction intent</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Ensuring accuracy for smooth execution and coordination</li>
                                    {/* <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Tender documentation</li> */}
                                </ul>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'var(--spacing-2xl)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-4xl)',
                                    fontFamily: 'var(--font-primary)',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    05
                                </div>
                                <h3 style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Construction & Execution
                                </h3>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    During construction, we provide oversight and support to ensure the design
                                    is built to the highest standards. We're with you until completion and beyond.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Working closely with clients and site teams</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Translating design intent into built form</li>
                                    <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Delivering enduring, functional spaces that feel effortless and personal</li>
                                    {/* <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Final handover and documentation</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ padding: 'var(--spacing-2xl) 0 var(--spacing-xl)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                        Ready to Begin Your Project?
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--spacing-lg)',
                        maxWidth: '700px',
                        margin: '0 auto var(--spacing-lg)'
                    }}>
                        Let's discuss how we can bring your vision to life through our collaborative design process
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default DesignApproach;
