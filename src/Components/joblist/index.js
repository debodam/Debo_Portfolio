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
    backgroundColor: "#36c2ce", // Your custom color here
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
    "UCalgary Students' Union": {
      jobTitle: "Faculty Representative: Schulich School of Engineering @",
      duration: "MAR 2024 - PRESENT",
      desc: [
        "Elected in the 2024 Students’ Union election with 489 votes. Represented 4,200+ engineering students and collaborated with the faculty dean to enhance education.",
        "Successfully passed a referendum, achieving a significant 33% reduced fee assessment for co-op and internship students compared to full-time student rates.",
        "Developed and implemented comprehensive bylaws and policies for membership, elections, governance, and meetings.",
      ],
    },
    "AC Robotics": {
      jobTitle: "Project Manager @",
      duration: "JULY 2023 - APR 2024",
      desc: [
        "Spearheaded the development of an innovative bionic arm, integrating 3D printed materials, EMG sensors, and Servos.",
        "Directed and supervised three specialized subteams: Software, Mechatronics, and Biological Research.",
        "Integrated hand movement tracking using OpenCV and Python, achieving a 90% accuracy rate in gesture recognition. Programmed Arduino firmware to control servos based on gesture data.",
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
    "Engineering Students' Society": {
      jobTitle: "First Year Representative @",
      duration: "SEPT 2022 - APR 2023",
      desc: [
        "Represented 1000+ students at the University of Calgary, demonstrating leadership in community engagement through the organization of various school-wide engineering events.",
        "Improved the first year curriculum through monthly feedback presented during meetings with academic coordinators.",
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
