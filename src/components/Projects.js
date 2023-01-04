import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import basic from "./images/Basic.png";
import portfolio from "./images/Portfolio.png";
import texttools from "./images/TextTools.png";

export default function Projects() {
  return (
    <>
      <h1 className="heading">My Projects</h1>
      <div className="card-styling-pro">
        <div className="card-pro">
          <h2 className="heading2">Text-Tools</h2>
          <hr className="hr-tag" />
          <div className="content">
            <img src={texttools} alt="texttools" className="project-img" />
            <p style={{ display: "flex", alignItems: "center" }}>
              TextTools is an text utility site which can be used to perform
              different operations on text. <br />
              Build using ReactJS and Bootstrap.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              role="button"
              href="https://github.com/MadhaviGupta/Text-Tools"
              className="project-icons"
            >
              <GitHubIcon />
            </a>
            <a href="#" role="button" className="project-icons">
              <LaunchIcon />
            </a>
          </div>
        </div>
        <div className="card-pro">
          <h2 className="heading2">Basic Portfolio Website (Beginner Level)</h2>
          <hr className="hr-tag" />
          <div className="content">
            <img src={basic} alt="basic" className="project-img" />
            <p style={{ display: "flex", alignItems: "center" }}>
              This is my first project which depicts a basic UI of a portfolio
              website.
              <br />
              Build using HTML5 and CSS3.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              role="button"
              href="https://github.com/MadhaviGupta/Basic-Portfolio"
              className="project-icons"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://madhavigupta.github.io/Basic-Portfolio/"
              role="button"
              className="project-icons"
            >
              <LaunchIcon />
            </a>
          </div>
        </div>
        <div className="card-pro">
          <h2 className="heading2">My Portfolio</h2>
          <hr className="hr-tag" />

          <div className="content">
            <img src={portfolio} alt="portfolio" className="project-img" />
            <p style={{ display: "flex", alignItems: "center" }}>
              This is my portfolio website presenting my works.
              <br />
              Build using ReactJS and MaterialUI.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a role="button" href="#" className="project-icons">
              <GitHubIcon />
            </a>
            <a href="#" role="button" className="project-icons">
              <LaunchIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
