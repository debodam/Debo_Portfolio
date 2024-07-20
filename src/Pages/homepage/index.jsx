import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import resume from "../../Assets/2024_Software_Engineering_Resume.pdf";
import heroPic from "../../Assets/debo_profile_picture.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import "./style.css";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}

      <div className="hero section">
        {/* <FractalTree></FractalTree> */}
        <div className="hero_pic_container">
          <img className="hero_pic" src={heroPic} alt="Hero" />
        </div>
        <div className="hero_text">
          <h1 className="hero_h1">
            Hi, I'm <span className="hero_name">Debo</span>!
          </h1>
          <h3 className="hero_subheader">Software Engineering Student</h3>
          <p className="hero_p">@ The Schulich School of Engineering</p>
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

      <div className="about section"></div>
    </div>
  );
};

export default Homepage;
