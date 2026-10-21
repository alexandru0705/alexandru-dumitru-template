import './Contact.scss';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can integrate Formspree, EmailJS, or your backend API endpoint
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <h2>Get in Touch</h2>
                <p>Have a project in mind or want to collaborate? Drop a message below.</p>
            </div>

            <div className="contact-container">
                {submitted ? (
                    <div className="success-message">
                        <h3>Thank you!</h3>
                        <p>Your message has been sent successfully. I will get back to you soon.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;