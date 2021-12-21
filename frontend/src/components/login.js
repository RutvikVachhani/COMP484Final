import React, { useState, useEffect } from "react";
import "../styles/global.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getInfo } from "../api";
import logo from "../assets/healthy-people-logo-vector-19182580.jpg";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  //authenticating the user
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //if user personal details exits
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const i = await getInfo();
      setInfo(i);
    };
    fetchInfo();
  }, []);

  //connecting to the backend and checking for the info and verifying
  const login = () => {
    axios.post("http://localhost:4000/auth", user).then((res) => {
      setLoginUser(res.data.user);
        if (info) {
          history.push("/", user);
        } else {
          history.push("/bmiInsert");
        }
    });
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Get Healthier</h1>
        <h2>Login</h2>
        <div>
          <img src={logo} width="100" style={{float:"left"}}/>
        </div>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Enter your username"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={login}>
          Login
        </div> <br/>
        <br/><br/>
        <div className="button" onClick={() => history.push("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
