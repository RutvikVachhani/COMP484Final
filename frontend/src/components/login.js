import React, {useState} from "react"
import "../styles/login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [ user, setUser ] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://comp484finalbackend.herokuapp.com/auth", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/", user)
        })
    }

    return (
    <div className="App">
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Enter your username"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    </div>
    )
}

export default Login