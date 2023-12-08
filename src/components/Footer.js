import React from "react";
import "../styles/Footer.css";
import HarvestayLogo from '../assets/Harvestay logo.png';
import FbIcon from '../assets/fb-icon.svg';
import InstIcon from '../assets/insta-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo-section">
            <img src={HarvestayLogo} alt="" />
        </div>
        <div className="links-secton">
            <h4>Home</h4>
            <h4>Contact Us</h4>
            <h4>Privacy & Terms</h4>
        </div>
        <div className="icon-links">
          <img src={FbIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={InstIcon} alt="" />
        </div>
    </div>
  );
};

export default Footer;
