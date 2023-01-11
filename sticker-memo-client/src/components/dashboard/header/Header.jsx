import React from 'react';
import { useNavigate } from "react-router-dom"; 

import LogoutButton from "./LogoutButton"

import Color from '../../../utilities/color';

const style = {
    wrapper: {
        width: `calc(100% - 2px)`, 
        height: "60px",

        zIndex: "1",

        position: "fixed", 

        background: Color.firstBrandColor,

        borderStyle: "solid", 
        borderWidth: "1px", 
        borderColor: Color.hintColor, 
        outline: "none", 

        display: "flex", 
        flexDirection: "row",

        justifyContent: "flex-start",
        alignItems: "center",
    }, 

    h1: {
        marginLeft: "5px", 

        fontWeight: "600", 
        fontSize: "1.9em", 
        color: Color.whiteColor, 
    }
};

const Header = (props) => {
    const navigate = useNavigate();

    const handleLogoutButtonClick = (event) => {
        event.target.disabled = true;

        fetch("/api/users/logout")
        .then((response) => {
            return response.json();
        })
        .then((responseBody) => {
            event.target.disabled = false;

            alert(responseBody.message);
            navigate("/sign");
        });
    };

    return (
        <div style={style.wrapper}>
            <h1 style={style.h1}>시작은 창대하지만 끝은 미미한 메모</h1>
            <LogoutButton text="로그아웃" onClick={handleLogoutButtonClick} />
        </div>
    );
};

export default Header;