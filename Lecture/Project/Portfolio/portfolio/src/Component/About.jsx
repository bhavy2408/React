
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'C',
        'C++'
    ];

    return (
        <section id="about" className="py-5 bg-white">
            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <p className="text-secondary">
                        Get to know me and my skills
                    </p>
                </div>

                <div className="row align-items-center g-5">

                    {/* Profile Image Placeholder */}
                    <div className="col-lg-5 text-center">
                        <div
                            className="bg-primary text-white rounded-circle
                            d-flex align-items-center justify-content-center
                            mx-auto shadow"
                            style={{
                                width: '250px',
                                height: '250px',
                                fontSize: '90px',
                                fontWeight: 'bold'
                            }}
                        >
                            B
                        </div>

                        <h4 className="mt-4 fw-bold">
                            Bhavy Dipeshbhai Ladva
                        </h4>

                        <p className="text-primary">
                            Frontend Developer
                        </p>
                    </div>

                    {/* About Content */}
                    <div className="col-lg-7">
                        <h3 className="fw-bold mb-3">
                            Hello! I'm Bhavy
                        </h3>

                        <p className="text-secondary">
                            I am a Second-Year B.Sc. IT student from
                            Surat, Gujarat, interested in web development
                            and creating modern, responsive websites.
                        </p>

                        <p className="text-secondary">
                            I am learning HTML, CSS, JavaScript, and React
                            to build user-friendly web applications.
                            I also have knowledge of C and C++ and enjoy
                            improving my programming skills through practice.
                        </p>

                        {/* Education */}
                        <div className="mb-4">
                            <h5 className="fw-bold">
                                <span className="text-primary">Education</span>
                            </h5>

                            <p className="text-secondary mb-0">
                                Bachelor of Science in Information Technology
                                (B.Sc. IT)
                            </p>

                            <small className="text-secondary">
                                Currently in Second Year
                            </small>
                        </div>

                        {/* Skills */}
                        <h5 className="fw-bold mb-3">
                            Technical Skills
                        </h5>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {skills.map((skill) => (
                                <span
                                    className="badge bg-primary px-3 py-2"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <a
                            href="#projects"
                            className="btn btn-primary btn-lg"
                        >
                            Explore My Projects
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
