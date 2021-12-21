import React, { useState } from "react";
import "../styles/global.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from "../assets/healthy-people-logo-vector-19182580.jpg";

//function returning an html
const Register = () => {
  const history = useHistory();

  //saving using input from the form on html
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  //handling changes from the user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //api for connecting to backend and inputing the info to mongodb
  const register = () => {
    const { name, username, password, reEnterPassword, email } = user;
    if (name && username && password === reEnterPassword && email) {
      axios.post("https://comp484finalbackend.herokuapp.com/registerInput", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="App">
      <div className="register">
      <h1>Get Healthier</h1>
        <h2>Register</h2>
        <div>
          <img src={logo} width="100" style={{float:"left"}}/>
        </div>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Your Username"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
        <br/><br/>
        <div className="button" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Register;
