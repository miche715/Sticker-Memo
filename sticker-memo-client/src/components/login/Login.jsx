import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const style = {
    wrapper: {
        display: "flex", 
        flexDirection: "column",
        height: "15vh",
        justifyContent: "center",
        alignItems: "center",
        background: "green"
    }
};

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLoginButtonClick = (event) => {
        fetch("/api/users/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                username: username, 
                password: password
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((responseBody) => {
            if(responseBody.isSuccess)
            {
                navigate("/dashboard");
            }
            else
            {
                alert(responseBody.message)
            }
        });

        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <div style={style.wrapper}>
                <input type="text" placeholder="유저네임" value={username} onChange={(event) => {setUsername(event.target.value)}} />
                <input type="password" placeholder="패스워드" value={password} onChange={(event) => {setPassword(event.target.value)}} />
                <button type="submit" onClick={handleLoginButtonClick}>로그인</button>
            </div>
        </div>
    );
};

export default Login;