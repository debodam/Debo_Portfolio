import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import resume from "../../Assets/2024_Software_Engineering_Resume.pdf";
import Debo from "../../Assets/ProfileImage.png";
import ExternalLinks from "../../Components/externallinks/index";
import JobList from "../../Components/joblist";
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

  const isHorizontal = window.innerWidth < 600;

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    if (isHorizontal) {
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}>
          {value === index && <div style={{ padding: 24 }}>{children}</div>}
        </div>
      );
    } else {
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel`}
          {...other}>
          {value === index && <div style={{ padding: 24 }}>{children}</div>}
        </div>
      );
    }
  }

  function a11yProps(index) {
    if (isHorizontal) {
      return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
      };
    } else {
      return {
        id: `vertical-tab-${index}`,
      };
    }
  }

  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Amazon: {
      jobTitle: "Software Development Engineer @",
      duration: "JUL 2022 - PRESENT",
      desc: [
        "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
        "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers.",
      ],
    },
    Wattpad: {
      jobTitle: "Associate Engineer @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    "University of Toronto": {
      jobTitle: "Research Engineer @",
      duration: "MAY 2021 - SEPT 2021",
      desc: [
        "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
        "Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik.",
      ],
    },
    Centivizer: {
      jobTitle: "Software Developer @",
      duration: "SEPT 2019 - APR 2020",
      desc: [
        "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
        "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia.",
      ],
    },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    "Orange Gate": {
      jobTitle: "Software Developer Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
        "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div id="hero">
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
                <GitHubIcon style={{ fontSize: 35, color: "#fff" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/debojeetdam"
                target="_blank"
                rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 37, color: "#fff" }} />
              </a>
            </div>
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

      {/* Experience Section */}
      <div id="experience">
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>
        <JobList />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <div className="section-header">
          <span className="section-title">/ contact</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
