import React from "react";
import "./style.css";
import dev from "./images/dev.png";
import Footer from "./Footer";
export default function Home(props) {
  return (
    <>
      <div className="home-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={dev} alt="img" className="image-content" />
        </div>
        <div className="home-content">
          <div className="main-content">
            Hey there!
            <p style={{ marginTop: "1rem" }}>I'm Madhavi.</p>
          </div>
          <div className="sub-content">
            A front-end developer and a tech enthusiast.
            <p>Using my skills to contribute to this wide Ocean of Tech!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
