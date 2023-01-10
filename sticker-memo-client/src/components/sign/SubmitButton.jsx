import React from "react";

import useButtonHover from "../../hooks/useButtonHover";

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

    button: {
        height: "5vh", 

        border: "none", 

        background: Color.firstBrandColor, 

        fontWeight: "600", 
        fontSize: "1.3em", 
        color: Color.whiteColor
    }
};

const SubmitButton = (props) => {
    const [onMouseEnter, onMouseLeave] = useButtonHover(Color.secondBrandColor, Color.firstBrandColor);

    return (
        <div style={style.wrapper}>
            <button type="submit" 
                onClick={props.onClick} onMouseEnter={(event) => {onMouseEnter(event)}} onMouseLeave={(event) => {onMouseLeave(event)}} 
                style={style.button}>
                    {props.text}
            </button>
        </div>
    );
};

export default SubmitButton;