import React,{useState} from "react";
import "../styles/homepage.css";
import axios from "axios"
import { useHistory } from "react-router-dom"

const BMIInsert = () => {

    const history = useHistory()

    const [ info, setInfo ] = useState({
        height: "",
        weight: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value
        })
        console.log(name)
    }

    const InsertBMI = function(event){
        event.preventDefault()
        const { height, weight } = info
        if(height && weight){
            axios.post("http://localhost:4000/bmiInput", info)
            .then( res => {
                alert(res.data.message)
                history.push("/displayBMI")
            })
        }   
    }
     
    return (
        <div className="homepage">
            <nav>
                 <div class="inline">
                    <h1>Get Healthier</h1>
                    <div class="Right">
                        <a class="active" href="homepage">Home</a>
                    </div>
                </div>
            </nav>
            <h1>
                Welcome 
            </h1>
            <form name="bmi" onSubmit={InsertBMI}>
                <label>Weight</label>
                <input type="text" name="weight" id="weight" value={info.weight} onChange={handleChange} placeholder="Enter Weight in lbs" /> lbs
                <br />
                <label>Height</label>
                <input type="text" name="height" id="height" value={info.height} onChange={handleChange} placeholder="Enter height in inches" /> inches
                <br />
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BMIInsert