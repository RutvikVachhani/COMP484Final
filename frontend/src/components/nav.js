import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <nav>
          <div className="left">
            <h2>Fitness calculator</h2>
          </div>
          <div>
            <h2>
              <Link to="/login">Logout</Link>
            </h2>
          </div>
        </nav>
      </div>
    </>
  );
}
