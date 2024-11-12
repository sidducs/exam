
import React, { useState } from "react";

function Controlled() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Fixed the typo here
        alert(`Name: ${name}`);
        alert(`Email: ${email}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default 
