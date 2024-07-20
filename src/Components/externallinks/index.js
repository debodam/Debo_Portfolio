import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

class ExternalLinks extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <span className="external-links">
        <a
          className="github-icon"
          href={this.props.githubLink}
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon
            style={{
              fontSize: 30,
              color: "black",
            }}
          />
        </a>
      </span>
    );
  }
}

export default ExternalLinks;
