import React from "react";

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: "50vh", minHeight: "350px" }}>
                <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
                    alt="Contact Us"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-subtitle">Let’s make your vision come to life</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 100%, 350px), 1fr))",
                            gap: "var(--spacing-2xl)",
                            marginTop: "var(--spacing-3xl)",
                            alignItems: "start"
                        }}
                    >
                        {/* Contact Info */}
                        <div>
                            <h2 style={{ marginBottom: "12px" }}>Get In Touch</h2>

                            <p
                                style={{
                                    fontSize: "var(--font-size-lg)",
                                    color: "var(--color-text-secondary)",
                                    lineHeight: "var(--line-height-relaxed)",
                                    marginBottom: "24px"
                                }}
                            >
                                Whether you're planning a new project or have questions about our
                                services, we're here to help. Reach out to us and let's start a
                                conversation.
                            </p>

                            {/* Email */}
                            <div style={{ marginBottom: "16px" }}>
                                <h4
                                    style={{
                                        fontSize: "var(--font-size-sm)",
                                        fontWeight: "var(--font-weight-semibold)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        color: "var(--color-accent)",
                                        marginBottom: "6px"
                                    }}
                                >
                                    Email
                                </h4>
                                <p style={{ margin: 0 }}>
                                    <a
                                        href="mailto:studionativeform@gmail.com"
                                        style={{ color: "var(--color-text-primary)" }}
                                    >
                                        studionativeform@gmail.com
                                    </a>
                                </p>
                            </div>

                            {/* Phone */}
                            <div style={{ marginBottom: "16px" }}>
                                <h4
                                    style={{
                                        fontSize: "var(--font-size-sm)",
                                        fontWeight: "var(--font-weight-semibold)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        color: "var(--color-accent)",
                                        marginBottom: "6px"
                                    }}
                                >
                                    Phone
                                </h4>
                                <p style={{ margin: 0 }}>
                                    <a
                                        href="tel:+916301768120"
                                        style={{ color: "var(--color-text-primary)" }}
                                    >
                                        +91 63017 68120
                                    </a>
                                </p>
                            </div>

                            {/* Office */}
                            <div>
                                <h4
                                    style={{
                                        fontSize: "var(--font-size-sm)",
                                        fontWeight: "var(--font-weight-semibold)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        color: "var(--color-accent)",
                                        marginBottom: "6px"
                                    }}
                                >
                                    Office
                                </h4>
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "var(--font-size-base)",
                                        lineHeight: "var(--line-height-relaxed)",
                                        color: "var(--color-text-secondary)"
                                    }}
                                >
                                    Banjara Hills
                                    <br />
                                    Hyderabad
                                    <br />
                                    Telangana, India
                                </p>
                            </div>
                        </div>

                        {/* Map */}
                        <div style={{ height: "clamp(300px, 50vh, 500px)" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6841596835564!2d78.438553!3d17.412348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973a1a9fcb19%3A0x4c0b8e9e47c4f4e3!2sBanjara%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1706000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Studio Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
