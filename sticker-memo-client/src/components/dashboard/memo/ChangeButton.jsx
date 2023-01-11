import React from 'react';

import useButtonHover from "../../../hooks/useButtonHover";

import Color from "../../../utilities/color"

const style = {
    button: {
        width: "100px", 
        height: "40px", 

        marginLeft: "6px", 

        border: "none", 

        background: Color.firstBrandColor, 

        fontWeight: "600", 
        fontSize: "1.2em", 
        color: Color.whiteColor
    }
};

const ChangeButton = (props) => {
    const [onMouseEnter, onMouseLeave] = useButtonHover(Color.secondBrandColor, Color.firstBrandColor);

    return (
        <div>
            <button type="submit" 
                onClick={props.onClick} onMouseEnter={(event) => {onMouseEnter(event)}} onMouseLeave={(event) => {onMouseLeave(event)}} 
                style={style.button}>
                    {props.text}
            </button>
        </div>
    );
};

export default ChangeButton;