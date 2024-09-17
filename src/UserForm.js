import { useState } from 'react';

export default function UserForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello, " + inputs.username + ". You are " + inputs.age + " years old.");
    }

    return(
        <form onSubmit={handleSubmit} className=''>
            <label>Enter your name: <br></br>
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            </label><br></br>
            <label>Enter your age: <br></br>
                <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
                />
            </label><br></br>
            <input type="submit" />
        </form>
    );
}