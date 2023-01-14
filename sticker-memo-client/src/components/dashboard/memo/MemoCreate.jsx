import React from 'react';
import { useState } from "react";

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
    }
}

const MemoCreate = (props) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [markers, setMarkers] = useState([]);

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTextInputChange = (event) => {
        setText(event.target.value);
    };

    const handleCreateButtonClick = (event) => {
        const latitudes = [];
        const longitudes = [];

        for(const marker of markers)
        {
            latitudes.push(marker.position.lat());
            longitudes.push(marker.position.lng());
        }

        event.target.disabled = true;

        fetch("/api/memos/write", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                title: title, 
                text: text, 
                latitudes: latitudes, 
                longitudes: longitudes
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((responseBody) => {
            event.target.disabled = false;
            alert(responseBody.message);

            props.setSelect(null)
            window.location.reload();
        });
    };

    const handleCancelButtonClick = (event) => {
        props.setSelect(null)
    };

    return (
        <div style={style.wrapper}>
            <div style={style.title}>
                <input type="text" style={style.title_name} placeholder="제목을 입력해 주세요." value={title} 
                    onChange={(event) => {handleTitleInputChange(event)}} />
                <ChangeButton text="저장" onClick={handleCreateButtonClick} />
                <ChangeButton text="취소" onClick={handleCancelButtonClick} />
            </div>
            <div style={style.content}>
                <TextArea value={text} onChange={handleTextInputChange} />
                <MapView markers={markers} setMarkers={setMarkers} />
            </div>
        </div>
    );
};

export default MemoCreate;