import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Format the message for WhatsApp
            const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
            
            // Your WhatsApp number (replace with actual number)
            const whatsappNumber = '916301768120'; // +91 63017 68120 without + and spaces
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');
            
            setStatus({
                type: 'success',
                message: 'Thank you for contacting us! We will get back to you soon.'
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', minHeight: '350px' }}>
                <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
                    alt="Contact Us"
                    className="hero-background"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-subtitle">Let's  make your vision come to life</p>
                    <p className="hero-description">
                        {/* Let’s make your
                        vision come
                        to life */}
                    </p>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: 'var(--spacing-4xl)',
                        alignItems: 'start'
                    }}>
                        {/* Contact Information */}
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Get In Touch</h2>
                            <p style={{
                                fontSize: 'var(--font-size-lg)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 'var(--line-height-relaxed)',
                                marginBottom: 'var(--spacing-2xl)'
                            }}>
                                Whether you're planning a new project or have questions about our services,
                                we're here to help. Reach out to us and let's start a conversation.
                            </p>

                            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h4 style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    Email
                                </h4>
                                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                                    <a href="mailto:studionativeform@gmail.com" style={{ color: 'var(--color-text-primary)' }}>
                                        studionativeform@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h4 style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    Phone
                                </h4>
                                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                                    <a href="tel:+91 63017 68120" style={{ color: 'var(--color-text-primary)' }}>
                                        +91 63017 68120
                                    </a>
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h4 style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    Office
                                </h4>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    Banjara Hills<br />
                                    Hyderabad<br />
                                    Telangana, India
                                </p>
                            </div>

                            {/* <div>
                                <h4 style={{
                                    fontSize: 'var(--fon    t-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    Office Hours
                                </h4>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div> */}
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        placeholder="Tell us about your project..."
                                        rows="6"
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div style={{
                                        padding: 'var(--spacing-md)',
                                        marginBottom: 'var(--spacing-lg)',
                                        backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                                        color: status.type === 'success' ? '#155724' : '#721c24',
                                        borderRadius: 'var(--border-radius-sm)',
                                        fontSize: 'var(--font-size-sm)'
                                    }}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                    style={{
                                        width: '100%',
                                        opacity: loading ? 0.7 : 1,
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            {/* <section style={{ height: '500px', backgroundColor: 'var(--color-bg-secondary)' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841395430254!2d-73.98823492346654!3d40.75889713538524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                ></iframe>
            </section> */}
        </div>
    );
};

export default Contact;
