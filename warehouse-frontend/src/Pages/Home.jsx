import React from "react";
import Login from "./Login"
import { NavLink, Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <>
            <p><NavLink to={'/login'}>Login</NavLink></p>
            <p><NavLink to={'/employees'}>Employee Manager</NavLink></p>
            <p><NavLink to={'/vehicles'}>Vehicle Manager</NavLink></p>
            <Routes>
                <Route path="/login" Component={Login}></Route>
            </Routes>
        </>
    )
}

export default Home;