import React, { useState } from 'react';

const SignUpForm = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();  
        console.log("Username is: " + username + ", and " + "Password is: " + password)
    };

    return (
        <div className="Container">
            <h1>SignUp Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input style={{ marginTop: "150px", height: "40px", width: "50em" }}
                type="text"
                name="username"
                onChange={(event) => setUserName(event.target.value)}
                />
                <br/>
                <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                />
                <br/>
                <button type="submit" style={{ width: "10em", height: "4em", marginTop: "4em" }}>Button</button>
            </form> 
            <div>{username}</div>
            <div>{password}</div>
        </div>
    )
}

export default SignUpForm;
