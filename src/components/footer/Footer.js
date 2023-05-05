import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="info">
          <p>Copyright © 2023 - All Rights Reserved - Akash Pandey</p>

          <div className="icon">
            <a
              href="https://www.linkedin.com/in/devakashpandey/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
