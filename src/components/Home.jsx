import React from "react";
import profileImg from '../image/profile_img.jpg'

/**
 * Home component renders a profile image and some social media links
 * @returns {JSX.Element} The rendered Home component containing the profile information and social media links.
 */
function Home() {
    const style = {
        fontSize: "4rem", fontStyle: "normal"
    }
    
    return (
        <div className="d-flex flex-column">
            <div className="nav-bg pb-5 pt-3">
                <section class="home">
                    <div className="text-center intro">

                        <h1 className="pb-4">Hi I'm Joanna Wang</h1>
                        <p>Studying Bachelor of CompSci / Master of Cyber Security at UQ</p>

                        {/* Links for Social Media */}
                        <div className="social-media-container">

                            {/* email */}
                            <div className="social-media-item">
                                <a href="mailto:joannare105@gmail.com" className="text-decoration-none">
                                    <i className="bi bi-envelope" style={style}></i>
                                </a>
                            </div>

                            {/* LinkedIn */}
                            <div className="social-media-item">
                                <a href=" https://www.linkedin.com/in/joanna-wang-a9b308296" className="text-decoration-none"> 
                                    <i class="bi bi-linkedin" style={style}></i>
                                </a>
                            </div>

                            {/* GitHub */}
                            <div className="social-media-item">
                                <a href="https://github.com/Joanna-Wang105" className="text-decoration-none">
                                    <i class="bi bi-github" style={style}></i>
                                </a>
                            </div>

                            {/* Resume */}
                            <div className="social-media-item">
                                <a href="../documents/Joanna Wang resume.pdf" download="Joanna_Wang_Resume.pdf" className="text-decoration-none">
                                    <i class="bi bi-download" style={{ fontSize: "3.6rem", fontStyle: "normal"}}> Resume</i>
                                </a>
                            </div>
                        </div>  
                    </div>
                    
                    {/* Profile image */}
                    <img src={profileImg} alt="My Portfolio Image" />
                </section>      
            </div>
        </div>
    )
}

export default Home;