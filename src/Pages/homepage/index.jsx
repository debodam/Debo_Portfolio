import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React from "react";
import resume from "../../Assets/2024_Software_Engineering_Resume.pdf";
import DriveAwake from "../../Assets/DriveAwake.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import Debo from "../../Assets/ProfileImage.png";
import TinyThreads from "../../Assets/TinyThreads.png";
import ExternalLinks from "../../Components/externallinks/index"; // Adjust path as needed
import Navbar from "../../Components/navbar";
import "./style.css"; // Ensure your custom styles are correct

const Homepage = () => {
  const tech_stack = [
    "Java",
    "Python",
    "React.js",
    "C",
    "Javascript ES6+",
    "SQL",
  ];

  const spotlightProjects = {
    TinyThreads: {
      title: "TinyThreads",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "H",
      link: "https://github.com/slakh96/no-mans-land",
      image: TinyThreads,
    },
    DriveAwake: {
      title: "DriveAwake",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "H",
      link: "https://github.com/slakh96/no-mans-land",
      image: DriveAwake,
    },
    Subway: {
      title: "Subway",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "H",
      link: "https://github.com/slakh96/no-mans-land",
      image: Debo,
    },
    EMR: {
      title: "EMR",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "H",
      link: "https://github.com/slakh96/no-mans-land",
      image: Debo,
    },
  };

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
      techStack: "React.js, Flask, C",
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
      techStack: "Python",
      link: "https://github.com/debodam/Automated-Indoor-Garden-Arduino-Code",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero section">
        <div className="hero_text">
          <h1 className="hero_h1">
            Hi, I'm <span className="hero_name">Debo</span>!
          </h1>
          <h3 className="hero_subheader">
            Sometimes I like to turn ideas into reality.
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
              rel="noopener noreferrer">
              <img className="icon" src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/debojeetdam"
              target="_blank"
              rel="noopener noreferrer">
              <img className="icon" src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
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
              <b className="highlight-2">Software Engineering</b> and a minor in
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

      {/* Projects Section */}
      <div id="projects">
        {/* <div className="section-header">
          <span className="section-title">/ spotlight projects</span>
        </div> */}
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item className="carousel-item-custom" key={i}>
              <div className="carousel-inner">
                <img
                  className="d-block w-100"
                  src={spotlightProjects[key]["image"]}
                  alt={key}
                />
                <div className="carousel-content">
                  <h3>
                    <strong>{spotlightProjects[key]["title"]}</strong>
                  </h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <span className="techStack">
                      <strong>{spotlightProjects[key]["techStack"]}</strong>
                    </span>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}

        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <li className="projects-card" key={i}>
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
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
    </div>
  );
};

export default Homepage;
