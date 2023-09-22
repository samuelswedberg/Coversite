import React from "react";
import "../styles/Home.css"
import { AiOutlineTeam, AiFillClockCircle} from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { DiHtml5, DiCss3, DiJava, DiJavascript1, DiReact, DiPython, DiDocker, DiUnitySmall, DiLinux} from "react-icons/di";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import { GiSolderingIron } from "react-icons/gi";
import { TbCircuitResistor, TbBrandNextjs} from "react-icons/tb";
import { SiUnrealengine, SiArduino, SiCplusplus} from "react-icons/si";
import { MdReportProblem, MdComputer } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SlOrganization } from "react-icons/sl";
import i94 from "../media/projects/i94.jpg";
import lt from "../media/projects/lt.png";
import { ReactComponent as Printer } from "../media/3d-printing.svg";
import devsite from "../media/logo512.png";
import Contact from "../components/Contact/Contact"

const about1 = "I am a dedicated student pursuing a degree in computer engineering at North Dakota State University. My areas of expertise and interests encompass software development, electronics, and embedded systems. My early exposure to influential series like Iron Man and Star Wars has instilled in me a profound fascination with technology.";
const about2 = "I am driven by a passion for taking ideas and making them into reality, and take great pleasure in exercising my imagination and creativity to achieve this goal. At present, I am actively seeking opportunities to further my knowledge and acquire hands-on experience within the realm of computer engineering, software engineering or any related field.";
const skills1 = "I possess a diverse skill set encompassing primarily front-end web development, game development, electronic design, and homelab systems. Listed below is a brief summary of the skills I have acquired:";
const skills2 = "Currently this semester, I am taking classes about embedded systems and FPGA development using VHDL. During my free time, I am working on a web application project with another student to continue improving my skills in software engineering.";
const projects1 = "Below is a brief list of the projects I have worked on. A full list with documentation on past and current projects can be "
const contact = "Feel free to reach out to me using the contact form below. I'm always eager to connect and engage in meaningful conversations. Whether you have a question or just want to say hello, I'd be delighted to hear from you."
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
            <div id="hero" className="hero">
                <h1>Samuel Swedberg</h1>
                <h3>Computer Engineering Student - North Dakota State University</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/samuelswedberg/" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                    <li><a href="https://github.com/samuelswedberg" target="_blank" rel="noreferrer"><FaGithub/></a></li>
                    <li><a href='mailto:samuel.swedberg@ndsu.edu' target="_blank" rel="noreferrer"><FaEnvelope/></a></li>
                </ul>
            </div>
            <div id="about" className="section">
                <h2>About Me</h2>
                    <div className="wrapper">
                        <div className="aboutContent">
                            <p>{about1}</p>
                            <p>{about2}</p>
                        </div>
                    </div>
                <button className="resume" onClick={()=>{downloadResume(PDF_FILE_URL);}}>DOWNLOAD MY RESUME</button>
            </div>
            <div id="skills" className="section">
                <h2>Skills</h2>
                <div className="wrapper" style={{paddingBottom: "0", marginBottom: "0"}}>
                    <div className="aboutContent" style={{textAlign: "left", display: "flex", marginBottom: "0"}}>
                        <p style={{paddingBottom: "0", marginBottom: "0"}}>{skills1}</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="skillsContent">
                        <h3>Programming Languages</h3>
                            <div className="skillsList">
                                <div>C, C#, C++ </div><SiCplusplus/>
                            </div>
                            <div className="skillsList">
                                <div>Java</div><DiJava/>
                            </div>
                            <div className="skillsList">
                                <div>HTML, CSS, JS</div><DiHtml5/>
                            </div>
                            <div className="skillsList">
                                <div>React JS</div><DiReact/>
                            </div>
                            <div className="skillsList">
                                <div>Next JS</div><TbBrandNextjs/>
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
                                <div>Linux</div><DiLinux/>
                            </div>
                            <div className="skillsList">
                                <div>Arduino</div><SiArduino/>
                            </div>
                    </div>
                    <div className="skillsContent">
                        <h3>Soft Skills</h3>
                            <div className="skillsList">
                                <div>Collaboration</div><AiOutlineTeam/>
                            </div>
                            <div className="skillsList">
                                <div>Organization</div><SlOrganization/>
                            </div>
                            <div className="skillsList">
                                <div>Problem Solving</div><MdReportProblem/>
                            </div>
                            <div className="skillsList">
                                <div>Time Management</div><AiFillClockCircle/>
                            </div>
                            <div className="skillsList">
                                <div>Computer Proficency</div><MdComputer/>
                            </div>
                            <div className="skillsList">
                                <div>Customer Service</div><RiCustomerService2Fill/>
                            </div>
                            <div className="skillsList">
                                <div>Adaptability</div><BsArrowRepeat/>
                            </div>
                    </div>
                </div>
                <div className="wrapper" style={{paddingBottom: "0", marginBottom: "0"}}>
                    <div className="aboutContent" style={{textAlign: "left", display: "flex", marginBottom: "0"}}>
                        <p style={{paddingBottom: "0", marginBottom: "0"}}>{skills2}</p>
                    </div>
                </div>
            </div>
            <div id="projects" className="section">
                <h2>Projects</h2>
                <div className="wrapper" style={{paddingBottom: "0", marginBottom: "0"}}>
                    <div className="aboutContent" style={{textAlign: "left", display: "flex", marginBottom: "0"}}>
                        <p style={{paddingBottom: "0", marginBottom: "0"}}>{projects1}<a href="https://dev.samuelswedberg.com" target="_blank">seen here</a></p>
                    </div>
                </div>
                <div className="wrapper">
                    <a className="projectsContent" href="https://dev.samuelswedberg.com/docs/interstate94" target="_blank" rel="noreferrer">
                        <img className="projectsImage" src={i94} alt="Interstate 94 Thumbnail"></img>
                        <div className="projectsText">
                            <h3>Interstate 94</h3>
                            <p>Pixel art racing game made in Unity</p>
                        </div>
                    </a>
                    <a className="projectsContent" href="https://dev.samuelswedberg.com/docs/lavellestint" target="_blank" rel="noreferrer">
                        <img className="projectsImage" src={lt} alt="Devsite Thumbnail"></img>
                        <div className="projectsText">
                            <h3>Lavelle's Tint</h3>
                            <p>Website for local small business made using React JS and Bootstrap 5</p>
                        </div>
                    </a>
                </div>
            </div>
            <div id="contact" className="section">
                <h2>Contact</h2>
                <div className="wrapper" style={{paddingBottom: "0", marginBottom: "0"}}>
                    <div className="aboutContent" style={{textAlign: "left", display: "flex", marginBottom: "0"}}>
                        <p style={{paddingBottom: "0", marginBottom: "0"}}>{contact}</p>
                    </div>
                </div>
                <div className="wrapper">
                    <Contact/>
                </div>
            </div>
        </>
    );
}

export default Home