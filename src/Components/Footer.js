import React from "react";
import PartyChief from "./PartyChief";
import Weather from "./GetWeather";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <PartyChief />
      <Weather />
    </div>
  );
};

export default Footer;
