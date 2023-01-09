import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import Sign from "./components/sign/Sign"
import DashBoard from "./components/dashboard/DashBoard"

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/sign");
    }, [])
    
    return (
        <div style={{"width": "100%"}}>
            <Routes>
                <Route exact path="/sign" element={<Sign />} />
                <Route exact path="/dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    );
};

export default App;



// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//     const [username, setUsername] = useState("");

//     useEffect(()=>{
//         fetch("/api/users/post-test", {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//                 "Accept": "application/json"
//             }, 
//             body: JSON.stringify({
//                 username: "test", 
//                 password: "test"
//             })
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((responseBody)=>{
//                 console.log(responseBody.isSuccess)
//                 console.log(responseBody.message)
//                 console.log(responseBody.data)
//                 setUsername(responseBody.data.username);
//             });
//     }, []);

//     return (
//         <div>
//             App {username}
//         </div>
//     );
// };



// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//     const [username, setUsername] = useState("");

//     useEffect(()=>{
//         fetch("/api/users/get-test")
//             .then((response) => {
//                 return response.json();
//             })
//             .then((responseBody)=>{
//                 console.log(responseBody.isSuccess)
//                 console.log(responseBody.message)
//                 console.log(responseBody.data)
//                 setUsername(responseBody.data.username);
//             });
//     }, []);

//     return (
//         <div>
//             App {username}
//         </div>
//     );
// };