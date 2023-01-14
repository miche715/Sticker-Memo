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

const MemoDetail = (props) => {
    const handleCancelButtonClick = (event) => {
        props.setSelect(null)
    };

    return (
        <div style={style.wrapper}>
            <div style={style.title}>
                <label type="text" style={style.title_name}>{props.memo.title}</label>
                <ChangeButton text="취소" onClick={handleCancelButtonClick} />
            </div>
            <div style={style.content}>
                <TextArea value={props.memo.text} />
                <MapView latitudes={props.memo.latitudes} longitudes={props.memo.longitudes}/>
            </div>
        </div>
    );
};

export default MemoDetail;