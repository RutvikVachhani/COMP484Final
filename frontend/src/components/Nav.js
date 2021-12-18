import React from "react";
import styles from "../styles/nav.scss";

export default function Nav() {
  return (
    <nav className={styles}>
      <div className={styles.links}>
          <h1>Get Healthier</h1>
        <a class="active" href="homepage">
          Home
        </a>
      </div>
    </nav>
  )
}

