
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 pb-3">
            <div className="container">

                <div className="row text-center text-md-start">

                    {/* About */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Bhavy Portfolio</h4>
                        <p className="text-secondary">
                            Frontend Developer passionate about
                            building modern and responsive websites.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Quick Links</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home"
                                   className="text-secondary text-decoration-none">
                                    Home
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#projects"
                                   className="text-secondary text-decoration-none">
                                    Projects
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#about"
                                   className="text-secondary text-decoration-none">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact"
                                   className="text-secondary text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Connect With Me</h5>

                        <p className="text-secondary">
                            Email: bhavy0033@gmail.com
                        </p>

                        <a
                            href="https://github.com/bhavy2408"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-info btn-sm"
                        >
                            GitHub
                        </a>
                    </div>

                </div>

                <hr className="border-secondary" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-secondary mb-0">
                        &copy; {new Date().getFullYear()} Bhavy Portfolio.
                        All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
