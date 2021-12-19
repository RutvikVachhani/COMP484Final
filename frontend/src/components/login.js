import React, {useState, useEffect} from "react"
import "../styles/login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { getInfo } from "../api"

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    //authenticating the user
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

    //if user personal details exits
    const [ info, setInfo ] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const i = await getInfo()
            setInfo(i)
        }
        fetchInfo()
    }, [])

    const login = () => {
        axios.post("http://localhost:4000/auth", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            if(info.username == user.username){
                history.push("/", user)
            } else {
                history.push("/bmiInsert")
            }
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