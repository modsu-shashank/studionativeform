import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero" style={{ height: "60vh", minHeight: "400px" }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="About Us"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Studio Native Form</p>
          <p className="hero-description">
            {/* Passionate about creating spaces that inspire and endure */}
          </p>
        </div>
      </section>

      {/* Studio Story */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="section-header">
              {/* <p className="section-label">Our Story</p> */}
              {/* <h2 className="section-title">About Us</h2> */}
            </div>
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                lineHeight: "var(--line-height-relaxed)",
                color: "var(--color-text-secondary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              At Studio Native Form, we create architecture and interiors that
              feel natural, enduring, and quietly expressive. Our work is rooted
              in a balance of thoughtful craftsmanship and contemporary design,
              resulting in spaces that are both refined and functional.
            </p>
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                lineHeight: "var(--line-height-relaxed)",
                color: "var(--color-text-secondary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              We work closely with our clients to shape thoughtful spaces where
              aesthetics and everyday living come together seamlessly, creating
              environments that feel intuitive, personal, and effortless.
            </p>
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                lineHeight: "var(--line-height-relaxed)",
                color: "var(--color-text-secondary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              స్టూడియో నేటివ్ ఫార్మ్ వద్ద, మేము సహజంగా అనిపించే, దీర్ఘకాలం
              నిలిచే మరియు నిశ్శబ్దంగా వ్యక్తమయ్యే ఆర్కిటెక్చర్ మరియు
              ఇంటీరియర్స్‌ను సృష్టిస్తాము. మా పని ఆలోచనాత్మక నైపుణ్యం మరియు
              ఆధునిక డిజైన్ మధ్య సమతుల్యతపై ఆధారపడి ఉంటుంది, దీని ఫలితంగా సొగసైన
              మరియు ఉపయోగకరమైన స్థలాలు రూపుదిద్దుకుంటాయి.
            </p>
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                lineHeight: "var(--line-height-relaxed)",
                color: "var(--color-text-secondary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              స్టూడియో నేటివ్ ఫార్మ్ వద్ద, మేము మా క్లయింట్లతో కలిసి పని చేసి,
              అందం మరియు రోజువారీ జీవితం సహజంగా కలిసే ఆలోచనాత్మక స్థలాలను
              రూపకల్పన చేస్తాము. అవి సహజంగా, వ్యక్తిగతంగా మరియు శ్రమలేనివిగా
              అనిపించే వాతావరణాలను సృష్టిస్తాయి.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Our Foundation</p>
                        <h2 className="section-title">Mission & Values</h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--spacing-2xl)',
                        marginTop: 'var(--spacing-3xl)'
                    }}>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Our Mission
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                To create innovative, sustainable, and timeless designs that enrich lives
                                and communities. We strive to push the boundaries of what's possible while
                                remaining grounded in principles of functionality, beauty, and environmental responsibility.
                            </p>
                        </div>

                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Excellence
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                We are committed to the highest standards of design and execution. Every project
                                receives our full attention to detail, from initial concept through final completion.
                            </p>
                        </div>

                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Sustainability
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                Environmental stewardship is at the core of our practice. We integrate sustainable
                                materials, energy-efficient systems, and biophilic design principles into every project.
                            </p>
                        </div>

                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Collaboration
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                We work closely with our clients, consultants, and craftspeople to ensure that
                                every voice is heard and every detail is considered in the design process.
                            </p>
                        </div>

                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Innovation
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                We embrace new technologies, materials, and methodologies while respecting
                                traditional craftsmanship and time-tested design principles.
                            </p>
                        </div>

                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-accent)'
                            }}>
                                Integrity
                            </h3>
                            <p style={{
                                fontSize: 'var(--font-size-base)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                Honesty, transparency, and ethical practice guide all our relationships and decisions.
                                We build trust through consistent delivery and open communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            {/* <p className="section-label">Meet The Team</p> */}
            <h2 className="section-title">Our Founder</h2>
            <p className="section-description">
              {/* A diverse group of talented professionals united by a passion for exceptional design */}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--spacing-2xl)",
              marginTop: "var(--spacing-3xl)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "0 auto var(--spacing-md)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "var(--color-bg-secondary)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b9352"
                  alt="Founder"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h4 style={{ marginBottom: "var(--spacing-xs)" }}>
                Asresha Reddy
              </h4>
              <p
                style={{
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-accent)",
                  marginBottom: "var(--spacing-sm)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Founder & Principal Architect
              </p>
              <p
                style={{
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                Architecture professional with experience in design, planning,
                and site coordination, focused on creating functional and
                aesthetic spaces.
              </p>
            </div>

            {/* 
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                margin: '0 auto var(--spacing-md)',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-bg-secondary)'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                                    alt="Co-Founder"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>David Chen</h4>
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Design Director
                            </p>
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }}>
                                David brings a unique perspective combining interior design expertise
                                with a deep understanding of spatial experience.
                            </p>
                        </div> */}

            {/* <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                margin: '0 auto var(--spacing-md)',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-bg-secondary)'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                                    alt="Landscape Architect"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div> */}
            {/* <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Emma Rodriguez</h4>
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--spacing-sm)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Landscape Architect
                            </p>
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }}>
                                Emma specializes in creating outdoor spaces that celebrate nature
                                and enhance the connection between built and natural environments.
                            </p> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
