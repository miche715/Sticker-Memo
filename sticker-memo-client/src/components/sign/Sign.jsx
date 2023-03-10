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

        background: Color.whiteColor, 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "center", 
        alignItems: "center"
    }, 

    form: {
        width: "500px", 
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

        if(checkEmpty())
        {
            event.target.disabled = false;
        }
        else
        {
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
        }
    };

    const handleJoinButtonClick = (event) => {
        event.target.disabled = true;

        if(checkExpression())
        {
            event.target.disabled = false;
        }
        else
        {
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
        }
    };

    const checkEmpty = () => {
        if(username === "" || password === "")
        {
            alert("???????????? ?????? ??????????????? ???????????? ???????????????.");
            return true;
        }
        else
        {
            return false;
        }
    };

    const checkExpression = () => {
        if(!/^[A-za-z0-9]{4,12}$/.test(username) || !/^[a-zA-Z0-9!@#$%^&*()?_~]{6,20}$/.test(password))
        {
            alert("???????????? ?????? ??????????????? ????????? ?????? ????????????.");
            return true;
        }
        else
        {
            return false;
        }
    };

    return (
        <div style={style.wrapper}>
            <div style={style.form}>
                <label style={style.title}>????????? ??????????????? ?????? ????????? ??????</label>
                <InputWithLabel label="????????????" type="text" placeholder="????????????(4 ~ 12????????? ?????? ?????????????? ??? ??????)" value={username} 
                    onChange={handleUsernameInputChange} />
                <InputWithLabel label="????????????" type="password" placeholder="????????????(6 ~ 20????????? ?????? ?????????????? ??? ?????? ??? ????????????)" value={password} 
                    onChange={handlePasswordInputChange} />
                <SubmitButton text="?????????" width="auto" height="5vh" onClick={handleLoginButtonClick} />
                <SubmitButton text="????????????" width="auto" height="5vh" onClick={handleJoinButtonClick} />
            </div>
        </div>
    );
};

export default Sign;