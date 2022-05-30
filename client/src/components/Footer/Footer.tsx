import React from "react";

import "./Footer.css";
import config from "../../config"

const Footer = () => {
  return (
    <div className="footer-container">
      <a href={config.externURL.programmerLinkedIn} target="_blank" rel="noreferrer">
        Created By <span>Felipe Delicia</span>
      </a>
    </div>
  );
};

export default Footer;