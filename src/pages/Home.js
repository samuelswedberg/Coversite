import React from "react";
import "../styles/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MetaTags from 'react-meta-tags';
import i94 from "../media/i94/i94.jpg";
import devsite from "../media/logo512.png";

function Home() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg</title>
                <meta name="description" content="Personal website for Samuel Swedberg" />
            </MetaTags>
            <div id="hero" className="hero">
                <h1>Samuel Swedberg</h1>
                <h3>Computer Engineering Student - North Dakota State University</h3>
                <ul>
                    {/* <li><a href="https://google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li> */}
                    <li><a href="https://github.com/samuelswedberg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    <li><a href='mailto:samuel.swedberg@ndsu.edu' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
                </ul>
            </div>
            <div id="about" className="section">
                <h2>About Me</h2>
                    <div className="aboutContent">
                        <p>I'm a student at North Dakota Sate University currently studying computer engineer with a passion about software, electronics, and embedded systems.</p>
                        <p>I grew up watching movies like Iron Man and Star Wars. I love the </p>
                        <p>Currently, I am looking for opportunities to expand my knowledge and gain experience in the computer engineering field or related fields.</p>
                    </div>
                <a className="resume" href="https://google.com" target="_blank" rel="noreferrer">DOWNLOAD MY RESUME</a>
            </div>
            <div id="skills" className="section">
                <h2>Skills</h2>
                <div className="wrapper">
                    <div className="skillsContent">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>3D Printing</li>
                            <li>Soldering</li>
                            <li>Electronics Design</li>
                            <li>CAD</li>
                        </ul>
                    </div>
                    <div className="skillsContent">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>Java</li>
                            <li>C, C++, C#</li>
                            <li>HTML, CSS</li> 
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projects" className="section">
                <h2>Projects</h2>
                <div className="wrapper">
                    <a className="projectsContent" href="https://lab.samuelswedberg.com/interstate94" target="_blank" rel="noreferrer">
                        <div className="projectsImage">
                            <img src={i94} alt="Interstate 94 Thumbnail"></img>
                        </div>
                        <div className="projectsText">
                            <h3>Interstate 94</h3>
                            <p>Pixel art racing game made in Unity</p>
                        </div>
                    </a>
                    <a className="projectsContent" href="https://lab.samuelswedberg.com" target="_blank" rel="noreferrer">
                        <div className="projectsImage">
                            <img src={devsite} alt="Devsite Thumbnail"></img>
                        </div>
                        <div className="projectsText">
                            <h3>Personal Devsite</h3>
                            <p>Location for all documentation for various projects</p>
                        </div>
                    </a>
                </div>
            </div>
            <div id="contact" className="section">
                <h2>Contact</h2>
                <div className="wrapper">
                    <p>Yuhhh</p>
                </div>
            </div>
        </>
    );
}

export default Home