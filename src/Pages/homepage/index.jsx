import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React from "react";
import Carousel from "react-bootstrap/Carousel"; // Import Carousel
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
    "TDSB Homework Management Interface": {
      desc: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
      link: "https://github.com/gazijarin/TDSBHomeworkManagement",
      open: "https://tdsb-app.herokuapp.com/",
    },
    "Adam A.I.": {
      desc: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      techStack: "Javascript, HTML / CSS",
      link: "https://github.com/gazijarin/adamai",
      open: "https://gazijarin.github.io/AdamAI/",
    },
    "Distributed Logging and Monitoring System": {
      desc: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
      techStack: "Node.js (Express.js), React.js, PostgreSQL",
      link: "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System",
    },
    "Odin Bot": {
      desc: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      link: "https://github.com/gazijarin/OdinBot",
      open: "",
    },
    "Game Centre": {
      desc: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      techStack: "Java, Android Studio",
      link: "https://github.com/gazijarin/gamecentre",
      open: "",
    },
    "Minimax Stonehenge": {
      desc: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      techStack: "Python",
      link: "https://github.com/gazijarin/stonehenge",
      open: "",
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
        <div className="section-header">
          <span className="section-title">/ spotlight projects</span>
        </div>
        <Carousel>
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
        </Carousel>

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
