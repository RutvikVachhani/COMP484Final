import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <nav>
          <div>
            <Link to="/homepage">Home</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
