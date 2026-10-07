import React from "react";
import { Form } from "react-router-dom";
const Login = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Login");
    }

    return (
        <>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
            <label>Username <input type="text" required/></label>
            
            <label>Password<input type="text" required/></label>

            <input type="Submit"></input>
        </form>
        </>
    ); 
}

export default Login;