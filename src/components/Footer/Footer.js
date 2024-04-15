import React from "react";
import "./Footer.css";
import { GITHUB, LINKEDIN } from "../../constant";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Sanket Patil
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="#" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href={LINKEDIN} target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href={GITHUB} target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
