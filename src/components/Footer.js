import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer-el">
      <a
        role="button"
        href="https://www.github.com/MadhaviGupta"
        className="socialIcons"
      >
        <GitHubIcon />
      </a>
      <a
        role="button"
        href="https://www.linkedin.com/in/madhavi-gupta-6b9358219/"
        className="socialIcons"
      >
        <LinkedInIcon />
      </a>
      <a
        role="button"
        href="mailto:madhavigupta1225@gmail.com"
        className="socialIcons"
      >
        <EmailIcon />
      </a>
      <a
        role="button"
        href="https://twitter.com/Madhaviig1"
        className="socialIcons"
      >
        <TwitterIcon />
      </a>
    </div>
  );
}
