import React from "react";
import "../styles/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MetaTags from 'react-meta-tags';
import i94 from "../media/i94/i94.jpg";
import devsite from "../media/logo512.png";
import Contact from "../components/Contact/Contact"

const about = "I'm a student at North Dakota Sate University currently studying computer engineering with a passion about software, electronics, and embedded systems. I grew up watching series such as Iron Man and Star Wars and was always fascinated by the technology. I love using my imagination and creativity to bring concepts to life. Currently, I am looking for opportunities to expand my knowledge and gain experience in the computer engineering field or related fields.";
const PDF_FILE_URL = "https://samuelswedberg.com/samuelswedbergresume.pdf"    
//const PDF_FILE_URL = "http://localhost:3000/samuelswedbergresume.pdf"   

function Home() {
    const downloadResume=(url)=>{
        fetch(url)
            .then((response)=>response.blob())
            .then((blob)=>{
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split('/').pop();
                const aTag = document.createElement('a');
                aTag.href= blobURL;
                aTag.setAttribute('download',fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
        });
    };
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
                    <div className="wrapper">
                        <div className="aboutContent">
                            <p>{about}</p>
                        </div>
                    </div>
                <button className="resume" onClick={()=>{downloadResume(PDF_FILE_URL);}}>DOWNLOAD MY RESUME</button>
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
                            <li>C, C++, C#</li>
                            <li>HTML, CSS</li> 
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projects" className="section">
                <h2>Projects</h2>
                <div className="wrapper">
                    <a className="projectsContent" href="https://lab.samuelswedberg.com/interstate94" target="_blank" rel="noreferrer">
                        <img className="projectsImage" src={i94} alt="Interstate 94 Thumbnail"></img>
                        <div className="projectsText">
                            <h3>Interstate 94</h3>
                            <p>Pixel art racing game made in Unity</p>
                        </div>
                    </a>
                    <a className="projectsContent" href="https://lab.samuelswedberg.com" target="_blank" rel="noreferrer">
                        <img className="projectsImage" src={devsite} alt="Devsite Thumbnail"></img>
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
                    <Contact/>
                </div>
            </div>
        </>
    );
}

export default Home