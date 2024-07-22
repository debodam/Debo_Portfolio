import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../Assets/2024_Software_Engineering_Resume.pdf";
import heroPic from "../../Assets/debo_profile_picture.png";
import Debo from "../../Assets/ProfileImage.png";
import Contact from "../../Components/contact";
import ExternalLinks from "../../Components/externallinks/index";
import FadeInSection from "../../Components/fadein"; // Adjust the path as needed
import JobList from "../../Components/joblist";
import Navbar from "../../Components/navbar";
import "./style.css";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Debo!"],
    loop: false,
    typingDelay: 200,
    cursor: true,
  });

  const tech_stack = [
    "Java",
    "Python",
    "React.js",
    "C",
    "Javascript ES6+",
    "SQL",
  ];

  const projects = {
    "Dynamic Subway Information System": {
      desc: "A Java application that simulates subway screens with real-time train data and advertisements.",
      techStack: "Java, MySQL",
      link: "https://github.com/debodam/Dynamic-Subway-Information-System",
    },
    TinyThreads: {
      desc: "A full-stack children’s clothing donation and trading market application.",
      techStack:
        "React.js, Flask, AWS DynamoDB, Cloudinary,  OpenAI ChatGPT-4 Vision",
      link: "https://github.com/ParsaKargari/HTC-2023",
    },
    DriveAwake: {
      desc: "A driving assistance application that measures EOG signals to alert users when they feel sleepy.",
      techStack: "React.js, Flask, C, Docker",
      link: "https://github.com/debodam/nathacks2023",
    },
    "Disaster Relief System": {
      desc: "A Java application that manages the data of disaster victims.",
      techStack: "Java, MySQL",
      link: "https://github.com/debodam/Disaster-Relief-System",
    },
    "Museum Management System": {
      desc: "A management system for a musuem that keeps track of artists and their art.",
      techStack: "Python, SQL",
      link: "https://github.com/debodam/Museum-Management-System",
    },
    "Arduino Automatic Garden Program": {
      desc: "A self-automated garden system that tracks soil moisture and temperature",
      techStack: "C",
      link: "https://github.com/debodam/Automated-Indoor-Garden-Arduino-Code",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <FadeInSection>
        <div id="hero">
          <div className="hero section">
            <div className="hero_pic_container">
              <img src={heroPic} alt="Hero" className="hero_image" />
            </div>
            <div className="hero_text">
              <h1 className="hero_h1">
                <span>{text}</span>
                <span className="cursor">
                  <Cursor />
                </span>
              </h1>
              <h3 className="hero_subheader">
                Sometimes I like to turn{" "}
                <span className="hero_subheader_ideas"> ideas </span> into
                <span className="hero_subheader_reality"> reality</span>.
              </h3>
              <div className="btn-container">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <button className="btn-1">
                    Resume
                    <InsertDriveFileIcon className="file-icon" />
                  </button>
                </a>
                <a href="mailto:debojeetdam.business@gmail.com">
                  <button className="btn-2">
                    Email
                    <EmailRoundedIcon className="email-icon" />
                  </button>
                </a>
              </div>
              <div className="socials_container">
                <a
                  href="https://github.com/debodam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github-icon">
                  <GitHubIcon style={{ fontSize: 35, color: "#fff" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/debojeetdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin-icon">
                  <LinkedInIcon style={{ fontSize: 37, color: "#fff" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection>
        <div id="about">
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              <p>
                I'm currently a third-year engineering student at the{" "}
                <a
                  className="highlight-1 no-underline"
                  href="https://schulich.ucalgary.ca/">
                  Schulich School of Engineering
                </a>
                , pursuing a major in{" "}
                <b className="highlight-2">Software Engineering</b> and a minor
                in
                <b className="highlight-2">
                  {" "}
                  Entrepreneurship and Enterprise Development
                </b>
                .
              </p>
              <p>{"Here are some technologies I have been working with:"}</p>
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <li key={i}>{tech_item}</li>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <img className="Debo_pic" src={Debo} alt="Debo" />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <div id="projects">
          <div className="section-header">
            <span className="section-title">/ projects</span>
          </div>
          <div className="project-container">
            <ul className="projects-grid">
              {Object.keys(projects).map((key, i) => (
                <li className="projects-card" key={i}>
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35, color: "#36c2ce" }}
                      />
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    />
                  </div>

                  <div className="card-title">
                    <strong>{key}</strong>
                  </div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">
                    <strong>{projects[key]["techStack"]}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>

      {/* Experience Section */}
      <FadeInSection>
        <div id="experience">
          <div className="section-header">
            <span className="section-title">/ experience</span>
          </div>
          <JobList />
        </div>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <div id="contact">
          {/* <div className="section-header">
            <span className="section-title">/ contact</span>
          </div> */}
          <Contact />
        </div>
      </FadeInSection>

      {/* Footer Section */}
      <FadeInSection>
        <div id="footer">
          <footer>
            <p>&copy; Code by Debo</p>
          </footer>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Homepage;
