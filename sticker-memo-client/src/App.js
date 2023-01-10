import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import Sign from "./components/sign/Sign"
import DashBoard from "./components/dashboard/DashBoard"

import { convertCookieToObject } from "./utilities/cookie"

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!document.cookie.split("=")[0] === "Authorization")
        {
            navigate("/sign");
        }
    }, [])
    
    return (
        <div style={{"width": "100%", "height": "100vh"}}>
            <Routes>
                <Route exact path="/sign" element={<Sign />} />
                <Route exact path="/dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    );
};

export default App;