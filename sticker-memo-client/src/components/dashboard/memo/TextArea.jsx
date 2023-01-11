import React from 'react';

import Color from "../../../utilities/color";

const style = {
    wrapper: {
        width: "50%", 
        height: "100%", 
    },

    textarea: {
        width: "100%", 
        height: `calc(100% - 4.5px)`, 

        display: "block", 

        background: Color.whiteColor, 

        border: "none", 
        resize: "none", 
    }
}

const TextArea = (props) => {
    return (
        <div style={style.wrapper}>
            <textarea style={style.textarea} placeholder="내용을 입력해 주세요.">
            
            </textarea>
        </div>
    );
};

export default TextArea;