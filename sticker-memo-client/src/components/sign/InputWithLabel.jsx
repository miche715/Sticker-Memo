import React from "react";

import useInputFocus from "../../hooks/useInputFocus";

import Color from "../../utilities/color"

const style = {
    wrapper: {
        marginTop: "2vh", 
        marginLeft: "3vh", 
        marginRight: "3vh", 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "flex-start",
        alignItems: "stretch",
    }, 

    title: {
        marginBottom: "0.3vh", 

        fontWeight: "600", 
        fontSize: "0.9em", 
        color: Color.hintColor, 
    }, 

    input: {
        height: "4vh", 

        paddingLeft: "0.8vh", 
        paddingRight: "0.8vh", 

        borderStyle: "solid", 
        borderWidth: "2px", 
        borderColor: Color.hintColor, 
        outline: "none", 

        fontSize: "1em"
    }
};

const InputWithLabel = (props) => {
    const [onFocus, onBlur] = useInputFocus();

    return (
        <div style={style.wrapper}>
            <label style={style.title}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} 
                onChange={props.onChange} onFocus={(event) => {onFocus(event)}} onBlur={(event) => {onBlur(event)}}
                style={style.input}/>
        </div>
    );
};

export default InputWithLabel;