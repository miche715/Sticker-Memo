import React from 'react';

import useButtonHover from "../../../hooks/useButtonHover";

import Color from "../../../utilities/color"

const style = {
    button: {
        //width: `calc(100% - 8px)`, 
        height: "40px", 

        margin: "6px", 

        border: "none", 

        background: Color.hintColor, 

        fontWeight: "600", 
        fontSize: "1.2em", 
        color: Color.whiteColor
    }
};

const CreateMemoButton = (props) => {
    const [onMouseEnter, onMouseLeave] = useButtonHover(Color.secondBrandColor, Color.hintColor);

    return (
        <button type="submit" 
            onClick={props.onClick} onMouseEnter={(event) => {onMouseEnter(event)}} onMouseLeave={(event) => {onMouseLeave(event)}} 
            style={style.button}>
                {props.text}
        </button>
    );
};

export default CreateMemoButton;