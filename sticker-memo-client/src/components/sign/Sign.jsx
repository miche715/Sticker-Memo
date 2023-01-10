import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import InputWithLabel from "./InputWithLabel";
import SubmitButton from "./SubmitButton";

import Color from "../../utilities/color"

const style = {
    wrapper: {
        width: "100%", 
        height: "100%", 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "center", 
        alignItems: "center"
    }, 

    form: {
        width: "auto", 
        height: "auto",

        paddingBottom: "2vh", 

        borderStyle: "solid", 
        borderWidth: "3px", 
        borderColor: Color.firstBrandColor, 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "flex-start",
        alignItems: "stretch",
    }, 

    title: {
        paddingTop: "2vh", 
        paddingBottom: "2vh", 

        backgroundColor: Color.firstBrandColor, 

        fontWeight: "700", 
        fontSize: "1.5em", 
        color: Color.whiteColor, 

        textAlign: "center"
    }
};

const Sign = (props) => {
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

    const handleJoinButtonClick = (event) => {
        event.target.disabled = true;

        fetch("/api/users/join", {
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

            alert(responseBody.message);
        });
    };

    return (
        <div style={style.wrapper}>
            <div style={style.form}>
                <label style={style.title}>시작은 창대하지만 끝은 미미한 메모</label>
                <InputWithLabel label="유저네임" type="text" placeholder="유저네임" value={username} onChange={handleUsernameInputChange} />
                <InputWithLabel label="패스워드" type="password" placeholder="패스워드" value={password} onChange={handlePasswordInputChange} />
                <SubmitButton text="로그인" onClick={handleLoginButtonClick} />
                <SubmitButton text="회원가입" onClick={handleJoinButtonClick} />
            </div>
        </div>
    );
};

export default Sign;