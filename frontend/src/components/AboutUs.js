import React from "react";
import styles from "../styles/aboutus.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div>
      <Nav />
      <div className={styles.contentwrap}>
        <div className={styles.center}>
          <h1> About Us </h1> <h2>Team EFC</h2>
          <p>
            Four Computer Science seniors at CSUN
          </p>
        </div>
        <table>
          <tr>
            <div>
              <div className={styles.right}>
                <h3>Devanshi Patel</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className={styles.right}>
                <h3>Rutvik Vachhani</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className={styles.right}>
                <h3>Sarkis Yapudzhian</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </tr>
          <tr>
            <div>
              <div className={styles.right}>
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

export default AboutUs;
