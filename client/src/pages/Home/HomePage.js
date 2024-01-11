import React from 'react';
import './HomePage.css'; // Ensure proper path
import profileImage from './madina.jpeg';
function HomePage() {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <h1>Hi, I'm Madina Rustamova</h1>
                <p>A Passionate Web Developer</p>
                <button>View My Work</button>
            </section>

            {/* About Me Section */}
            <section className="about-me">
                <img  src={profileImage}/>
                <p>I specialize in creating interactive, user-friendly web applications...</p>
            </section>

            {/* Projects Showcase */}
            <section className="projects-showcase">
                <div className="project">
                    <h3>Dynamic Portfolio Site</h3>
                    <p>A fully responsive portfolio website...</p>
                    <a href="https://github.com/username/portfolio-site">Learn More</a>
                </div>
                {/* More projects */}
            </section>

            <section className="projects-showcase">
                <div className="project">
                    <h3>Dynamic Portfolio Site</h3>
                    <p>A fully responsive portfolio website...</p>
                    <a href="https://github.com/username/portfolio-site">Learn More</a>
                </div>
                {/* More projects */}
            </section>

            <section className="projects-showcase">
                <div className="project">
                    <h3>Dynamic Portfolio Site</h3>
                    <p>A fully responsive portfolio website...</p>
                    <a href="https://github.com/username/portfolio-site">Learn More</a>
                </div>
                {/* More projects */}
            </section>

            {/* Footer */}
            <footer>
                © 2024 Madina Rustamova. All rights reserved.
            </footer>
        </div>
    );
}

export default HomePage;