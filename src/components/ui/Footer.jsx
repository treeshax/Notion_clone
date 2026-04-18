import React from "react";
import { WavyBackground } from "./wavy-background";
import { AnimatedTooltip } from "./animated-tooltip";
import "./css/Footer.css";

const developers = [
  {
    id: 1,
    name: "Tushar Singla",
    designation: "Frontend Developer",
    image: "https://github.com/Tushar8466.png",
  },
  {
    id: 2,
    name: "Harshita Jain",
    designation: "Software Engineer",
    image: "https://github.com/treeshax.png",
  },
  {
    id: 3,
    name: "Sunny Kushwaha",
    designation: "Software Engineer",
    image: "https://github.com/smoky4g4h.png",
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <WavyBackground
        containerClassName="wavy-container"
        className="footer-content"
        backgroundFill="black"
        speed="slow"
        waveOpacity={0.3}
      >
        <div className="footer-inner">
          <p className="footer-title">
            Meet the Developers
          </p>
          <p className="footer-subtitle">
            The creative minds behind Scribo's powerful workspace.
          </p>
          <div className="footer-tooltip-container">
            <AnimatedTooltip items={developers} />
          </div>
        </div>
      </WavyBackground>

      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Scribo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
