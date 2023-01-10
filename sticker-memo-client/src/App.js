import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import Sign from "./components/sign/Sign"
import DashBoard from "./components/dashboard/DashBoard"

const App = () => {
    const navigate = useNavigate();

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if(!document.cookie.split("=")[0] === "Authorization" || document.cookie.length === 0)
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