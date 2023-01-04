import React from "react";
import Footer from "./Footer";

export default function Contact(props) {
  return (
    <>
      <h1 className="heading">Get in touch!</h1>
      <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
        Any feedback or question? Connect with me or Leave a message!
      </p>
      <Footer />
      <div className="card-styling-contact">
        <form action="https://formspree.io/f/xyyayyne" method="POST">
          <div className="form-card">
            <div className="form-content">
              <div>
                <label>
                  <p>Full Name: </p>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Your name here"
                    className="form-input"
                  />
                </label>
                <label>
                  <p>Email: </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email here"
                    className="form-input"
                  />
                </label>
              </div>
              <div style={{ display: "block" }}>
                <p>Message: </p>
                <textarea
                  rows="7"
                  cols="26"
                  placeholder="Your message here"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="sendButton" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
