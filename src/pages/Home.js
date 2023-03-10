import React from "react";
import "../styles/Home.css"
import { DiHtml5, DiCss3, DiJava, DiJavascript1, DiReact, DiPython, DiDocker, DiUnitySmall } from "react-icons/di";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { GiSolderingIron } from "react-icons/gi";
import { TbCircuitResistor } from "react-icons/tb";
import { SiUnrealengine, SiArduino } from "react-icons/si";
import { IoLogoModelS } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import MetaTags from 'react-meta-tags';
import i94 from "../media/i94/i94.jpg";
import { ReactComponent as Printer } from "../media/3d-printing.svg";
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
                    <li><a href="https://github.com/samuelswedberg" target="_blank" rel="noreferrer"><FaGithub/></a></li>
                    <li><a href='mailto:samuel.swedberg@ndsu.edu' target="_blank" rel="noreferrer"><FaEnvelope/></a></li>
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
                        <h3>Programming Languages</h3>
                            <div className="skillsList">
                                <div>C, C++, C#</div><SiCplusplus/>
                            </div>
                            <div className="skillsList">
                                <div>Java</div><DiJava/>
                            </div>
                            <div className="skillsList">
                                <div>HTML</div><DiHtml5/>
                            </div>
                            <div className="skillsList">
                                <div>CSS</div><DiCss3/>
                            </div>
                            <div className="skillsList">
                                <div>JavaScript</div><DiJavascript1/>
                            </div>
                            <div className="skillsList">
                                <div>React</div><DiReact/>
                            </div>
                            <div className="skillsList">
                                <div>Python</div><DiPython/>
                            </div>
                    </div>
                    <div className="skillsContent">
                        <h3>Tools & Technologies</h3>
                            <div className="skillsList">
                                <div>3D Printing</div><Printer className="skillsIcon"/>
                            </div>
                            <div className="skillsList">
                                <div>CAD</div><IoLogoModelS/>
                            </div>
                            <div className="skillsList">
                                <div>Soldering</div><GiSolderingIron/>
                            </div>
                            <div className="skillsList">
                                <div>Electronics Design</div><TbCircuitResistor/>
                            </div>
                            <div className="skillsList">
                                <div>Unreal Engine</div><SiUnrealengine/>
                            </div>
                            <div className="skillsList">
                                <div>Unity</div><DiUnitySmall/>
                            </div>
                            <div className="skillsList">
                                <div>Docker</div><DiDocker/>
                            </div>
                            <div className="skillsList">
                                <div>Arduino</div><SiArduino/>
                            </div>
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