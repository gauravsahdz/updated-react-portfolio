import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    //after scrolling down, navbar will be dark background
    useEffect(() => {
        const handleScroll = () => {
            const isDown = window.scrollY > 400;
            const nav = document.getElementsByClassName('navbar')[0];
            const navBrand = document.getElementsByClassName('navbar-brand')[0];
            if (isDown) {
                nav.classList.add('bg-dark');
                nav.classList.add('navbar-dark');
                navBrand.classList.add('text-white');
            } else {
                nav.classList.remove('bg-dark');
                nav.classList.remove('navbar-dark');
                navBrand.classList.remove('text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    GAURAV
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`}>
                            <a className="nav-link" aria-current="page" href="#home" onClick={() => handleClick('Home')}
                                style={{ color: activeItem === 'Home' ? 'white' : '' }}
                            >
                                Home
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'About' ? 'active' : ''}`}>
                            <a className="nav-link" href="#about" onClick={() => handleClick('About')}
                                style={{ color: activeItem === 'About' ? 'white' : '' }}
                            >
                                About
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Project' ? 'active' : ''}`}>
                            <a className="nav-link" href="#portfolio" onClick={() => handleClick('Project')}
                                style={{ color: activeItem === 'Project' ? 'white' : '' }}
                            >
                                Project
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Skills' ? 'active' : ''}`}>
                            <a className="nav-link" href="#skills" onClick={() => handleClick('Skills')}
                                style={{ color: activeItem === 'Skills' ? 'white' : '' }}
                            >
                                Skills
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Services' ? 'active' : ''}`}>
                            <a className="nav-link" href="#service" onClick={() => handleClick('Services')}
                                style={{ color: activeItem === 'Services' ? 'white' : '' }}
                            >
                                Services
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Experience' ? 'active' : ''}`}>
                            <a className="nav-link" href="#resume" onClick={() => handleClick('Experience')}
                                style={{ color: activeItem === 'Experience' ? 'white' : '' }}
                            >
                                Experience
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Testimonials' ? 'active' : ''}`}>
                            <a className="nav-link" href="#testimonial" onClick={() => handleClick('Testimonials')}
                                style={{ color: activeItem === 'Testimonials' ? 'white' : '' }}
                            >
                                Testimonials
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Contact' ? 'active' : ''}`}>
                            <a className="nav-link" href="#contactForm" onClick={() => handleClick('Contact')}
                                style={{ color: activeItem === 'Contact' ? 'white' : '' }}
                            >
                                Contact
                            </a>
                        </li>
                        <li className={`nav-item ${activeItem === 'Resume' ? 'active' : ''}`}>
                            <a
                                href="https://drive.google.com/file/d/1gdr37WDYIMD6aMle0L9VjGx4XPpKqVAw/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="resume-btn">Resume</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
