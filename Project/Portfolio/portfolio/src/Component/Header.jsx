
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="bg-dark text-white py-4">
            <div className="container">
                <div className="row align-items-center">

                    {/* Header Content */}
                    <div className="col-lg-7 text-center text-lg-start mb-3 mb-lg-0">
                        <h1 className="display-5 fw-bold">
                            Welcome to My Portfolio
                        </h1>

                        <p className="lead text-secondary mb-0 color-white">
                            Showcasing my projects and skills
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-lg-5">
                        <nav className="d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center gap-3">

                            <a href="#home" className="text-white text-decoration-none">
                                Home
                            </a>

                            <a href="#about" className="text-white text-decoration-none">
                                About
                            </a>

                            <a href="#contact" className="text-white text-decoration-none">
                                Contact
                            </a>

                            <a href="#projects" className="btn btn-info fw-bold">
                                View Projects
                            </a>

                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
