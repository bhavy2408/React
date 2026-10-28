
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {
    const slides = [
        {
            title: 'Welcome to My Portfolio',
            subtitle: "Hi, I'm Bhavy Dipeshbhai Ladva",
            description: 'A B.Sc. IT student passionate about web development.',
            button: 'About Me',
            link: '#about',
            color: 'primary'
        },
        {
            title: 'Frontend Developer',
            subtitle: 'Building Modern Websites',
            description: 'I use HTML, CSS, JavaScript, and React to create responsive websites.',
            button: 'My Skills',
            link: '#about',
            color: 'success'
        },
        {
            title: 'My Creative Work',
            subtitle: 'Projects and Practice',
            description: 'Explore my web development projects and coding practice.',
            button: 'View Projects',
            link: '#projects',
            color: 'danger'
        },
        {
            title: "Let's Connect",
            subtitle: 'Have an Opportunity?',
            description: "Feel free to contact me to discuss projects or opportunities.",
            button: 'Contact Me',
            link: '#contact',
            color: 'dark'
        }
    ];

    return (
        <section id="home">
            <div
                id="portfolioCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3500"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            key={slide.title}
                        >
                            <div
                                className={`bg-${slide.color} text-white d-flex align-items-center justify-content-center text-center`}
                                style={{ minHeight: '430px', padding: '70px 20px' }}
                            >
                                <div className="container">
                                    <h1 className="display-4 fw-bold mb-3">
                                        {slide.title}
                                    </h1>

                                    <h2 className="h3 mb-3">
                                        {slide.subtitle}
                                    </h2>

                                    <p className="lead mb-4">
                                        {slide.description}
                                    </p>

                                    <a
                                        href={slide.link}
                                        className="btn btn-light btn-lg fw-semibold">
                                        {slide.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#portfolioCarousel"
                    data-bs-slide="prev"
                    aria-label="Previous slide"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>

                {/* Next Button */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#portfolioCarousel"
                    data-bs-slide="next"
                    aria-label="Next slide"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default Slider;