import React from "react";

import Color from "../../utilities/color"

const style = {
    wrapper: {
        marginTop: "4.5vh", 
        marginBottom: "4vh", 
        marginLeft: "3vh", 
        marginRight: "3vh", 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "flex-start",
        alignItems: "stretch",
    }, 

    button: {
        height: "5vh", 

        border: "none", 

        background: Color.brandColor, 

        fontWeight: "600", 
        fontSize: "1.3em", 
        color: Color.whiteColor
    }
};

const SubmitButton = (props) => {
    return (
        <div style={style.wrapper}>
            <button type="submit" onClick={props.onClick} style={style.button}>{props.text}</button>
        </div>
    );
};

export default SubmitButton;