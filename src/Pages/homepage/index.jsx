import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React from "react";
import resume from "../../Assets/2024_Software_Engineering_Resume.pdf";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import Debo from "../../Assets/ProfileImage.png";
import Navbar from "../../Components/navbar";
import "./style.css";

const Homepage = () => {
  const tech_stack = [
    "Java",
    "Python",
    "React.js",
    "C",
    "Javascript ES6+",
    "SQL",
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero section">
        {/* <FractalTree></FractalTree> */}
        {/* <div className="hero_pic_container">
          <img className="hero_pic" src={heroPic} alt="Hero" />
        </div> */}
        <div className="hero_text">
          <h1 className="hero_h1">
            Hi, I'm <span className="hero_name">Debo</span>!
          </h1>
          <h3 className="hero_subheader">
            Sometimes I like to turn ideas into reality.
          </h3>
          {/* <p className="hero_p">
            Currently a Software Engineer @ The Schulich School of Engineering.
            Passionate about creating innovative solutions through code. Always
            eager to learn and collaborate on exciting projects.
          </p> */}
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
              I'm currently a third year engineering student at the{" "}
              <a href="https://schulich.ucalgary.ca/">
                Schulich School of Engineering
              </a>
              , pursuing a major in <b>Software Engineering</b> and a minor in
              <b> Entrepreneurship and Enterprise Development</b>.
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
    </div>
  );
};

export default Homepage;
