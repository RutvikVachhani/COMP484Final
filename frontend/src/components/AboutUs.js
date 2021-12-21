//importing all node modules and exported modules from other files
import React from "react";
import "../styles/global.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

//functions returns html to the browser
function AboutUs() {
  return (
    <div>
      <Nav />
      <div id="mySidenav" className="sidenav">
      <Link to="/homepage">Home</Link>
      </div>
      <div className="contentwrap">
        <div className="center">
          <h1> About Us </h1> <h2>Team EFC</h2>
          <p>
            Four Computer Science seniors at CSUN have joined forces to get in
            better shape during the current season of online classes due to
            COVID-19 lockdowns.
          </p>
        </div>
        <table>
          <tr>
            <div>
              <div className="right">
                <h3>Devanshi Patel</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className="right">
                <h3>Rutvik Vachhani</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className="right">
                <h3>Sarkis Yapudzhian</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className="right">
                <h3>Stephan Nazarian</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}

//exporting the module to the app.js
export default AboutUs;
