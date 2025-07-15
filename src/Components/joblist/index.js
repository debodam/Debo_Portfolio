import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const TabPanelStyled = styled("div")({
  padding: 24,
});

const TabsStyled = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  "& .MuiTabs-scrollable": {
    overflowX: "auto",
  },
  "& .MuiTabs-scrollButtons": {
    display: "none",
  },
  "&::-webkit-scrollbar": {
    width: "8px",
    color: "#36c2ce",
  },
  "&::-webkit-scrollbar-thumb": {
    color: "#36c2ce",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-track": {
    color: "#36c2ce",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#36c2ce",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelStyled
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </TabPanelStyled>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experienceItems = {
    "Arcurve": {
      jobTitle: "Software Developer Intern @",
      duration: "MAY 2025 - PRESENT",
      desc: [
        "Refactored legacy codebase to implement a modular filtering system, enhancing maintainability and scalability of the internal project.",
        "Developed and integrated new UI components using MudBlazor, connected to backend APIs built with .NET 8 and Entity Framework Core.",
        "Collaborated with a team to streamline CI/CD processes using Microsoft Azure DevOps, improving deployment efficiency and reliability.",
        "Contributed to a corporate social responsibility (CSR) initiative, helping raise over $2,000 for charity through coordinated team efforts and internal events."
      ],
    },
    "Techstart": {
      jobTitle: "Product Manager @",
      duration: "SEPT 2024 - MAY 2025",
      desc: [
        "Spearheaded the development of a 2D story-based platformer game centered on sustainability awareness using Unity and C#, successfully managing a team of 9 to deliver a high-quality product.",
        "Utilized Jira to organize and track project tasks, manage sprint backlogs, and monitor team progress, ensuring efficient issue resolution and transparency across all development stages.",
        "Implemented Agile frameworks, conducting bi-weekly sprint planning, which led to a 30% increase in team productivity.",
        "Presented product to industry professionals at the TechStart Final Showcase, earning the Best Design award."
      ],
    },
    "UCalgary Students' Union": {
      jobTitle: "Faculty Representative: Schulich School of Engineering @",
      duration: "MAY 2024 - MAY 2025",
      desc: [
        "Elected in the 2024 Students’ Union election with 489 votes. Represented 4,200+ engineering students and collaborated with the faculty dean to enhance education.",
        "Successfully passed a referendum, achieving a significant 33% reduced fee assessment for co-op and internship students compared to full-time student rates.",
        "Addressed academic grading concerns by formally appealing a professor’s decision, leading to a significant drop in the course fail rate from 80% to 10%.",
        "Served on the Governance and Oversight Committee to develop and implement comprehensive bylaws and policies governing membership, elections, and meetings."
      ],
    },
    "AC Robotics": {
      jobTitle: "Project Manager @",
      duration: "JULY 2023 - APR 2024",
      desc: [
        "Spearheaded the development of an innovative bionic arm, integrating 3D printed materials, EMG sensors, and Servos.",
        "Directed and supervised three specialized subteams: Software, Mechatronics, and Biological Research.",
        "ntegrated hand movement tracking using OpenCV and Python, achieving a 90% accuracy rate in gesture recognition. Programmed Arduino firmware to control servos based on gesture data.",
      ],
    },
    "Schulich Ignite": {
      jobTitle: "Programming Mentor @",
      duration: "JAN 2023 - APR 2023",
      desc: [
        "Mentored students, imparting foundational knowledge of frontend development through HTML/CSS and JavaScript.",
        "Guided students on basic networking principles and backend developement fundamentals using Node.js.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        height: 300,
        flexDirection: isHorizontal ? "column" : "row",
      }}>
      <TabsStyled
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}>
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
            key={key}
          />
        ))}
      </TabsStyled>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={key}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, i) => (
              <li key={i}>{descItem}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
