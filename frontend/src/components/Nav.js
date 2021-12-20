import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.topBanner}>
      <nav className={styles}>
        <div className={styles.links}>
          <Link to="/homepage">Home</Link>
        </div>
      </nav>
    </div>
  );
}
