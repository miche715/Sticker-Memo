import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import InputWithLabel from "./InputWithLabel";
import SubmitButton from "./SubmitButton";
import LinkAnchor from "./LinkAnchor";

import Color from "../../utilities/color"

const style = {
    wrapper: {
        width: "100%", 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "center", 
        alignItems: "center"
    }, 

    form: {
        width: "30vw", 
        height: "45vh",

        borderStyle: "solid", 
        borderWidth: "3px", 
        borderColor: Color.brandColor, 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "flex-start",
        alignItems: "stretch",
    }, 

    title: {
        paddingTop: "2vh", 
        paddingBottom: "2vh", 
        // paddingLeft: "0.5vh", 
        // paddingRight: "0.5vh", 

        backgroundColor: Color.brandColor, 

        fontWeight: "700", 
        fontSize: "1.5em", 
        color: Color.whiteColor, 

        textAlign: "center"
    }
};

const Login = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginButtonClick = (event) => {
        event.target.disabled = true;

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
            event.target.disabled = false;
            setUsername("");
            setPassword("");

            if(responseBody.isSuccess)
            {
                navigate("/dashboard");
            }
            else
            {
                alert(responseBody.message);
            }
        });
    };

    return (
        <div style={style.wrapper}>
            <div style={style.form}>
                <label style={style.title}>로그인</label>
                <InputWithLabel label="유저네임" type="text" placeholder="유저네임" value={username} onChange={handleUsernameInputChange} />
                <InputWithLabel label="패스워드" type="password" placeholder="패스워드" value={password} onChange={handlePasswordInputChange} />
                <SubmitButton text="로그인" onClick={handleLoginButtonClick} />
                <LinkAnchor text="회원가입" />
                <LinkAnchor text="아이디 / 비밀번호 찾기" />
            </div>
        </div>
    );
};

export default Login;