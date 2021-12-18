import React from 'react';
import styles from '../styles/footer.scss';
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div>
            <footer className={styles}>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/ContactUs">Contact Us</Link>
            </footer>
        </div>
    )
}