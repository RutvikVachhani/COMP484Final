import React,{useState} from "react";
import "../styles/homepage.css";
import axios from "axios"
import { useHistory } from "react-router-dom"

import Login from "./login";

import Nav from "./Nav";
import Footer from "./footer";

const Homepage = ({setLoginUser}) => {

    const history = useHistory();

    return (
        <div className="homepage">
            <Nav />
            <h1>
                Welcome
            </h1>
            <h2>Click below to input your Info and calculate you BMI</h2>
            <button className="button" onClick={ () => history.push('/bmiInsert')}>Click Me</button>
            <Footer />
        </div>
    )
}

export default Homepage