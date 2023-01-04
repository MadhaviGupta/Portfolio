import React from "react";
import "./style.css";
import about from "./images/About.png";
import languages from "./images/Languages.png";
import experience from "./images/Experience.png";
export default function About(props) {
  const onButtonClick = () => {
    fetch("MadhaviGuptaResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MadhaviGuptaResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <h1 className="heading">About</h1>
      <div className="card-styling-about">
        <div className="card-about">
          <h2 className="heading2">About Me</h2>
          <hr className="hr-tag" />
          <div className="content">
            <img
              src={about}
              alt="about"
              className="project-img"
            />
            <p style={{ margin: "1rem" }}>
              I am a pre-final year student pursuing{" "}
              <span className={`name-${props.mode}`}>
                B.Tech. in Computer Science stream at Medicaps University,
                Indore
              </span>
              . Currently, I'm learning Data Structures and Algorithms. Always
              up for learning new things related to Tech and Food. I love to
              design, listen music and watch movies. <br />
              Apart from that, I like to read books and various online articles
              concerned about technology, food, nation, health, mankind, etc.
            </p>
            <div></div>
          </div>
        </div>
        <div className="card-about">
          <div>
            <h2 className="heading2">
              Languages, Frameworks, Libraries & Tools
            </h2>
            <hr className="hr-tag" />
            <div className="content-about">
              <img src={languages} alt="languages" className="project-img" />
              <div className="skills">
                <div className="sub-skills">
                  <ul style={{ margin: "1.3rem" }}>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </ul>
                  <ul style={{ margin: "1.3rem" }}>
                    <li>Java</li>
                    <li>C++</li>
                    <li>C</li>
                  </ul>
                </div>
                <div className="sub-skills">
                  <ul style={{ margin: "1.3rem" }}>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                  </ul>
                  <ul style={{ margin: "1.3rem" }}>
                    <li>GitHub</li>
                    <li>Visual Studio Code</li>
                    <li>Canva</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-about">
          <h2 className="heading2">Experience</h2>
          <hr className="hr-tag" />
          <div className="content">
            <img src={experience} alt="experience" className="project-img" />
            <p style={{ margin: "1rem" }}>
              I worked at{" "}
              <span className={`name-${props.mode}`}>
                Longswitch Software Solutions Private Limited
              </span>
              . It is a software outsourcing company which provides software
              solutions and technical consultancy. I was{" "}
              <span className={`name-${props.mode}`}>
                Frontend Web Developer Intern (ReactJS Developer)
              </span>{" "}
              there and built various projects using various libraries.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="downloadButton" onClick={onButtonClick}>
          Download My Resume
        </button>
      </div>
    </>
  );
}
