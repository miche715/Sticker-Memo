import React from 'react';

import ChangeButton from './ChangeButton';
import TextArea from './TextArea';
import MapView from "./MapView";

import Color from '../../../utilities/color';

const style = {
    wrapper: {
        width: `calc(100% - 303px)`, 
        height: `calc(100% - 63px)`, 

        display: "flex", 
        flexDirection: "column",

        position: "absolute", 
        top: "62px", 

        background: Color.whiteColor, 
    
        borderStyle: "solid", 
        borderWidth: "0px 0px 1px 1px", 
        borderColor: Color.hintColor, 
    }, 

    title: {
        width: "100%", 
        height: "50px", 

        display: "flex", 
        flexDirection: "row",

        justifyContent: "flex-start", 
        alignItems: "center",

        background: Color.whiteColor, 

        borderStyle: "solid", 
        borderWidth: "0px 0px 1px 0px", 
        borderColor: Color.hintColor, 
    }, 

    title_name: {
        width: `calc(100% - 225px)`, 
        height: "70%", 

        marginLeft: "5px", 

        fontWeight: "500", 
        fontSize: "1.3em", 

        background: Color.whiteColor, 

        border: "none"
    }, 

    content: {
        height: "100%",

        display: "flex", 
        flexDirection: "row",

        justifyContent: "flex-start", 

        background: "green", 
    }
}

const MemoCreate = (props) => {
    const handleCreateButtonClick = (event) => {
        console.log("저장")
        // event.target.disabled = true;

        // if(checkEmpty())
        // {
        //     event.target.disabled = false;
        // }
        // else
        // {
        //     fetch("/api/users/login", {
        //         method: "POST", 
        //         headers: {
        //             "Content-Type": "application/json;charset=utf-8",
        //             "Accept": "application/json"
        //         }, 
        //         body: JSON.stringify({
        //             username: username, 
        //             password: password
        //         })
        //     })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((responseBody) => {
        //         event.target.disabled = false;
        //         setUsername("");
        //         setPassword("");
    
        //         if(responseBody.isSuccess)
        //         {
        //             navigate("/dashboard");
        //         }
        //         else
        //         {
        //             alert(responseBody.message);
        //         }
        //     });
        // }
    };

    const handleCancelButtonClick = (event) => {
        props.setSelect(null)
    };

    return (
        <div style={style.wrapper}>
            <div style={style.title}>
                <input type="text" style={style.title_name} placeholder="제목을 입력해 주세요." />
                <ChangeButton text="저장" onClick={handleCreateButtonClick} />
                <ChangeButton text="취소" onClick={handleCancelButtonClick} />
            </div>
            <div style={style.content}>
                <TextArea />
                <MapView />
            </div>
        </div>
    );
};

export default MemoCreate;