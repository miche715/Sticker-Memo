import React from "react";

import useButtonHover from "../../../hooks/useButtonHover";

import Color from "../../../utilities/color"

const style = {
    button: {
        width: "100px", 
        height: "40px", 

        position: "fixed", 
        top: "10px", 
        left: `calc(100% - 103px)`, 

        border: "none", 

        background: Color.hintColor, 

        fontWeight: "600", 
        fontSize: "0.8em", 
        color: Color.whiteColor
    }
};

const SubmitButton = (props) => {
    const [onMouseEnter, onMouseLeave] = useButtonHover(Color.secondBrandColor, Color.hintColor);

    return (
        <button type="submit" 
            onClick={props.onClick} onMouseEnter={(event) => {onMouseEnter(event)}} onMouseLeave={(event) => {onMouseLeave(event)}} 
            style={style.button}>
                {props.text}
        </button>
    );
};

export default SubmitButton;