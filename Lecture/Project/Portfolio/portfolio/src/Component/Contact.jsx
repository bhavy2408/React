
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        );

        window.location.href = `mailto:bhavy0033@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">
                        Contact <span className="text-primary">Me</span>
                    </h2>

                    <p className="text-secondary">
                        Have a project or opportunity? Let's connect!
                    </p>
                </div>

                <div className="row g-4">

                    {/* Contact Information */}
                    <div className="col-lg-5">
                        <div className="bg-dark text-white p-4 rounded-3 h-100">
                            <h3 className="fw-bold mb-4">
                                Get In Touch
                            </h3>

                            <div className="mb-4">
                                <h6 className="text-info">Email</h6>
                                <p className="mb-0">
                                    <a
                                        href="mailto:bhavy0033@gmail.com"
                                        className="text-white text-decoration-none"
                                    >
                                        bhavy0033@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="text-info">Location</h6>
                                <p className="mb-0">Surat, Gujarat, India</p>
                            </div>

                            <div>
                                <h6 className="text-info">GitHub</h6>
                                <a
                                    href="https://github.com/bhavy2408"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-info btn-sm"
                                >
                                    Visit My GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">

                                <h3 className="fw-bold mb-4">
                                    Send Me a Message
                                </h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Your Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Your Email
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">
                                                Subject
                                            </label>

                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Enter subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">
                                                Message
                                            </label>

                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Write your message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg w-100"
                                            >
                                                Send Message
                                            </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
