import { useState } from "react";
export function Form() {
    let [name, setName] = useState('');
    let [gender, setGender] = useState('');
    let [dob, setDob] = useState('');

    let handleChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
       
        if(inputName == "n1") {
            setName(inputValue)
        }
        if(inputName == "n2") {
            setGender(inputValue);
        }
        if(inputName == "n3") {
            setDob(inputValue);
        }
    }
    let handleSubmit = (e) => {
        e.preventDefault();
    }
    return (<div>
        <h2>Simple Registration Form</h2>
        <form onSubmit = {handleSubmit}>
            <div>Enter Name <input type = "text" name = "n1" 
                autoComplete="off" onChange = {handleChange}></input></div>
            <div>
                Select Gender 
                <input type = "radio" name = "n2" value = "M" 
                onChange = {handleChange}></input>M
                <input type = "radio" name = "n2" value = "F" 
                onChange = {handleChange}></input>F
            </div>
            <div>
                Select DOB <input type = "date" name = "n3" 
                onChange = {handleChange}></input>
            </div>
            <div>
                <input type = "submit" value = "Register" className = "btn btn-primary"></input>
            </div>
        </form>
        <div>
            Name: {name}, Gender: {gender}, Dob: {dob}
        </div>
    </div>)
}