
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'Weather App',
            description: 'A weather application to display weather information for a selected city.',
            technology: 'HTML, CSS, JavaScript',
            icon: 'bi-cloud-sun'
        },
        {
            id: 2,
            title: 'Quiz App',
            description: 'An interactive quiz application with questions, answer options, and scores.',
            technology: 'HTML, CSS, JavaScript',
            icon: 'bi-patch-question'
        },
        {
            id: 3,
            title: 'Task Manager',
            description: 'A task management application to organize and track daily tasks.',
            technology: 'React, JavaScript',
            icon: 'bi-list-check'
        }
    ];

    return (
        <section id="projects" className="py-5 bg-white">
            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">
                        My <span className="text-primary">Work</span>
                    </h2>

                    <p className="text-secondary">
                        Explore my projects and development practice.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="row g-4">
                    {projects.map((project) => (
                        <div className="col-md-6 col-lg-4" key={project.id}>
                            <div className="card h-100 border-0 shadow-sm">

                                <div className="card-body p-4">
                                    <div className="mb-3">
                                        <span className="badge bg-primary">
                                            Project {project.id}
                                        </span>
                                    </div>

                                    <h4 className="card-title fw-bold">
                                        {project.title}
                                    </h4>

                                    <p className="card-text text-secondary">
                                        {project.description}
                                    </p>

                                    <p className="small mb-3">
                                        <strong>Technologies:</strong>
                                        <br />
                                        {project.technology}
                                    </p>

                                    <a
                                        href="https://github.com/bhavy2408"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-outline-primary"
                                    >
                                        View GitHub
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;
