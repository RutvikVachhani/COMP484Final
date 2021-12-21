import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <h2>Get Healthier Today <Link to="/AboutUs">About Us</Link></h2>
      </footer>
    </div>
  );
}
